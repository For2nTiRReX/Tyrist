import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import {ProductsList} from "../services/groduct.list.service";
import { ProductTableComponent } from "./product-table-item/products-table.component";
import { ProductTableWrapperComponent } from "./product-table-wrapper/product-table-wrapper.component";
import { ReversePipe } from "../pipes/array.reverse.pipe";
import {ProductAddFormComponent} from "./product-item-add/product.add.form.coponent";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,],
    declarations: [
        ProductTableComponent,
        ProductTableWrapperComponent,
        ReversePipe,
        ProductAddFormComponent
    ],
    providers: [ProductsList]
})
export class ProductTableModule {

}