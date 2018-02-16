import { Component } from '@angular/core';
import { SortablejsOptions } from 'angular-sortablejs';

export type List = {
  name: string,
  img_path: string,
  counter: number
};

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: [ 'app.component.scss' ]
})
export class AppComponent {
  list_one = [
    {
      name: "dog",
      img_path: "img/list_one/dog.jpg",
      counter: 0
    },
    {
      name: "dogger",
      img_path: "img/list_one/dogger.jpg",
      counter: 0
    },
    {
      name: "kitty",
      img_path: "img/list_one/kitty.jpg",
      counter: 0
    },
    {
      name: "kitty two",
      img_path: "img/list_one/kitty2.jpg",
      counter: 0
    },
    {
      name: "kitty three",
      img_path: "img/list_one/kitty3.jpg",
      counter: 0
    },
    {
      name: "pupper",
      img_path: "img/list_one/pupper.jpg",
      counter: 0
    }
  ];

  list_two = [
    {
      name: "tech",
      img_path: "img/list_two/tech-1.jpg",
      counter: 0
    },
    {
      name: "not as cute",
      img_path: "img/list_two/tech-2.jpg",
      counter: 0
    },
    {
      name: "some technology",
      img_path: "img/list_two/tech.jpg",
      counter: 0
    },
    {
      name: "browser stuff",
      img_path: "img/list_two/tech-3.jpg",
      counter: 0
    }
  ];

  renderEmpty( list: Object[] ) {
    if ( list.length <= 0 ) {
      return true;
    }

    return false;
  }

  onAdd = ( event: any ) => {
    const moved_to: string = event.to.className;
    const item_name: string = event.item.dataset.ngName;
    
    this[ moved_to ].filter( ( item: List ) => {
      if ( item.name === item_name ) {
        item.counter++
      }
    });
  }

  options: SortablejsOptions = {
    group: 'client_command',
    filter: '.ignore',
    animation: 150,
    onAdd: this.onAdd
  };
}
