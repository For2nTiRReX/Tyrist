import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { RouterModule } from '@angular/router';

import {HotelService} from "../services/hotels-info.service";
import {CommentsService} from "../services/comments.service";

import {ListHotelsComponent} from "./HotelsArchive/list-hotels.component";
import {HotelsArchiveComponent} from  "./HotelsArchive/hotels-archive.component"
import {HotelsFilterComponent} from  "./HotelsArchive/hotels-filter.component"
import { HotelSingleComponent } from "./HotelSingle/hotel-single.component";
import {HotelCommentsListComponent} from "./HotelSingle/hotel-comments-list.component";
import {HotelCommentsFormComponent} from "./HotelSingle/hotel-comments-form.component"

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule
    ],
    declarations: [
        ListHotelsComponent,
        HotelsArchiveComponent,
        HotelsFilterComponent,
        HotelSingleComponent,
        HotelCommentsListComponent,
        HotelCommentsFormComponent
    ],
    providers: [HotelService, CommentsService]
})
export class HotelChoiceModule {

}