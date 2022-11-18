import { Component, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'GeekSpot — Angular';

    innerWidth?: number;
    isSmall: boolean = false;
    tamanhoSmall: number = 1025;
    ngOnInit() {
        this.innerWidth = window.innerWidth;
        this.isSmall = this.innerWidth <= 1025;
    }

    @HostListener('window:resize', ['$event'])
    onResize(): void {
        this.innerWidth = window.innerWidth;
        this.isSmall = this.innerWidth <= 1025;
    }

    handleScrollTop() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        console.clear();
    }
}
