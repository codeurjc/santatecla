import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tab } from './tab.model';

@Injectable()
export class TabService {

  _tabs: Tab[] = [];

  constructor(private http: HttpClient) {}

  addTab(type: string, id: number, name: string, course: number) {
    for (const t of this._tabs) {
      if ((t.type === type) && (t.id === id)) {
        return;
      }
    }
    this._tabs.push(new Tab(type, id, name, course));
  }

  removeTab(type: string, id: number) {
    this._tabs.forEach((item, index) => {
      if ((item.type === type) && (item.id === id)) {
        this._tabs.splice(index, 1);
      }
    });
  }

  removeAllTabs() {
    this._tabs = [];
  }

}
