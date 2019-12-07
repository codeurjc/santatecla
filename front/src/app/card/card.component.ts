import {Unit } from '../unit/unit.model';
import {CardService} from './card.service';
import {Router, ActivatedRoute} from '@angular/router';
import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Card} from './card.model';
import {UnitService} from '../unit/unit.service';
import {MatDialog} from "@angular/material/dialog";
import {CardConfirmComponent} from "./confirm/card-confirm.component";

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

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cardService: CardService,
              private unitService: UnitService, private dialog: MatDialog) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.unitId = params['unitId'];
      this.showSpinner = true;
      this.unitService.getUnit(this.unitId).subscribe((data: Unit) => {
        this.unit = data;
        this.cards = this.unit.cards;
        this.showSpinner = false;
      });
    });
  }

  ngAfterViewChecked() {console.log('a');
    this.cardList.nativeElement.childNodes.forEach((card) => {
      try {
        this.fitContent(card.childNodes[2].firstChild.firstChild.childNodes[2].firstChild);
      } catch (e) {}
    });
  }

  private addCard() {
    if ((this.cards.length === 0) || (this.cards[0].name && this.cards[0].content)) {
      this.cards.unshift({
        id: 0,
        name: '',
        content: ''
      });
    }
    this.focusNewCard();
  }

  private focusNewCard() {
    window.scroll(0, 0);
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

  private deleteCard(id: number) {
    this.dialog.open(CardConfirmComponent, {}).afterClosed().subscribe(result => {
      if (result === 1) {
        this.showSpinner = true;
        if (id === 0) {
          this.cards.splice(0, 1);
          this.showSpinner = false;
        } else {
          this.cardService.deleteCard(this.unitId, id).subscribe(() => {
            this.cards.splice(this.getCardIndex(id), 1);
            this.showSpinner = false;
          });
        }
      }
    });
  }

  save(card: Card) {
    if (card.name && card.content) {
      this.showSpinner = true;
      if (card.id === 0) {
        this.cardService.create(this.unitId, card).subscribe((createdCard) => {
          card.id = createdCard.id;
          this.showSpinner = false;
        });
      } else {
        this.cardService.save(this.unitId, card).subscribe(() => {
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

}
