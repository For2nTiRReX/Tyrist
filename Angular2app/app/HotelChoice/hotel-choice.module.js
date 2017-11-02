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
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var hotels_info_service_1 = require("../services/hotels-info.service");
var comments_service_1 = require("../services/comments.service");
var list_hotels_component_1 = require("./HotelsArchive/list-hotels.component");
var hotels_archive_component_1 = require("./HotelsArchive/hotels-archive.component");
var hotels_filter_component_1 = require("./HotelsArchive/hotels-filter.component");
var hotel_single_component_1 = require("./HotelSingle/hotel-single.component");
var hotel_comments_list_component_1 = require("./HotelSingle/hotel-comments-list.component");
var hotel_comments_form_component_1 = require("./HotelSingle/hotel-comments-form.component");
var HotelChoiceModule = (function () {
    function HotelChoiceModule() {
    }
    return HotelChoiceModule;
}());
HotelChoiceModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            forms_1.ReactiveFormsModule,
            router_1.RouterModule
        ],
        declarations: [
            list_hotels_component_1.ListHotelsComponent,
            hotels_archive_component_1.HotelsArchiveComponent,
            hotels_filter_component_1.HotelsFilterComponent,
            hotel_single_component_1.HotelSingleComponent,
            hotel_comments_list_component_1.HotelCommentsListComponent,
            hotel_comments_form_component_1.HotelCommentsFormComponent
        ],
        providers: [hotels_info_service_1.HotelService, comments_service_1.CommentsService]
    })
], HotelChoiceModule);
exports.HotelChoiceModule = HotelChoiceModule;
//# sourceMappingURL=hotel-choice.module.js.map