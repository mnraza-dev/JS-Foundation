function gettingMyNums(num, getMyNextNumber) {
  setTimeout(() => {
    console.log("My Magic Number:", num);
    if(getMyNextNumber){
        getMyNextNumber()
    }
  }, 1000);
}

gettingMyNums(1, ()=>{
    gettingMyNums(11, ()=>{
        gettingMyNums(111, ()=>{
            gettingMyNums(1111,()=>{
                gettingMyNums(11111)
            })
        })
    })
});