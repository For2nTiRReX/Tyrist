"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_table_wrapper_component_1 = require("./HomeTask2/product-table-wrapper/product-table-wrapper.component");
var hotels_archive_component_1 = require("./HotelChoice/HotelsArchive/hotels-archive.component");
var hotel_single_component_1 = require("./HotelChoice/HotelSingle/hotel-single.component");
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot([
                {
                    path: "",
                    redirectTo: "hotels/archive",
                    pathMatch: "full"
                },
                { path: "hotels/archive", component: hotels_archive_component_1.HotelsArchiveComponent },
                { path: "test", component: product_table_wrapper_component_1.ProductTableWrapperComponent },
                { path: "hotels/:id", component: hotel_single_component_1.HotelSingleComponent },
            ])],
        exports: [router_1.RouterModule] // делаем re-export модуля для использования директив при маршрутизации
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map