import { ViewService } from './view.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';

@Component({
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnInit {

  public editorOptions: JsonEditorOptions;
  public data: any;

  @ViewChild(JsonEditorComponent, null) editor: JsonEditorComponent;

  constructor(private viewService: ViewService) {}

  ngOnInit() {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.modes = ['code', 'text', 'tree', 'view'];
    this.editorOptions.mode = 'code';
    this.viewService.getUnits().subscribe((data: any) => {
      this.data = data;
    }, error => {});
  }

}
