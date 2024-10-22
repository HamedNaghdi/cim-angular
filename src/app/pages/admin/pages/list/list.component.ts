import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: false,
  // imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  pages = [
    { id: 1, title: `Page 1` },
    { id: 2, title: `Page 2` },
  ]
}
