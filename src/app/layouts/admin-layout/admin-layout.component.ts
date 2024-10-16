import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AdminLayoutComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => console.log(event))
  }
}
