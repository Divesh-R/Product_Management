import { Routes } from '@angular/router';
import { HomeComponent } from './product/home/home.component';
import { createComponent } from '@angular/core';
import { CreateComponent } from './product/create/create.component';
import { EditComponent } from './product/edit/edit.component';

export const routes: Routes = [
    { path: "product/home", component: HomeComponent },
    { path: "product", redirectTo: "product/home", pathMatch: "full" },
    { path: "", redirectTo: "product/home", pathMatch: "full" },
    { path: "product/create", component: CreateComponent },
    { path: "product/edit/:id", component: EditComponent }

];
