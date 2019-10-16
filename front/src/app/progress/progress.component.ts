import { Component, OnInit} from '@angular/core';
import { ProgressService } from './progress.service';
import { Unit } from './unit.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './progress.component.html',
  styleUrls: [
    './progress.component.css'
  ]
})

export class ProgressComponent implements OnInit {

  unitId: number;
  unit: Unit;

  constructor(private progressService: ProgressService, 
    private activatedRoute: ActivatedRoute){}

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      this.unitId = params['unitId'];
      this.progressService.getUnit(this.unitId).subscribe((data: Unit) => {
        this.unit = data;
      }, error => {
      });
    });
  }
}