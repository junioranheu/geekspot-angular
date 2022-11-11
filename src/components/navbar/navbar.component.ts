import { Component, OnInit } from '@angular/core';
import CONSTS_TELAS from 'src/utils/consts/outros/telas';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  urlIndex = CONSTS_TELAS.INDEX;
  urlEntrar = CONSTS_TELAS.ENTRAR;

  constructor() { }

  ngOnInit(): void {
  }

}
