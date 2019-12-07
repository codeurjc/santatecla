import {Component, OnInit} from '@angular/core';
import {TabService} from "../tab/tab.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private tabService: TabService) {}

  ngOnInit() {
    this.tabService.setHome();
  }

}
