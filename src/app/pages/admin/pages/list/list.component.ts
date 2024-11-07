import { Component, inject, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { ApiService } from '../../../../core/services/common/api/api.service';

@Component({
  selector: 'app-list',
  standalone: false,
  // imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  providers: [ApiService],
})
export class ListComponent implements OnInit {
  number: number = 1;
  size: number = 7;

  pages: any[] = [];
  errorMessage: string | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadPages();
  }

  loadPages(): void {
    let params = new HttpParams()
      .set('pageNumber', this.number)
      .set('pageSize', this.size)
      .set('ascending', false);

    this.apiService.get<any[]>(`cms/pages/get`, params).subscribe({
      next: (response: any) => {
        this.pages = response.data.items;
        console.log(this.pages);
      },
      error: (error: any) => {
        this.errorMessage = 'Failed to load pages';
        console.error('Error loading pages:', error);
      },
    });
  }
}
