import { Component, OnInit } from '@angular/core';
import { NavbarService } from './services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title$ = this.NavService.title;
  constructor(private NavService: NavbarService) { }

  ngOnInit() {
  }

}
