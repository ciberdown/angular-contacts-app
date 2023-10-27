import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FlexboxComponent } from './customComponents/flexbox/flexbox.component';
import { GridComponent } from './customComponents/grid/grid.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SingleContactComponent } from './contacts/single-contact/single-contact.component';
import { InfoComponent } from './info/info.component';
import { RightComponent } from './contacts/right/right.component';
import { LeftComponent } from './contacts/left/left.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'contacts/:id',
    component: ContactsComponent,
  },
  {
    path: 'info',
    component: InfoComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    FlexboxComponent,
    GridComponent,
    HomeComponent,
    NavigationComponent,
    ContactsComponent,
    SingleContactComponent,
    InfoComponent,
    RightComponent,
    LeftComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
