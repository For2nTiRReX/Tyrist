import { Component, OnInit} from "@angular/core";
import {CommentsService} from "../../services/comments.service";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: "hotel-comments-list",
    templateUrl: "hotel-comments-list.component.html",
})

export class HotelCommentsListComponent implements OnInit {

    comments: Comment[] = [];
    phrase: any = [];
    constructor(public _commentService: CommentsService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {

        this.activatedRoute.params.forEach((params: Params) => {

            let id = +params["id"];
            console.log(id);

            this._commentService.getComments(id).then( (data) => {
                    console.log(data);
                    this.comments = data;
                });
        });

    }


}


