import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../../core/services/admin/header/header.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  header: string = "";

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.header$.subscribe(header => this.header = header)
  }
}
