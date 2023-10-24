import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { InputComponent } from './main/input/input.component';
import { OutputComponent } from './main/output/output.component';
import { FlexboxComponent } from './customComponents/flexbox/flexbox.component';
import { GridComponent } from './customComponents/grid/grid.component';

@NgModule({
  declarations: [AppComponent, MainComponent, InputComponent, OutputComponent, FlexboxComponent, GridComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
