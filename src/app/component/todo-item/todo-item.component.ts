import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/Models/Todo';
import { log } from 'util';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() { }

  ngOnInit() {
  }

  // Set Dynamic classes
  setClasses(){
    let classes = {
      todo: true,
      'is-complete': this.todo.completed,
    }
    return classes;
  }

  onToggle(todo){
    todo.completed = !todo.completed
  }

  onDelete(todo){
    console.log('delete');
  }
}