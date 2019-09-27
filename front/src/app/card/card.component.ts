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
  cards: Card[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cardService: CardService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.unitId = params['unitId'];
      this.cardService.getCards(this.unitId).subscribe((data: Card[]) => {
        this.cards = [];
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

  changeImage(cardId: number, fileInput: any) {
    const image: File = fileInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {
      this.cardService.putImage(this.unitId, cardId, image).subscribe(
        _ => {
          this.ngOnInit();
        }, (error: Error) => {
          console.error('Error creating new image: ' + error);
        }
      );
    });
    reader.readAsDataURL(image);
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