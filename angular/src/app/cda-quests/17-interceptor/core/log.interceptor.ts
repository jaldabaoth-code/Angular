import { Injectable } from  '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, tap } from "rxjs";

@Injectable()
export class LogInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const startTime = new Date().getTime();
        // I display the url with the params
        console.log(req.urlWithParams);

        //I am passing the request after angular's hidden interceptors
        // and I return this result for the query to take place --> return  next.handle(req);
        // The pipe allows you to add actions to perform when the observable is resolved
        return next.handle(req).pipe(
            // Tap is an observable that indicates: I do actions without modifying the answer
            tap((response) => {
                // I make sure that it is indeed a http response
                if (response  instanceof  HttpResponse) {
                    // Here will be the code executed at the server response in case everything went well
                    // For each api request in any component
                    const endTime = new Date().getTime();
                    console.log(`Status response : ${ response.status }  Response url : ${ response.url }`);
                    console.log(`Response time is : ${ endTime - startTime } seconds`);
                }
            })
        );
    }
}
