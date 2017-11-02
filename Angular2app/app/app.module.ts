import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { ProductTableModule } from "./HomeTask2/products-table.module";
import { HotelChoiceModule } from "./HotelChoice/hotel-choice.module"
import { PopupModule } from "./Popups/popup.module";
import { AppRoutingModule } from "./app-routing.module";


import { AppComponent } from "./app.component";



@NgModule({
    imports: [
        BrowserModule,
        ProductTableModule,
        AppRoutingModule,
        PopupModule,
        HotelChoiceModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule { }
