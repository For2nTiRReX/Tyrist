import { Component, ViewChild, ElementRef, OnInit  } from "@angular/core";
import {ProductsList} from "../../services/groduct.list.service";
import { Subscription } from 'rxjs/Subscription';

@Component({
    moduleId: module.id,
    selector: "product-table-wrapper",
    templateUrl: "product-table-wrapper.component.html",
})

export class ProductTableWrapperComponent implements OnInit {

    public products: any = undefined;
    public Categories: any = undefined;
    public exportProduct: any = undefined;
    constructor(public _productsList: ProductsList) {}

    private rows: number = 6;
    private currentCategory: string = 'cat-2';
    private subscription:Subscription;

    @ViewChild('tableWrapper') el:ElementRef;

    ngOnInit() {
        this.products = this._productsList.getList().slice().reverse();
        this.Categories = this._productsList.getCategories();
        this.exportProduct = this.categoryFilterProducts();

        this.subscription = this._productsList.navItem$.subscribe(
            item => {if(item == "products") { this.refreshService() } else if (item ==  "categories") {this.refreshServiceCategories()}}
        );
    }
    ngOnDestroy() {
        // prevent memory leak when component is destroyed
        this.subscription.unsubscribe();
    }

    refreshServiceCategories() {
        this.Categories = this._productsList.getCategories();
    }

    refreshService() {
        console.log(this._productsList.getList());
        this.products = this._productsList.getList().slice().reverse();
        this.categoryFilterProducts();
    }

    categoryFilterProducts() {

        console.log(this.currentCategory);
        let listCategories: string = this.currentCategory;
        this.exportProduct = [];
        if (this.currentCategory === 'all') {
            this.exportProduct = this.products;
            return this.exportProduct;
        }
        if (listCategories != ''){
            for(var prop in this.products) {
                if(this.products[prop].category.search(this.currentCategory) != -1) {
                    this.exportProduct.push(this.products[prop]);
                }
            }
        }

        return this.exportProduct;
    }

    deleteElement($id) {
       this._productsList.deleteItem($id);
    }
}