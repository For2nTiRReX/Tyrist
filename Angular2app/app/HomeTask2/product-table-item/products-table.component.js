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
var ProductTableComponent = (function () {
    function ProductTableComponent() {
        this.counter = 0;
        this.visible = true;
        this.deleteElementEvent = new core_1.EventEmitter();
    }
    ProductTableComponent.prototype.deleteElement = function (value) {
        this.deleteElementEvent.emit(value);
        console.log(this.productItemList);
    };
    return ProductTableComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ProductTableComponent.prototype, "rows", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ProductTableComponent.prototype, "productItemList", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ProductTableComponent.prototype, "category", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ProductTableComponent.prototype, "deleteElementEvent", void 0);
ProductTableComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "[productTable]",
        templateUrl: "products-table.component.html",
        styleUrls: ['product-table-component.css'],
    })
], ProductTableComponent);
exports.ProductTableComponent = ProductTableComponent;
//# sourceMappingURL=products-table.component.js.map