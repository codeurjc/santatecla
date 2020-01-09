import {Component, OnInit} from '@angular/core';
import {Course} from './course.model';
import {LoginService} from '../auth/login.service';
import {CourseService} from './course.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NestedTreeControl} from '@angular/cdk/tree';
import {Module} from '../itinerary/module/module.model';
import {MatTreeNestedDataSource} from '@angular/material';
import {TabService} from '../tab/tab.service';

@Component({
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {
  course: Course;
  id: number;

  treeControl = new NestedTreeControl<Module>(node => !!node && node.blocks);
  dataSource = new MatTreeNestedDataSource<Module>();

  showMenu = true;
  activeTab = 0;

  constructor(private loginService: LoginService,
              private courseService: CourseService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private tabService: TabService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.courseId;
      this.courseService.getCourse(this.id).subscribe((data: Course) => {
        this.course = data;
        this.dataSource.data = this.course.module.blocks;
        this.tabService.setCourse(this.course.name);
      }, error => {console.log(error); });
    });
  }

  hasChild = (_: number, node: Module) => !!node && !!node.blocks && node.blocks.length > 0;

  navigateHome() {
    this.router.navigate(['courses']);
  }

  private activateTab(tab: number) {
    this.activeTab = tab;
  }

  private setShowMenu(showMenu: boolean) {
    this.showMenu = showMenu;
  }
}
