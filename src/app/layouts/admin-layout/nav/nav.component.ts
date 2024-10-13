import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { VersionComponent } from '../version/version.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [LogoComponent, VersionComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {}
