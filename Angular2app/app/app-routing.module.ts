import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import {ProductTableWrapperComponent} from "./HomeTask2/product-table-wrapper/product-table-wrapper.component";
import {HotelsArchiveComponent} from "./HotelChoice/HotelsArchive/hotels-archive.component";
import {HotelSingleComponent} from "./HotelChoice/HotelSingle/hotel-single.component";

@NgModule({
    imports: [RouterModule.forRoot([
        {
            path: "",
            redirectTo: "hotels/archive",
            pathMatch: "full"
        },
        { path: "hotels/archive", component: HotelsArchiveComponent },
        { path: "test", component: ProductTableWrapperComponent },
        { path: "hotels/:id", component: HotelSingleComponent },
    ])],
    exports: [RouterModule] // делаем re-export модуля для использования директив при маршрутизации
})
export class AppRoutingModule { }