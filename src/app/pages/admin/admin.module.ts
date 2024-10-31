import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiInterceptor } from '../../core/interceptors/api/api.interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule, AdminRoutingModule, HttpClientModule],
  exports: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
  ],
})
export class AdminModule {}
