import { Component } from '@angular/core';
// import { ProcedureListService } from './procedurelist.service';

@Component({
  selector: 'first-view',
  templateUrl: 'app/firstview.component.html'
})
export class FirstViewComponent  { 
    // procedureLists;

    // constructor(private procedureListService: ProcedureListService){}
    
    // ngOnInit(){
    //     this.procedureLists = this.procedureListService.get();
    // }

    // onProcedureListDelete(procedureList){
    //     this.procedureListService.delete
    // }
    name = 'Angular'; 
    procedureList: string[];
    
    constructor(){
        this.procedureLists = ['Blunt force trauma', 'broken bones', 'head injury']
    }
 }   
