import { Component, Input, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/fromEvent';
// import { environment } from '../../environments/environment';
// import { AlertService } from '../common/alert/shared/alert.service';
// import { Bureau } from '../pkw-data/core/bureau.model';
// import { SistemaDesktop } from '../pkw-data/core/controle-versao/sistema-desktop.enum';
// import { Operador } from '../pkw-data/core/operador.model';
// import { RecursoDoSistema } from '../pkw-data/core/permissionamento/recurso-do-sistema.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ErpTooltip: string
  tooltipPlacement: string

  operador = {
    isAdministrador: () => true 
  } 
  
  atendimentos = () => true

  segmentoDocumentos = () => true;

  segmentoDp = () => true;

  empresas = () => true;

  usuarios = () => true;



  constructor() { }

  ngOnInit() {
  }

}
