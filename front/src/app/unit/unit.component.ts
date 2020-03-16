import {Component, OnInit} from '@angular/core';
import {Unit} from '../unit/unit.model';
import {ActivatedRoute, Router} from '@angular/router';
import {UnitService} from './unit.service';
import {BreadcrumbService} from '../breadcrumb/breadcrumb.service';
import {TabService} from '../tab/tab.service';
import {Tab} from '../tab/tab.model';

@Component({
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})

export class UnitComponent implements OnInit {

  unit: Unit;
  activeBreadcrumb = 0;
  showMenu = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private unitService: UnitService, private breadcrumbService: BreadcrumbService,
              private tabService: TabService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const unitId = params.unitId;
      this.unitService.getUnit(unitId).subscribe((data: Unit) => {
        this.tabService.addTab(new Tab('Unidad', unitId, data.name, null, null, null));
        this.breadcrumbService.setUnit(data.name, data.id);

        this.unit = data;
      }, error => { console.log(error); });
    });
  }

  activateBreadcrumb(breadcrumb: number) {
    this.activeBreadcrumb = breadcrumb;
  }

  setShowMenu(showMenu: boolean) {
    this.showMenu = showMenu;
  }

}
