import { Unit } from '../../../unit/unit.model';
import { Component, OnInit } from '@angular/core';
import { TdDialogService } from '@covalent/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';

import {Module} from '../module.model';

import { LoginService } from '../../../auth/login.service';
import { UnitService } from '../../../unit/unit.service';
import {TabService} from '../../../tab/tab.service';
import {ModuleService} from '../module.service';
import {Block} from '../../block.model';

@Component({
  selector: 'app-module-editor',
  templateUrl: './module-editor.component.html',
  styleUrls: ['./module-editor.component.css']
})

export class ModuleEditorComponent implements OnInit {

  unitId: number;

  module: Module;
  moduleId: number;

  treeControl = new NestedTreeControl<Module>(node => !!node && node.blocks);
  dataSource = new MatTreeNestedDataSource<Module>();

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private dialogService: TdDialogService,
              private loginService: LoginService,
              private unitService: UnitService,
              private bottomSheet: MatBottomSheet,
              private tabService: TabService,
              private moduleService: ModuleService) {}

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.unitId = params.unitId;
      this.moduleId = params.moduleId;
      this.moduleService.getModule(this.moduleId).subscribe((module: Module) => {
        this.module = module;
        this.dataSource.data = this.module.blocks;
        this.unitService.getUnit(this.unitId).subscribe((unit: Unit) => {
          this.tabService.setModule(unit.name, this.unitId, module.name);
        });
      });
    });

  }

  hasChild = (_: number, node: Module) => !!node && !!node.blocks && node.blocks.length > 0;

}
