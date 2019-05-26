import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { NgModule } from '@angular/core';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
