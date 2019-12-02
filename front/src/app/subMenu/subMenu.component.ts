import {Component, OnInit} from '@angular/core';
import {Unit} from '../unit/unit.model';
import {ActivatedRoute, Router} from '@angular/router';
import {UnitService} from '../unit/unit.service';
import {Itineray} from '../itinerary/itinerary.model';
import {MatDialog} from "@angular/material/dialog";
import {ItineraryFormComponent} from "../itinerary/itineraryForm/itineraryForm.component";


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

  newItinerary: Itineray;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private unitService: UnitService,
              public dialog: MatDialog) {
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

  openDialog(): void {
    this.newItinerary = {name: ''};
    const dialogRef = this.dialog.open(ItineraryFormComponent, {
      width: '400px',
      data: {itinerary: this.newItinerary}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.newItinerary = result;
      if (typeof this.newItinerary !== 'undefined') {
        if (this.newItinerary.name !== '') {
          this.unitService.addItinerary(this.unitId, this.newItinerary).subscribe((data) => {
            this.ngOnInit();
            this.router.navigate(['/units/' + this.unit.id + '/itineraries/' + data.id]);
          });
        }
      }
    });
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
