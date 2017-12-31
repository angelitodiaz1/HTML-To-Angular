import { Component } from '@angular/core';
import { InformacionService } from '../../services/informacion.service.ts';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent  {

  constructor( public _is:InformacionService){}
}
