function getData(x, y, callback){  
 console.log(" The multiplication of the numbers " + x + " and " + y + " is: " + (x*y) );
    callback();
}
function showData(){
    console.log(' This is the showData() method execute after the completion of getData() method.');  

}
getData(20, 30, showData);  