import { Component, OnInit } from '@angular/core';
import gerarEmojiAleatorio from 'src/utils/outros/gerarEmojiAleatorio';

@Component({
  selector: 'app-navbar-small',
  templateUrl: './navbar-small.component.html',
  styleUrls: ['./navbar-small.component.scss']
})
export class NavbarSmallComponent implements OnInit {

  emojiAleatorio = gerarEmojiAleatorio();

  constructor() { }

  ngOnInit(): void {
  }

}
