"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var groduct_list_service_1 = require("../services/groduct.list.service");
var products_table_component_1 = require("./product-table-item/products-table.component");
var product_table_wrapper_component_1 = require("./product-table-wrapper/product-table-wrapper.component");
var array_reverse_pipe_1 = require("../pipes/array.reverse.pipe");
var product_add_form_coponent_1 = require("./product-item-add/product.add.form.coponent");
var ProductTableModule = (function () {
    function ProductTableModule() {
    }
    return ProductTableModule;
}());
ProductTableModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
        ],
        declarations: [
            products_table_component_1.ProductTableComponent,
            product_table_wrapper_component_1.ProductTableWrapperComponent,
            array_reverse_pipe_1.ReversePipe,
            product_add_form_coponent_1.ProductAddFormComponent
        ],
        providers: [groduct_list_service_1.ProductsList]
    })
], ProductTableModule);
exports.ProductTableModule = ProductTableModule;
//# sourceMappingURL=products-table.module.js.map