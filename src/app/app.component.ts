import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';
  filter:'all'|'acvite'|'done' = 'all';
  allItems = [
    {description:'eat',done:true},
    {description:'sleep',done:false},
    {description:'play',done:false},
    {description:'go',done:true},
    {description:'laugh',done:false},
  ];
  get items(){
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) => this.filter === 'done' ? item.done : !item.done);
  }
  get finished(){
    let finished = this.allItems.filter((item) => item.done === true)
    return finished.length
  }
  addItem(description:string){
    this.allItems.unshift({
      description,
      done:false
    })
  }
  onToggle(description:string){
    let pos = this.allItems.findIndex(item=>item.description === description);
    this.allItems[pos].done = !this.allItems[pos].done
    console.log(this.allItems)
  }

}
