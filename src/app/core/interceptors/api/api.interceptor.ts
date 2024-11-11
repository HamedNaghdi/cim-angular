import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      // setHeaders: { Authorization: `Bearer YOUR_TOKEN_HERE` }
    });

    return next.handle(authReq).pipe(
      tap(event => {
        // console.log('Request:', req);
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 0) {
          console.error('CORS error:', error.message);
        } else {
          console.error('Error:', error);
        }
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          errorMsg = `Error: ${error.error.message}`;
        } else {
          errorMsg = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(errorMsg);
      })
    );
  }
}

