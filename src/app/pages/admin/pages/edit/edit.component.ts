import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements AfterViewInit {
  isOpen: boolean = false;

  constructor() {}

  ngAfterViewInit(): void {
    // Additional initialization logic can go here if needed
  }

  open(): void {
    this.isOpen = true;
    console.log('Modal open click', this.isOpen);
  }

  close(): void {
    this.isOpen = false;
  }
}

