import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { InputComponent } from './main/input/input.component';
import { OutputComponent } from './main/output/output.component';
import { FlexboxComponent } from './customComponents/flexbox/flexbox.component';
import { GridComponent } from './customComponents/grid/grid.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { InfoComponent } from './info/info.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'contacts',
    component: MainComponent,
  },
  { path: 'info', component: InfoComponent },
  { path: 'contacts/:index', component: OutputComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InputComponent,
    OutputComponent,
    FlexboxComponent,
    GridComponent,
    HomeComponent,
    NavigationComponent,
    InfoComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
