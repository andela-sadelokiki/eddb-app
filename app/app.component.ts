import { Component } from '@angular/core';
import { FirstViewComponent }  from './firstview.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent  { 
  name = 'Angular'; 

  firstProcedureObject = {
                id: 1,
                category: "A",
                title: "Trauma Knee Injury",
                description: "A dislocation occurs when the bones of the knee are out of place, either completely or partially. For example, the femur and tibia can be forced out of alignment, and the patella can also slip out of place.",
                link: "www.google.com",
                date: "9/11/2016"
  }

}
