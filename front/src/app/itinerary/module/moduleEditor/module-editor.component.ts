import { Unit } from '../../../unit/unit.model';
import { Component, OnInit } from '@angular/core';
import { TdDialogService } from '@covalent/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MatBottomSheet} from '@angular/material/bottom-sheet';

import {Module} from '../module.model';

import { LoginService } from '../../../auth/login.service';
import { UnitService } from '../../../unit/unit.service';
import {TabService} from '../../../tab/tab.service';
import {ModuleService} from '../module.service';

@Component({
  selector: 'app-module-editor',
  templateUrl: './module-editor.component.html',
  styleUrls: ['./module-editor.component.css']
})

export class ModuleEditorComponent implements OnInit {

  unitId: number;

  module: Module;
  moduleId: number;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private dialogService: TdDialogService,
              private loginService: LoginService,
              private unitService: UnitService,
              private bottomSheet: MatBottomSheet,
              private tabService: TabService,
              private moduleService: ModuleService) {
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.unitId = params.unitId;
      this.moduleId = params.moduleId;
      this.moduleService.getModule(this.moduleId).subscribe((module: Module) => {
        this.module = module;
        this.unitService.getUnit(this.unitId).subscribe((unit: Unit) => {
          this.tabService.setModule(unit.name, this.unitId, module.name);
        });
      });
    });

  }

}
