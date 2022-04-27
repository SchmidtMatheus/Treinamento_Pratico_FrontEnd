import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { AppComponent } from 'src/app/app.component';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private readonly API = 'api/visualization'

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<AppComponent[]>(this.API).pipe(tap(AppComponent => console.log(AppComponent)));
  }
}
