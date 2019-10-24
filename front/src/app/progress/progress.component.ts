import { Itineray } from './../itinerary/itinerary.model';
import { Component, OnInit} from '@angular/core';
import { ProgressService } from './progress.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Unit } from '../unit/unit.model';

@Component({
  templateUrl: './progress.component.html',
  styleUrls: [
    './progress.component.css'
  ]
})

export class ProgressComponent implements OnInit {

  unitId: number;
  unit: Unit;
  itineraries: Itineray[];

  constructor(private progressService: ProgressService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      this.unitId = params['unitId'];
      this.progressService.getUnit(this.unitId).subscribe((data: Unit) => {
        this.unit = {
          id: data['id'],
          name: data['name'],
          itineraries: data['itineraries'],
          definitionQuestions: data['definitionQuestions'],
          listQuestions: data['listQuestions']
        };
        this.itineraries = this.unit.itineraries;
      }, error => {
      });
    });
  }

  navigateToUnitCards() {
    this.router.navigate(['/units/' + this.unitId + '/cards']);
  }

  navigateToUnitProgress() {
    this.router.navigate(['/units/' + this.unitId + '/progress']);
  }

  navigateToUnitItinerary(itineraryId: number) {
    this.router.navigate(['/units/' + this.unitId + '/itineraries/' + itineraryId]);
  }
}
