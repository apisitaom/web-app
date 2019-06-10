import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{BrowserAnimationsModule}
from'@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import{HttpClientModule}from'@angular/common/http';
import{FormsModule,ReactiveFormsModule}from'@angular/forms';

//import Material
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';

import{RouterModule,Routes}from'@angular/router';
import {AllserviceService} from "./service/allservice.service";
import{AbountComponent} from "./component/abount/abount.component";
import { ProductComponent } from './product/product.component';
import { SearchListComponent } from './search-list/search-list.component';
import { ListComponent } from './list/list.component';
import { StaffComponent } from './staff/staff.component';

const routes:Routes=[

  
{path:'',component:AbountComponent},
{path:'product',component:ProductComponent},
{path:'search-list',component:SearchListComponent},
{path:'list',component:ListComponent},
{path:'staff',component:StaffComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    AbountComponent,
    ProductComponent,
    SearchListComponent,
    ListComponent,
    StaffComponent, 
    
  ],
  imports: [
    BrowserModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule ,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AllserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
