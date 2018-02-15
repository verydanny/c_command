// @angular 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// @third-party
import { SortablejsModule } from 'angular-sortablejs';

@NgModule({
  imports: [
    BrowserModule,
    SortablejsModule.forRoot({})
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
