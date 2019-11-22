import { Unit } from '../unit/unit.model';
import { Itineray } from '../itinerary/itinerary.model';
import { CardService } from './card.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Card } from './card.model';
import { UnitService } from '../unit/unit.service';
import {TabService} from '../tab/tab.service';
import {LoginService} from '../auth/login.service';

@Component({
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  unitId: number;
  cards: Card[];
  unit: Unit;
  itineraries: Itineray[];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private cardService: CardService,
              private unitService: UnitService,
              private tabService: TabService,
              private loginService: LoginService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.unitId = params['unitId'];
      this.unitService.getUnit(this.unitId).subscribe((data: Unit) => {
        this.unit = {
          id: data.id,
          name: data.name,
          itineraries: data.itineraries
        };
        this.itineraries = this.unit.itineraries;
        if(this.loginService.isAdmin) {
          this.tabService.addTab('units', this.unitId, this.unit.name, null);
        }
      });
      this.cardService.getCards(this.unitId).subscribe((data: Card[]) => {
        this.cards = [];
        data.forEach((card: Card) => {
          this.cards.push({
            id: card.id,
            name: card.name,
            content: card.content,
            image: (card.image) ? this.convertImage(card.image) : ''
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

  navigateToUnitProgress() {
    this.router.navigate(['/units/' + this.unitId + '/progress']);
  }

  navigateToUnitItinerary(itineraryId: number) {
    this.router.navigate(['/units/' + this.unitId + '/itineraries/' + itineraryId]);
  }

  navigateToUnitQuestions() {
    this.router.navigate(['units', this.unitId, 'question']);
  }

}
