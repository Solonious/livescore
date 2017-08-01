import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styles: [`
        table {
            font-size: 0.85rem;
        }
    `]
})
export class TableComponent implements OnInit {
    @Input() data: any;
    ngOnInit() {
        this.getData();
    }
    getData() {
        console.log(this.data);
    }
}

