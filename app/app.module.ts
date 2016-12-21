import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FirstViewComponent }  from './firstview.component';
// import { ProcedureListService } from './procedurelist.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, FirstViewComponent ],
  // providers: [
  //   ProcedureListService
  //   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
