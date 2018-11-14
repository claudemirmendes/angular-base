import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export class AppHeaderInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = sessionStorage.getItem('token');
        const modifiedRequest: HttpRequest<any> = request.clone({
            setHeaders: { 'Content-Type': 'application/json', 'Authorization': `Basic ${token ? token : ''}` }
        });

        return next.handle(modifiedRequest).pipe(
            catchError((err: HttpErrorResponse) => {
                if (err.status === 401) {
                    return throwError('Usuário ou senha inválido');
                } else if (err.status === 403) {
                    return throwError('Você não tem permissão para acessar esta página.');
                } else {
                    return throwError('Ocorreu um erro inesperado, por favor contactar o número 4000.9999.');
                }
            })
        );
    }

}
