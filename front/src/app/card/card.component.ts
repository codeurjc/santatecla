import {Unit } from '../unit/unit.model';
import {CardService} from './card.service';
import {Router, ActivatedRoute} from '@angular/router';
import {Component, HostListener, OnInit} from '@angular/core';
import {Card} from './card.model';
import {UnitService} from '../unit/unit.service';
import {MatDialog} from "@angular/material/dialog";
import {CardConfirmComponent} from "./confirm/card-confirm.component";

@Component({
  selector: 'app-cards',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  unitId: number;
  cards: Card[] = [];
  unit: Unit;
  disableSaveButton = true;
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

  private enableSaveButton() {
    this.disableSaveButton = this.emptyField();
  }

  private emptyField() {
    let empty = false;
    this.cards.forEach((card: Card) => {
      empty = ((empty) || (!card.name) || (!card.content));
    });
    return empty;
  }

  private addCard() {

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
        this.cardService.deleteCard(this.unitId, id).subscribe(() => {
          this.cards.splice(this.getCardIndex(id), 1);
          this.showSpinner = false;
        });
      }
    });
  }

  save() {
    this.disableSaveButton = true;
    this.showSpinner = true;
    let i = 0;
    this.cards.forEach((card: Card) => {
      this.cardService.save(this.unitId, card).subscribe(
        _ => {
          i++;
          if (i === this.cards.length) {
            this.showSpinner = false;
          }
        }, error => {
          console.error(error);
        }
      );
    });
  }

  @HostListener('window:keydown', ['$event'])
  onKeyPress($event: KeyboardEvent) {
    if (($event.metaKey || $event.ctrlKey) && ($event.key == 's')) {
      $event.preventDefault();
      if (!this.disableSaveButton) {
        this.save();
      }
    }
  }

}
