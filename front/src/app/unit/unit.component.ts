import {Component, OnInit} from '@angular/core';
import {Unit} from '../unit/unit.model';
import {ActivatedRoute, Router} from '@angular/router';
import {UnitService} from "./unit.service";

@Component({
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})

export class UnitComponent implements OnInit {

  unit: Unit;
  activeTab = 0;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private unitService: UnitService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const unitId = params['unitId'];
      this.unitService.getUnit(unitId).subscribe((data: Unit) => {
        this.unit = data;
      },error => {
        console.log(error);
      });
    });
  }

  private activateTab(tab: number) {
    this.activeTab = tab;
  }

}
