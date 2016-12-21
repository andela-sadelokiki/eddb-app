export class ProcedureListService {
    get(){
        return this.procedureLists;
    }

    add(){
        this.procedureLists.push(procedureList);
    }

    delete(thingdeleted){
        let index = this.procedureLists.indexOf(thingdeleted);
        if (index >= 0) {
            this.procedureLists.splice(index, 1);
        }
    }
    
    procedureLists = [
        {
            id:1,
            category: "A",
            title: "Trauma Knee Injury",
            description: "A dislocation occurs when the bones of the knee are out of place, either completely or partially. For example, the femur and tibia can be forced out of alignment, and the patella can also slip out of place.",
            link:"www.google.com",
            date:"9/11/2016"
        },
        {
            id:2,
            category: "A",
            title: "Trauma Knee Injury",
            description: "A dislocation occurs when the bones of the knee are out of place, either completely or partially. For example, the femur and tibia can be forced out of alignment, and the patella can also slip out of place.",
            link:"www.google.com",
            date:"9/11/2016"
        },
        {
            id:3,
            category: "B",
            title: "Trauma Knee Injury",
            description: "A dislocation occurs when the bones of the knee are out of place, either completely or partially. For example, the femur and tibia can be forced out of alignment, and the patella can also slip out of place.",
            link:"www.google.com",
            date:"9/11/2016"
        },
        {
            id:4,
            category: "B",
            title: "Trauma Knee Injury",
            description: "A dislocation occurs when the bones of the knee are out of place, either completely or partially. For example, the femur and tibia can be forced out of alignment, and the patella can also slip out of place.",
            link:"www.google.com",
            date:"9/11/2016"
        },
        {
            id:5,
            category: "C",
            title: "Trauma Knee Injury",
            description: "A dislocation occurs when the bones of the knee are out of place, either completely or partially. For example, the femur and tibia can be forced out of alignment, and the patella can also slip out of place.",
            link:"www.google.com",
            date:"9/11/2016"
        },
        {
            id:6,
            category: "C",
            title: "Trauma Knee Injury",
            description: "A dislocation occurs when the bones of the knee are out of place, either completely or partially. For example, the femur and tibia can be forced out of alignment, and the patella can also slip out of place.",
            link:"www.google.com",
            date:"9/11/2016"
        }
    ]
}