import { ListElementComponent } from "./components/pages/element/list-element/list-element.component";
import { CreateElementComponent } from "./components/pages/element/create-element/create-element.component";
import { CreateFamilyComponent } from "./components/pages/family/create-family/create-family.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FilterElementComponent } from "./components/pages/element/filter-element/filter-element.component";

const routes: Routes = [
  {
    path: "pages/family/create",
    component: CreateFamilyComponent,
  },
  {
    path: "pages/element/create",
    component: CreateElementComponent,
  },
  {
    path: "pages/element/list",
    component: ListElementComponent,
  },
  {
    path: "pages/element/filter",
    component: FilterElementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}