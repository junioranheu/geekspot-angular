import { Component, OnInit } from '@angular/core';
import CONSTS_TELAS from 'src/utils/consts/outros/telas';

@Component({
  selector: 'app-navbar-padrao',
  templateUrl: './navbar-padrao.component.html',
  styleUrls: ['./navbar-padrao.component.scss']
})
export class NavbarPadraoComponent implements OnInit {

  urlIndex = CONSTS_TELAS.INDEX;
  urlEntrar = CONSTS_TELAS.ENTRAR;
  urlAjuda = CONSTS_TELAS.AJUDA;

  constructor() { }

  ngOnInit(): void {
  }

}
