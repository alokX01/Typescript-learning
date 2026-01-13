// //basic class

// // class Department {
// //     name : string;
// //     constructor(n : string){
// //         this.name = n;
// //     }
// //     describe(this:Department){
// //         console.log("Department", this.name);
// //     }
// // }

// // const accounting = new Department ("Accounting");
// // accounting.describe();

// // const accountingCopy = {
// //     name:"alok",
// //     describe : accounting.describe
// // }
// // accountingCopy.describe();


// //private and public access modifiers

// // class Department {
// // //    public name : string;
// // //    private employees : string[];
// //     constructor( 
// //         public name : string,
// //         private employees : string[]
// //     ){
// //         // this.name = n;
// //         // this.employees=[];
// //     }
// //     describe(this:Department){
// //         console.log("Department", this.name);
// //     }

// //     addEmployee(emp : string){
// //        this.employees.push(emp);
// //     }
// //     printEmployeeInformation(){
// //         console.log('Number of emp:', this.employees.length);
// //         console.log(this.employees);
        

// //     }
// // }

// // const accounting = new Department("Accounting",[]);
// // accounting.describe();
// // accounting.addEmployee("alok")
// // accounting.addEmployee("shivam")

// // accounting.printEmployeeInformation()


// //!readonly

// // class Department {
// //     public name : string;
// //     private employees : string[]=[];
// //     // private readonly  id :string;
    
// //         constructor( n: string, ){
// //             this.name = n;
// //             this.id = "d2"; //this id only one time can intilize
// //         }
// //         describe(this:Department){
// //             console.log("Department", this.name);
// //         }
    
// //         addEmployee(emp : string){
// //            this.employees.push(emp);
// //         }
// //         printEmployeeInformation(){
// //             console.log('Number of emp:', this.employees.length);
// //             console.log(this.employees);
            
    
// //         }
// //     }

// // Inheritence

// // class Department {
// //         public name : string;
// //         private employees : string[]=[];
// //          private readonly  id :string;
        
// //             constructor( id:string,n: string, ){
// //                 this.name = n;
// //                 this.id = id,
// //                 this.employees = []; 
// //             }
// //             describe(this:Department){
// //                 console.log("Department", this.name);
// //             }
        
// //             addEmployee(emp : string){
// //                this.employees.push(emp);
// //             }
// //             printEmployeeInformation(){
// //                 console.log('Number of emp:', this.employees.length);
// //                 console.log(this.employees);
                
        
// //             }
// //         }

// //         class AccountingDepartment extends Department{
// //         //    reports : string=[];
// //            constructor(id:string, private reports : string[]){
// //                    super(id, "Accounting")
// //            }
// //            aadReports(text:string){
// //             this.reports.push(text);
// //            }
// //            printReports(){
// //             console.log(this.reports);
            
// //            }
// //         }
// //         const accDep = new AccountingDepartment("D1",[]);
// //         accDep.aadReports("Bugs");
// //         accDep.printReports();
// //         accDep.describe();
       
// //override
// //setter and getter method


// // class Department {
// //     public name : string;
// //     protected employees : string[]=[];
// //      private readonly  id :string;
    
// //         constructor( id:string,n: string, ){
// //             this.name = n;
// //             this.id = id,
// //             this.employees = []; 
// //         }
// //         describe(this:Department){
// //             console.log("Department", this.name);
// //         }
    
// //         addEmployee(emp : string){
// //            this.employees.push(emp);
// //         }
// //         printEmployeeInformation(){
// //             console.log('Number of emp:', this.employees.length);
// //             console.log(this.employees);
            
    
// //         }

// //     }

// //     class AccountingDepartment extends Department{
// //     //    reports : string=[];
// //        constructor(id:string, private reports : string[]){
// //                super(id, "Accounting")
// //        }
// //        aadReports(text:string){
// //         this.reports.push(text);
// //        }
// //        printReports(){
// //         console.log(this.reports);
        
// //        }
// //        addEmployee(emp: string): void {
// //            if(emp === "alok"){
// //             return;
// //            }
// //            this.employees.push(emp);
// //        }
// //        get getReports(){
// //         if(this.reports.length>0){
// //             return this.reports;
// //         }
// //         throw new Error("Report not found!!");
        
// //        }
// //        set setReports(value :string){
// //         if(!value){
// //            throw new Error("please pass valid value!!")
// //         }
// //         this.reports.push(value);
// //        }
// //     }
// //     const accDep = new AccountingDepartment("D1",[]);
// //     accDep.aadReports("Bugs");
// //     accDep.printReports();
// //     accDep.describe();

// //     accDep.addEmployee("alok");
// //     accDep.addEmployee("mac");
// //     accDep.printEmployeeInformation();
// //     //setter and getter 

// //     console.log("getter=>",accDep.getReports);
// //     accDep.setReports = "code review error"
    
// //static method

// class Department {
//     public name : string;
//     protected employees : string[]=[];
//      private readonly  id :string;
    
//         constructor( id:string,n: string, ){
//             this.name = n;
//             this.id = id,
//             this.employees = []; 
//         }
//         describe(this:Department){
//             console.log("Department", this.name);
//         }
    
//         addEmployee(emp : string){
//            this.employees.push(emp);
//         }
//         printEmployeeInformation(){
//             console.log('Number of emp:', this.employees.length);
//             console.log(this.employees);
            
    
//         }
//         static getSalary(){
//             return {slaray:50000}
//         }

//     }

//     const slaray = Department.getSalary();
//     console.log(slaray);
    
//     //abstract

//    abstract class Department2{
//         name :string;
//         protected employees : string[];

//         constructor(id:string,n:string){
//             this.id = id;
//             this.name=n;
//         }

//     }

    