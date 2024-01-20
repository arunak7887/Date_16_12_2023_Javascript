emp={
    id:102,
    name:"Shyam Kumar",
    salary:4000
}
console.log(emp.id+" "+emp.name+" "+emp.salary);  

var emp1=new Object();
emp1.id=201;
emp1.nam="Ravi Malik";
emp1.salary=50000;
console.log(emp1.id+" "+emp1.nam+" "+emp1.salary); 

function emp3(id1,name1,salary1){
    this.id1=id1;
    this.name1=name1;
    this.salary1=salary1;

}
e=new emp3(103,"Arun Kinwad",3000);
console.log(e.id1+""+e.name1+" "+e.salary1);
