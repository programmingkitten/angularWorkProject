import { Injectable, Provider } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from "@angular/common/http";
import { catchError, EMPTY, mergeMap, Observable, tap, of, throwError } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap((req => {
                if (req instanceof HttpResponse) {
                    console.log(req.body)
                }
            })),

            catchError(err => {
                if (req.url.includes('login')) {
                    console.log('INTERCEPTOR')
                    return throwError(() => err.error.detail)
                } else if (req.url.includes('register')) {
                    return throwError(() => err.error)
                } 
                 else if (req.url.includes('user')) {
                return throwError(() => 'Not logged in.')
                }
              
                return EMPTY;  
            })
        )
    }
}

export const AuthInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
}