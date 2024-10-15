import { Component, OnInit } from '@angular/core';

import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HlmButtonDirective],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {

  }
}
