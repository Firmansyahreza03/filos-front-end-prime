import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EventAddComponent } from "./event-add/event-add.component";
import { EventDetailComponent } from "./event-detail/event-detail.component";
import { EventListComponent } from "./event-list/event-list.component";

const routes: Routes = [
    {
        path: '',
        component: EventListComponent
    },
    {
        path:'event-detail',
        component: EventDetailComponent
    },
    {
        path:'event-add',
        component: EventAddComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class EventRouting {

}