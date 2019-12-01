import {Component, OnInit} from '@angular/core';
import {Unit} from '../unit/unit.model';
import {ActivatedRoute, Router} from '@angular/router';
import {UnitService} from '../unit/unit.service';
import {Itineray} from '../itinerary/itinerary.model';


@Component({
  selector: 'app-submenu',
  templateUrl: './subMenu.component.html',
  styleUrls: ['./subMenu.component.css']
})

export class SubMenuComponent implements OnInit {

  unit: Unit;
  itinerariesResult: Itineray[];

  unitId: number;
  itineraryId: number;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private unitService: UnitService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.unitId = params.unitId;
      this.itineraryId = params.itineraryId;
    });

    this.unitService.getUnit(this.unitId).subscribe((data: Unit) => {
      this.unit = {
        id: data.id,
        name: data.name,
        itineraries: data.itineraries
      };
      this.itinerariesResult = this.unit.itineraries;
    });

  }

  applyFilterItineraries(value: string) {
    this.itinerariesResult = [];
    for (let result of this.unit.itineraries) {
      if (result.name.toLowerCase().includes(value.toLowerCase())) {
        this.itinerariesResult.push(result);
      }
    }
  }

  addItinerary() {
    let i: Itineray;
    i = {name: 'Prueba'};
    this.unitService.addItinerary(this.unitId, i).subscribe();
  }

  navigateToUnitCards() {
    this.router.navigate(['/units/' + this.unit.id + '/cards']);
  }

  navigateToUnitItinerary(itineraryId: number) {
    this.router.navigate(['/units/' + this.unit.id + '/itineraries/' + itineraryId]);
  }

  navigateToUnitQuestions() {
    this.router.navigate(['units', this.unit.id, 'question']);
  }
}
