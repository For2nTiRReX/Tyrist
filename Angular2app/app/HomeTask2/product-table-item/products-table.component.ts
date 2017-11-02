import { Component, Output, EventEmitter, Input } from "@angular/core";



@Component({
    moduleId: module.id,
    selector: "[productTable]",
    templateUrl: "products-table.component.html",
    styleUrls: ['product-table-component.css'],
})

export class ProductTableComponent {

    private counter: number = 0;
    private visible: boolean = true;

    @Input()
    rows: number;
    @Input()
    productItemList: any;
    @Input()
    category: any;

    @Output()
    deleteElementEvent: EventEmitter<number> = new EventEmitter();

    deleteElement(value) {
        this.deleteElementEvent.emit(value);
        console.log(this.productItemList);
    }

}
