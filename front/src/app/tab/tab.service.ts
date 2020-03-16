import {Injectable} from '@angular/core';
import {Tab} from './tab.model';

@Injectable()
export class TabService {
  tabs: Tab[];

  constructor() {
    this.tabs = [];
  }

  addTab(t: Tab) {
    for (let tab of this.tabs) {
      if (tab.id === t.id && tab.type === t.type && tab.name === t.name) {
        tab.isActive = true;
        return;
      } else {
        tab.isActive = false;
      }
    }

    this.tabs.push(t);
  }

  removeTab(tab: Tab) {
    const index: number = this.tabs.indexOf(tab);
    if (index !== -1) {
      this.tabs.splice(index, 1);
    }
  }

  activateTab(t: Tab) {
    for (let tab of this.tabs) {
      if (tab.id === t.id && tab.type === t.type && tab.name === t.name) {
        tab.isActive = true;
      } else {
        tab.isActive = false;
      }
    }
  }

  deactivateTabs() {
    for (let tab of this.tabs) {
      tab.isActive = false;
    }
  }

}
