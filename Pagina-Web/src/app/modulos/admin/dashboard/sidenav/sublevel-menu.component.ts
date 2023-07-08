import { Component, Input, OnInit } from '@angular/core';
import { INavBarData, fadeInOut } from './helper';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-sublevel-menu',
  templateUrl: './sublevel-menu.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    fadeInOut,
    trigger('submenu', [
      state('hidden', style({ height: '0', overflow: 'hidden' })
      ),
      state('visivle', style({ height: '*' })
      ),
      transition('visible<=>hidden', [style({ overflow: 'hidden' }),
      animate('{{transitionParams}}')
      ]),
      transition('void=>*', animate(0))
    ])
  ]
})
export class SublevelMenuComponent implements OnInit {
  @Input() data: INavBarData = {
    routelink: '',
    icon: '',
    label: '',
    items: []
  }
  @Input() collapsed = false;
  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple: boolean = false;

  constructor() { }
  ngOnInit(): void {
  }

  handleClick(item: any): void {
    if (!this.multiple) {
      if (this.data.items && this.data.items.length > 0) {
        for (let modelItem of this.data.items) {
          modelItem.expanded = false;
        }
      }
    }
    item.expanded = !item.expanded;
  }
}
