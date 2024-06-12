import { Component } from '@angular/core';
import { Item } from './core/Item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-to-do-list';
  desc: any;
  data: Item = {
    item: []
  };

  constructor() {
    this.getTask();
  }

  getTask() {
    let dataLocal = localStorage.getItem("localStorage");
    if (dataLocal !== null) {
      this.data = JSON.parse(dataLocal);
    } else {
      this.data['item'] = [];
    }
  }

  saveTask() {
    this.data['item'].unshift({
      id: Math.floor((Math.random() * 1000) + 1),
      description: this.desc,
      status: false
    });
    localStorage.clear();
    localStorage.setItem("localStorage", JSON.stringify({ item: this.data['item'] }))
    this.reset();
  }

  doneTask(id: number) {
    for (const i in this.data['item']) {
      if (this.data['item'][i].id == id) {
        this.data['item'][i].status = true;
        break;
      }
    }
    localStorage.clear();
    localStorage.setItem("localStorage", JSON.stringify({ item: this.data['item'] }))
  }

  deleteTask(id: number) {
    this.data.item = this.data.item.filter(v => v.id !== id);
    localStorage.clear();
    localStorage.setItem("localStorage", JSON.stringify({ item: this.data['item'] }))
  }

  reset() {
    this.desc = '';
    this.getTask();
  }

}
