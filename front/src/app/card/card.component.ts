import { CardService } from './card.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Card } from './card.model';

@Component({
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  unitId: number;
  cards: Card[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cardService: CardService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.unitId = params['unitId'];
      this.cardService.getCards(this.unitId).subscribe((data: Card[]) => {
        data.forEach((card: Card) => {
          this.cards.push({
            id: card['id'],
            name: card['name'],
            text: card['text'],
            image: (card['image']) ? this.convertImage(card['image']) : ''
          });
        });
      }, error => {});
    });
  }

  convertImage(bytes: any) {
    return 'data:image/png;base64,' + btoa(String.fromCharCode.apply(null, new Uint8Array(bytes)));
  }

  save() {
    this.cards.forEach((card: Card) => {
      if (card.name !== '') {
        this.cardService.save(this.unitId, card).subscribe(
            _ => {

            }, error => {
              console.error(error);
            }
        );
      }
    });
  }

}
