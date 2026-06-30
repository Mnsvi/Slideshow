let button = document.querySelector(".click button");
let i1 = document.querySelector("#img1");
let i2 = document.querySelector("#img2");
let i3 = document.querySelector("#img3");
let i4 = document.querySelector("#img4");
let i5 = document.querySelector("#img5");
let op = document.querySelector(".display img");
let arr = [i1, i2, i3, i4, i5];
let index = 0;
button.addEventListener("click", ()=>{
    index = 0;
    arr[index].style.visibility = "visible";
    myFun = setInterval(() => {
        arr[index].style.visibility = "hidden";
        index++;
        if(index >= arr.length){
            clearInterval(myFun);
            return
        }
        arr[index].style.visibility = "visible";
        
    }, 1000)
})