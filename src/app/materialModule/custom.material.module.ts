import { MatButtonModule, MatCheckboxModule, MatNativeDateModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatToolbar } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule],
})
export class CustomMaterialModule { }
