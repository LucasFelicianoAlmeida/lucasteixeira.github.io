import { Component, OnInit } from '@angular/core';
import { navbarData } from './nav-data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  collapsed = false;
  navData = navbarData
  constructor() { }

  ngOnInit(): void {
  }

  toggleColapse(){
    this.collapsed = !this.collapsed;
  }
  closeSideNav(){
    this.collapsed = false;
  }
}
