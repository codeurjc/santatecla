import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Unit} from '../../../unit/unit.model';
import {UnitService} from '../../../unit/unit.service';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { ClipboardService } from 'ngx-clipboard';


@Component({
  templateUrl: './lesson-slides-tool.component.html',
  styleUrls: ['./lesson-slides-tool.component.css']
})

export class LessonSlidesToolComponent implements OnInit {

  units: Unit[];
  unitsResult: Unit[];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private unitService: UnitService,
              private bottomSheetRef: MatBottomSheetRef<LessonSlidesToolComponent>,
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
          lessons: unit.lessons
        });
        this.unitsResult = this.units;
      });
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
