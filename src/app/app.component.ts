import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { App } from './app/model/client-app';
import { ServiceService } from './app/services/client.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

app: Observable<AppComponent[]>;
displayedColumns = ['nameEmployee', 'nationalIdentityEmployee', 'activeEmployee', 'salaryEmployee'];



  constructor(private ServiceService: ServiceService = ServiceService){
    this.app = this.ServiceService.list();

  }
ngOnInit(): void {

}
}

