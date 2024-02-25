const takeOrder = (customer) => {
    console.log(`take order for ${customer}`)
}

const processOrder = (customer) =>{
    console.log(`processing order for ${customer}`);

    setTimeout(() => {
        console.log('processin from cooking completed');
    }, 3000)
}

const completeOrder = (customer) => {
    console.log(`completed order for ${customer}`)

    setTimeout(() => {
        console.log('completed order ');
    }, 3000)
}

takeOrder('customer 1')
processOrder('customer 1')
completeOrder('customer1')

console.log('hello async uncontroll')

