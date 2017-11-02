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
var ProductTableWrapperComponent = (function () {
    function ProductTableWrapperComponent(_productsList) {
        this._productsList = _productsList;
        this.products = undefined;
        this.Categories = undefined;
        this.exportProduct = undefined;
        this.rows = 6;
        this.currentCategory = 'cat-2';
    }
    ProductTableWrapperComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.products = this._productsList.getList().slice().reverse();
        this.Categories = this._productsList.getCategories();
        this.exportProduct = this.categoryFilterProducts();
        this.subscription = this._productsList.navItem$.subscribe(function (item) { if (item == "products") {
            _this.refreshService();
        }
        else if (item == "categories") {
            _this.refreshServiceCategories();
        } });
    };
    ProductTableWrapperComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component is destroyed
        this.subscription.unsubscribe();
    };
    ProductTableWrapperComponent.prototype.refreshServiceCategories = function () {
        this.Categories = this._productsList.getCategories();
    };
    ProductTableWrapperComponent.prototype.refreshService = function () {
        console.log(this._productsList.getList());
        this.products = this._productsList.getList().slice().reverse();
        this.categoryFilterProducts();
    };
    ProductTableWrapperComponent.prototype.categoryFilterProducts = function () {
        console.log(this.currentCategory);
        var listCategories = this.currentCategory;
        this.exportProduct = [];
        if (this.currentCategory === 'all') {
            this.exportProduct = this.products;
            return this.exportProduct;
        }
        if (listCategories != '') {
            for (var prop in this.products) {
                if (this.products[prop].category.search(this.currentCategory) != -1) {
                    this.exportProduct.push(this.products[prop]);
                }
            }
        }
        return this.exportProduct;
    };
    ProductTableWrapperComponent.prototype.deleteElement = function ($id) {
        this._productsList.deleteItem($id);
    };
    return ProductTableWrapperComponent;
}());
__decorate([
    core_1.ViewChild('tableWrapper'),
    __metadata("design:type", core_1.ElementRef)
], ProductTableWrapperComponent.prototype, "el", void 0);
ProductTableWrapperComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "product-table-wrapper",
        templateUrl: "product-table-wrapper.component.html",
    }),
    __metadata("design:paramtypes", [groduct_list_service_1.ProductsList])
], ProductTableWrapperComponent);
exports.ProductTableWrapperComponent = ProductTableWrapperComponent;
//# sourceMappingURL=product-table-wrapper.component.js.map