import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatToolbarModule,
  MatCardModule,
  MatListModule,
  MatButtonModule,
  MatIconModule,
  MatChipsModule,
  MatSortModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressBarModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule, MatCardModule, MatListModule, MatButtonModule, MatIconModule, MatChipsModule, MatSortModule,
    MatFormFieldModule,
    MatInputModule, MatSelectModule,
    MatProgressBarModule
  ],
  exports: [MatToolbarModule, MatCardModule, MatListModule, MatButtonModule, MatIconModule, MatChipsModule, MatSortModule,
    MatFormFieldModule, MatSelectModule,
    MatInputModule, MatProgressBarModule
  ],
  declarations: []
})
export class MaterialModule {
}
