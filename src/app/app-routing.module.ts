import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileGalleryComponent} from "./profile-gallery/profile-gallery.component";

const routes: Routes = [
  { path: '', component: ProfileGalleryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
