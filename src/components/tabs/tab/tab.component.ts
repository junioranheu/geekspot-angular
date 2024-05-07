import { Component, Input } from '@angular/core';

// https://stackblitz.com/edit/angular-tabs-example?file=app%2Ftabs%2Ftab.component.ts
@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.scss']
})
export class TabComponent {
    @Input('tabTitle') title?: string;
    @Input() active = false;
}