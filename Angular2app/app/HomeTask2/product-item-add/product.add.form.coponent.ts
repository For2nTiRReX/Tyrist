import { Component, OnInit, EventEmitter,Output } from "@angular/core";
import {ProductsList} from "../../services/groduct.list.service";

@Component({
    moduleId: module.id,
    selector: "product-add-form",
    templateUrl: "product.add.form.coponent.html",
})

export class ProductAddFormComponent implements OnInit {

    constructor(public productsList: ProductsList) {}

    private addNewName: string = '';
    private addNewCategory: string = '';
    private addNewPrice: number = 0;




    ngOnInit() {
    }
    addNewProduct() {
        let tryToNumber: number = 0;
        if (typeof this.addNewPrice != 'number') {
            tryToNumber = parseFloat(this.addNewPrice);
            if (isNaN(tryToNumber)) {
                console.log('Required number values only');
                return;
            }
        }
        if (this.productsList.addItem(this.addNewName,tryToNumber,this.addNewCategory)) {

        }


    }
}