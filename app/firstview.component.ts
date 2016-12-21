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
    showProcedureLists: boolean;


    constructor(){
        this.procedureLists = ['Blunt force trauma', 'broken bones', 'head injury']
        this.showProcedureLists = false;
    }

    toggleProcedureLists(){
        if (this.showProcedureLists == false) {
        this.showProcedureLists = true;
        }
        else {
            this.showProcedureLists = false;
        }
    }

    addProcedure(ProcedureList){
        console.log(ProcedureList)
        if(ProcedureList.length > 0){
            this.procedureLists.push(ProcedureList);
        }
        else {
            alert('cannot me empty')
        }
    }

    deleteProcedure(i){
        this.procedureLists.splice(i, 1);
    }
}   
