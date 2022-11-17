import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import iItem from 'src/utils/interfaces/item';
import { ItemService } from 'src/utils/services/item.service';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

    constructor(private route: ActivatedRoute, private itemService: ItemService) { }

    urlAtual = '';
    ngOnInit(): void {
        this.getItem();
    }

    item?: iItem | null | undefined;
    async getItem(): Promise<void> {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        // console.log(id);

        this.item = await this.itemService.getItem(id);
        // console.log(this.item);
    }

}
