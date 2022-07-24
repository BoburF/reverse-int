module.exports = function reverse(n) {
    // let str = String(n)
    // console.log(str)
    let arr = String(n).split("").reverse();

    if (arr[arr.length - 1] == "-") {
        arr.pop();
        return arr.join("");
    } else {
        return arr.join("");
    }

    // let arr = str.split("").map((num)=>{
    //     if(num !== '-'){
    //         return Number(num)
    //     }else if(num !== '-'){
    //         // return
    //     }
    //   })
    // console.log(arr)
};
