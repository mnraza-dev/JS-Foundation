
// this refers to the current object
console.log(" first one ", this);
function update(){
    console.log(this);
}
update();
// this refers to the object through which function called