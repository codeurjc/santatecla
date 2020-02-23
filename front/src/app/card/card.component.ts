import {Unit } from '../unit/unit.model';
import {CardService} from './card.service';
import {Router, ActivatedRoute} from '@angular/router';
import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Card} from './card.model';
import {UnitService} from '../unit/unit.service';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmActionComponent} from '../confirmAction/confirm-action.component';
import Asciidoctor from 'asciidoctor';
import {ImageComponent} from '../images/image.component';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {ImageService} from '../images/image.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

function convertToHTML(text) {
  const asciidoctor = Asciidoctor();
  const html = asciidoctor.convert(text);
  return(html);
}

@Component({
  selector: 'app-cards',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit, AfterViewChecked {

  @ViewChild('cardList') cardList: ElementRef;

  unitId: number;
  cards: Card[] = [];
  unit: Unit;
  showSpinner = false;

  contentCount: number;

  cardsView: boolean[];
  prettyCards: any[];

  confirmText = 'Se eliminará la ficha permanentemente';
  button1 = 'Cancelar';
  button2 = 'Borrar';

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private cardService: CardService,
              private unitService: UnitService,
              private dialog: MatDialog,
              private bottomSheet: MatBottomSheet,
              private imageService: ImageService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.unitId = params.unitId;
      this.showSpinner = true;
      this.cardsView = [];
      this.prettyCards = [];
      this.unitService.getUnit(this.unitId).subscribe((data: Unit) => {
        this.unit = data;
        this.cards = this.unit.cards;
        this.cards.forEach((card, index) => {
          this.cardsView.push(true);
          this.prettyCards.push('');
          this.cardContentProcessor(card.content, index);
        });
        this.showSpinner = false;
      });
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousIndex !== event.currentIndex) {
      let choosen;
      if (!this.cardsView[event.previousIndex]) {
        choosen = false;
      } else {
        choosen = true;
      }
      if (event.previousIndex > event.currentIndex) {
        if ((event.previousIndex - event.currentIndex) > 1) {
          for (let i = event.previousIndex; i > event.currentIndex; i--) {
            this.cardsView[i] = this.cardsView[i - 1];
          }
        } else {
          this.cardsView[event.previousIndex] = this.cardsView[event.currentIndex];
        }
      } else {
        if ((event.currentIndex - event.previousIndex) > 1) {
          for (let i = event.previousIndex; i < event.currentIndex; i++) {
            this.cardsView[i] = this.cardsView[i + 1];
          }
        } else {
          this.cardsView[event.previousIndex] = this.cardsView[event.currentIndex];
        }
      }
      if (!choosen) {
        this.cardsView[event.currentIndex] = false;
      } else {
        this.cardsView[event.currentIndex] = true;
      }
    }
    moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
  }

  ngAfterViewChecked() {
    this.cardList.nativeElement.childNodes.forEach((card) => {
      try {
        this.fitContent(card.childNodes[2].firstChild.firstChild.childNodes[2].firstChild);
      } catch (e) {}
    });
  }

  cardContentProcessor(content: string, index: number) {
    this.contentCounterFunction(content);
    let extractedData = [];
    let position = [];
    let counter = 0;
    let contentCounter = 0;
    const lineas = content.split('\n');
    lineas.forEach((line) => {
      const words = line.split('.');
      if (words[0] === 'insert') {
        const parameters = words[1].split('/');
        if (parameters[0] === 'image') {
          position.push(counter);
          this.getEmbebedContent(Number(parameters[1]), content, contentCounter, 'image', extractedData, position, index);
          contentCounter = contentCounter + 1;
        }
      }
      this.addExtractedData(content, extractedData, position, index);
      counter = counter + 1;
    });
  }

  addExtractedData(content: string, extractedData: any, position: any, index: number) {
    let componentsChecker = 0;
    let cardContentExtended = '';
    let lines = content.split('\n');
    for (let i = 0; i < position.length; i ++) {
      lines[position[i]] = extractedData[i];
    }
    lines.forEach((line: string) => {
      cardContentExtended = cardContentExtended + line + '\n';
    });
    extractedData.forEach((component: string) => {
      if (component !== '') {
        componentsChecker = componentsChecker + 1;
      }
    });
    if (componentsChecker === this.contentCount) {
      this.showSpinner = false;
      this.prettyCards[index] = convertToHTML(cardContentExtended);
    }
  }

  async getEmbebedContent(content1: any, content: string, contentCounter: number, type: string, extractedData: any, position: any, index: number) {
    let contentEmbebed;

    if (type === 'image') {
      contentEmbebed = await this.imageService.getImage(content1).toPromise().catch((error) => console.log(error));
      if (typeof contentEmbebed !== 'undefined') {
        const image = this.convertImage(contentEmbebed.image);
        const img = '++++\n' +
          '<img class="img-lesson" src="' + image + '">\n' +
          '++++\n' +
          '\n';
        extractedData.splice(contentCounter, 1, img);
      } else {
        extractedData.splice(contentCounter, 1, 'ERROR\n');
      }
    }

    this.addExtractedData(content, extractedData, position, index);
  }

  contentCounterFunction(content: string) {
    this.contentCount = 0;
    let lines: string[];
    lines = content.split('\n');
    lines.forEach((line: string) => {
      let words: string[];
      words = line.split('.');
      if (words[0] === 'insert') {
        this.contentCount = this.contentCount + 1;
      }
    });
  }

  convertImage(bytes: any) {
    return 'data:image/png;base64,' + btoa(new Uint8Array(bytes).reduce((data, byte) =>
      data + String.fromCharCode(byte),
      ''));
  }

  editCard(index: number) {
    this.cardsView[index] = false;
  }

  viewCard(index: number) {
    this.cardsView[index] = true;
  }

  private addCard() {
    if ((this.cards.length === 0) || (this.cards[0].id !== 0) || (this.cards[0].name && this.cards[0].content)) {
      this.cards.unshift({
        id: 0,
        name: '',
        content: ''
      });
      this.prettyCards.unshift(convertToHTML(''));
      this.cardsView.unshift(false);
    }
    this.focusNewCard();
  }

  private focusNewCard() {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }

  private getCardIndex(id: number): number {
    let index = -1;
    this.cards.forEach((card, i) => {
      if (card.id === id) {
        index = i;
      }
    });
    return index;
  }

  private deleteCard(id: number, index: number) {
    const dialogRef = this.dialog.open(ConfirmActionComponent, {
      data: {confirmText: this.confirmText, button1: this.button1, button2: this.button2}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.showSpinner = true;
        if (id === 0) {
          this.cards.splice(0, 1);
          this.prettyCards.splice(0, 1);
          this.cardsView.splice(0, 1);
          this.showSpinner = false;
        } else {
          this.cardService.deleteCard(this.unitId, id).subscribe(() => {
            this.cards.splice(this.getCardIndex(id), 1);
            this.prettyCards.splice(index, 1);
            this.cardsView.splice(index, 1);
            this.showSpinner = false;
          });
        }
      }
    });
  }

  save(card: Card, index: number) {
    if (card.name && card.content) {
      this.showSpinner = true;
      if (card.id === 0) {
        this.cardService.create(this.unitId, card).subscribe((createdCard) => {
          card.id = createdCard.id;
          this.cardContentProcessor(card.content, index);
          this.showSpinner = false;
        });
      } else {
        this.cardService.save(this.unitId, card).subscribe(() => {
          this.cardContentProcessor(card.content, index);
          this.showSpinner = false;
        }, error => {
          console.error(error);
        });
      }
    }
  }

  changeTextArea(event: Event) {
    this.fitContent(event.target as HTMLTextAreaElement);
  }

  fitContent(textArea: HTMLTextAreaElement) {
    textArea.style.overflow = 'hidden';
    textArea.style.height = '0px';
    textArea.style.height = textArea.scrollHeight + 'px';
  }

  openImageBottomSheet(): void {
    this.bottomSheet.open(ImageComponent);
  }

}
