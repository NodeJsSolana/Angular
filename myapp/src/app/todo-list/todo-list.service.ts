import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private list: string[] = [];
  constructor() { }

  getList(): string[] {
    return this.list;
  }

  add(title: string): void {

    // 避免傳入的 title 是無效值或空白字串，稍微判斷一下
    if (title || title.trim()) {
      this.list.push(title);
    }

  }

}
