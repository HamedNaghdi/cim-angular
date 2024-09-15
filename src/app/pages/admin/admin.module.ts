import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, AdminRoutingModule, HlmButtonDirective],
  exports: [HlmButtonDirective],
})
export class AdminModule {}
