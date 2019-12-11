import { Unit } from '../../../unit/unit.model';
import {AfterViewInit, Component, ElementRef, HostListener, Inject, OnInit, ViewChild} from '@angular/core';
import { TdDialogService } from '@covalent/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { DOCUMENT } from '@angular/common';

import {Module} from '../module.model';

import { LoginService } from '../../../auth/login.service';
import { UnitService } from '../../../unit/unit.service';
import {TabService} from '../../../tab/tab.service';
import {ModuleService} from '../module.service';
import {Block} from '../../block.model';
import {CourseService} from '../../../course/course.service';
import {Course} from '../../../course/course.model';

@Component({
  selector: 'app-module-editor',
  templateUrl: './module-editor.component.html',
  styleUrls: ['./module-editor.component.css']
})

export class ModuleEditorComponent implements OnInit{

  @ViewChild('tree') tree;

  unitId: number;
  courseId: number;

  module: Module;
  moduleId: number;

  treeControl = new NestedTreeControl<Module>(node => !!node && node.blocks);
  indexTreeControl = new NestedTreeControl<Module>(node => !!node && node.blocks);
  dataSource = new MatTreeNestedDataSource<Module>();

  showMenu = true;
  activeTab = 0;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private dialogService: TdDialogService,
              private loginService: LoginService,
              private unitService: UnitService,
              private bottomSheet: MatBottomSheet,
              private tabService: TabService,
              private moduleService: ModuleService,
              private courseService: CourseService,
              @Inject(DOCUMENT) document) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.unitId = params.unitId;
      this.courseId = params.courseId;
      this.moduleId = params.moduleId;
      this.moduleService.getModule(this.moduleId).subscribe((module: Module) => {
        this.module = module;
        this.dataSource.data = this.module.blocks;

        this.indexTreeControl.dataNodes = this.dataSource.data;
        this.indexTreeControl.expandAll();

        if (this.unitId !== undefined) {
          this.unitService.getUnit(this.unitId).subscribe((unit: Unit) => {
            this.tabService.setModule(unit.name, this.unitId, module.name);
          });
        } else {
          this.courseService.getCourse(this.courseId).subscribe((course: Course) => {
            this.tabService.setModule(course.name, course.id, module.name);
          });
        }
      });
    });
  }
  hasChild = (_: number, node: Module) => !!node && !!node.blocks && node.blocks.length > 0;

  private activateTab(tab: number) {
    this.activeTab = tab;
  }

  private setShowMenu(showMenu: boolean) {
    this.showMenu = showMenu;
  }

  expandNode(node: Module) {
    this.expandParents(this.module, node.id);
    this.treeControl.expand(node);
    window.scrollTo(document.getElementById(node.name).offsetLeft, document.getElementById(node.name).offsetTop);
  }

  expandParents(node: Module, id: number) {
    if (node.id === id) {
      this.treeControl.expand(node);
      return true;
    } else {
      if (node.blocks !== undefined) {
        for (let module of node.blocks) {
          if (this.expandParents(module, id)) {
            this.treeControl.expand(node);
            return true;
          }
        }
        return false;
      } else {
        return false;
      }
    }
  }
}
