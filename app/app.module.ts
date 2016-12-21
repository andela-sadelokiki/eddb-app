import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { FirstViewComponent }  from './firstview.component';
// import { ProcedureListService } from './procedurelist.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FirstViewComponent ],
  // providers: [
  //   ProcedureListService
  //   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
