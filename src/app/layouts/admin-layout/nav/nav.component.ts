import { Component } from '@angular/core';
import { LogoComponent } from './logo/logo.component';
import { VersionComponent } from './version/version.component';
import { MenuComponent } from "./menu/menu.component";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [LogoComponent, VersionComponent, MenuComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent { }
