"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var groduct_list_service_1 = require("../../services/groduct.list.service");
var ProductAddFormComponent = (function () {
    function ProductAddFormComponent(productsList) {
        this.productsList = productsList;
        this.addNewName = '';
        this.addNewCategory = '';
        this.addNewPrice = 0;
    }
    ProductAddFormComponent.prototype.ngOnInit = function () {
    };
    ProductAddFormComponent.prototype.addNewProduct = function () {
        var tryToNumber = 0;
        if (typeof this.addNewPrice != 'number') {
            tryToNumber = parseFloat(this.addNewPrice);
            if (isNaN(tryToNumber)) {
                console.log('Required number values only');
                return;
            }
        }
        if (this.productsList.addItem(this.addNewName, tryToNumber, this.addNewCategory)) {
        }
    };
    return ProductAddFormComponent;
}());
ProductAddFormComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "product-add-form",
        templateUrl: "product.add.form.coponent.html",
    }),
    __metadata("design:paramtypes", [groduct_list_service_1.ProductsList])
], ProductAddFormComponent);
exports.ProductAddFormComponent = ProductAddFormComponent;
//# sourceMappingURL=product.add.form.coponent.js.map