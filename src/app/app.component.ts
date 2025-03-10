import { Component } from '@angular/core';
import { Item } from './core/Item';
import { Status } from './core/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-to-do-list';
  description: any;
  data: Item = {
    item: [],
  };

  constructor() {
    this.getTask();
  }

  getTask() {
    let dataLocal = localStorage.getItem('localStorage');
    if (dataLocal !== null) {
      this.data = JSON.parse(dataLocal);
    } else {
      this.data['item'] = [];
    }
  }

  saveTask(id?: number) {
    if (!id) {
      this.data['item'].unshift({
        id: Math.floor(Math.random() * 1000 + 1),
        description: this.description,
        status: Status.TODO,
      });
      localStorage.clear();
      localStorage.setItem(
        'localStorage',
        JSON.stringify({ item: this.data['item'] })
      );
      this.reset();
      return;
    }

    for (const i in this.data['item']) {
      if (this.data['item'][i].id == id) {
        this.data['item'][i].status = Status.TODO;
        break;
      }
    }
    localStorage.clear();
    localStorage.setItem(
      'localStorage',
      JSON.stringify({ item: this.data['item'] })
    );
  }

  doneTask(id: number) {
    for (const i in this.data['item']) {
      if (this.data['item'][i].id == id) {
        this.data['item'][i].status = Status.DONE;
        break;
      }
    }
    localStorage.clear();
    localStorage.setItem(
      'localStorage',
      JSON.stringify({ item: this.data['item'] })
    );
  }

  editTask(id: number) {
    for (const i in this.data['item']) {
      if (this.data['item'][i].id == id) {
        this.data['item'][i].status = Status.EDIT;
        break;
      }
    }
    localStorage.clear();
    localStorage.setItem(
      'localStorage',
      JSON.stringify({ item: this.data['item'] })
    );
  }

  deleteTask(id: number) {
    this.data.item = this.data.item.filter((v) => v.id !== id);
    localStorage.clear();
    localStorage.setItem(
      'localStorage',
      JSON.stringify({ item: this.data['item'] })
    );
  }

  reset() {
    this.description = '';
    this.getTask();
  }
}
