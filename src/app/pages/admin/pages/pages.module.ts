import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

import { PagesRoutingModule } from './pages-routing.module';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ApiService } from '../../../core/services/common/api/api.service';

@NgModule({
  declarations: [ListComponent, EditComponent],
  imports: [
    HlmButtonDirective,
    TableModule,
    ButtonModule,
    CommonModule,
    PagesRoutingModule,
    NgOptimizedImage,
  ],
  exports: [HlmButtonDirective, TableModule, ButtonModule, EditComponent],
  providers: [ApiService],
})
export class PagesModule {}
