function placeOrder(drink){
    return new Promise(function(resolve, reject) {
            if(drink === 'coffee') {
                resolve('Order for coffee placed');
            }
            else{
                reject('Order is not placed');
            }
})
}

function processOrder(orderPlaced){
return new Promise(function(resolve, reject){
        resolve(`${orderPlaced} and served`);
    })
}

function generateBill(processdOrder){
return new Promise(function(resolve,reject) {
    resolve(` ${processdOrder} and bill generated for 200`);
    })
}

async function f(){
try{
    let orderStatus = await placeOrder('coffee');
    let  orderIsProcessd = await processOrder(orderStatus);
    let billGenerated = await generateBill(orderIsProcessd);
    console.log(billGenerated);
}
catch(err){
    console.log(err);
}
    

}

f();

    