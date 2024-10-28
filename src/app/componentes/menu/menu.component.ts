import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { TabMenuModule } from 'primeng/tabmenu';
import { CommonModule } from '@angular/common';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [TabMenuModule, CommonModule,
    SidebarModule,
    ButtonModule,
    RippleModule,
    AvatarModule,
    StyleClassModule,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})




export class MenuComponent implements OnInit {

  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  closeCallback(e): void {
    this.sidebarRef.close(e);

  }
  sidebarVisible: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {

  }
}
