function sum(...num) {
    let sum = 0
    for (let i = 0; i < num.length; i++) {
        sum = sum + num[i] 
    }
    return sum.toString()
}

// const verify=(req,res)=>{
//     if()
// }

module.exports = {sum}