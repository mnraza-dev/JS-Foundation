function show(){
    let count = 0;

    return function() {
        count++;
        console.log("Count is: " + count);
    };


}
const increment = show();
increment(); // Count is: 1