import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Unit} from '../../../unit/unit.model';
import {UnitService} from '../../../unit/unit.service';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { ClipboardService } from 'ngx-clipboard';


@Component({
  templateUrl: './units-cards-tool.component.html',
  styleUrls: ['./units-cards-tool.component.css']
})

export class UnitsCardsToolComponent implements OnInit {

  units: Unit[];
  unitsResult: Unit[];

  copyInfoPosition = 'after';

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private unitService: UnitService,
              private bottomSheetRef: MatBottomSheetRef<UnitsCardsToolComponent>,
              private clipboardService: ClipboardService) {
  }

  ngOnInit() {
    this.unitService.getUnits().subscribe((data: Unit[]) => {
      this.units = [];
      this.unitsResult = [];
      data.forEach((unit: Unit) => {
        this.units.push({
          id: unit.id,
          name: unit.name,
          cards: unit.cards,
          itineraries: unit.itineraries
        });
        this.unitsResult = this.units;
      });
      console.log(this.units);
    });
  }

  applyFilterUnits(value: string) {
    this.unitsResult = [];
    for (let result of this.units) {
      if (result.name.toLowerCase().includes(value.toLowerCase())) {
        this.unitsResult.push(result);
      }
    }
  }

  openLink(event: MouseEvent, text: string): void {
    this.clipboardService.copyFromContent(text);
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
