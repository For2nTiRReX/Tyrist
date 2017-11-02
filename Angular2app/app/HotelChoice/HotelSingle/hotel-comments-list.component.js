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
var comments_service_1 = require("../../services/comments.service");
var router_1 = require("@angular/router");
var HotelCommentsListComponent = (function () {
    function HotelCommentsListComponent(_commentService, activatedRoute) {
        this._commentService = _commentService;
        this.activatedRoute = activatedRoute;
        this.comments = [];
        this.phrase = [];
    }
    HotelCommentsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.forEach(function (params) {
            var id = +params["id"];
            console.log(id);
            _this._commentService.getComments(id).then(function (data) {
                console.log(data);
                _this.comments = data;
            });
        });
    };
    return HotelCommentsListComponent;
}());
HotelCommentsListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "hotel-comments-list",
        templateUrl: "hotel-comments-list.component.html",
    }),
    __metadata("design:paramtypes", [comments_service_1.CommentsService, router_1.ActivatedRoute])
], HotelCommentsListComponent);
exports.HotelCommentsListComponent = HotelCommentsListComponent;
//# sourceMappingURL=hotel-comments-list.component.js.map