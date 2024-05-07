import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

// https://stackblitz.com/edit/angular-tabs-example?file=main.ts
@Component({
    selector: 'app-tab-wrapper',
    templateUrl: './tab-wrapper.component.html',
    styleUrls: ['./tab-wrapper.component.scss']
})
export class TabWrapperComponent implements AfterContentInit {

    @ContentChildren(TabComponent) tabs: QueryList<TabComponent> | undefined;

    // contentChildren are set
    ngAfterContentInit() {
        // get all active tabs
        let activeTabs = this.tabs?.filter((tab) => tab.active);

        // if there is no active tab set, activate the first
        if (activeTabs?.length === 0) {
            this.selecionarTab(this.tabs?.first);
        }
    }

    selecionarTab(tab: any) {
        // deactivate all tabs
        this.tabs?.toArray().forEach(tab => tab.active = false);

        // activate the tab the user has clicked on.
        tab.active = true;
    }
}