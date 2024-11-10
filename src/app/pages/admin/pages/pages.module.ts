import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

import { PagesRoutingModule } from './pages-routing.module';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [ListComponent, EditComponent],
  imports: [HlmButtonDirective, TableModule, ButtonModule, CommonModule, PagesRoutingModule],
  exports: [HlmButtonDirective, TableModule, ButtonModule],
})
export class PagesModule {}
