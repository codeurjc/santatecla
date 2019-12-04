import {Component, OnInit} from '@angular/core';
import {Unit} from '../unit/unit.model';
import {ActivatedRoute, Router} from '@angular/router';
import {Course} from "../course/course.model";
import {UnitService} from "./unit.service";
import {CardService} from "../card/card.service";
import {TabService} from "../tab/tab.service";
import {LoginService} from "../auth/login.service";
import {Card} from "../card/card.model";

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
