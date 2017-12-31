import { Component } from '@angular/core';
import { InformacionService } from './services/informacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor ( public _is:InformacionService ){

  }
}
