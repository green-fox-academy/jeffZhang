'use strict'

// - Create a variable named `af` with the following content: `[4, 5, 6, 7]`
// - Log each the element of `af` to the console*
// *hint: use a loop, console.log(af) won't cut it
// - bonus for using the correct built in array method

const af = [4,5,6,7]

//loop solution
for (let i = 0; i < af.length; i++) {
    console.log(af[i])
}

//built-in method
af.forEach((ele)=>{
    console.log(ele)
})