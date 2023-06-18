import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() selectedMenu = new EventEmitter<string>();
  showSideMenu = true;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth < 990) {
      this.showSideMenu = false;
    } else {
      this.showSideMenu = true;
    }
  }

  constructor() { }

  ngOnInit(): void {
    if (window.innerWidth < 990) {
      this.showSideMenu = false;
    }
  }

  selectItem(id: string) {
    if (window.innerWidth < 990) {
      this.showSideMenu = false;
    }
    this.selectedMenu.emit(id);
  }

}
