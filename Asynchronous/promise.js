//how to crate promise

const hasMeetings = false;

const meeting = new Promise( (resolve, reject) => {
    if(!hasMeetings){
        const meetingDetail = {
            name: 'technical Meeting',
            location: 'google meet',
            time: '10:00 pm'
        }
        resolve(meetingDetail)
    } 
    else {
        // create a javascript error with sent this error or send any error message
        // reject(new Error('meeting already scheduled'))
        reject('metting already schduled')
    }
})

// const addToCalendar1 = (meetingDetail) => {
//     return new Promise( (resolve, reject) => {
//         const calender1 = `${meetingDetail.name} has been scheduled on ${meetingDetail.location} at ${meetingDetail.time}`

//         resolve(calender1)
//     })
// }

//short this above addToCalender1
const addToCalendar1 = (meetingDetail) => {
    const calender1 = `${meetingDetail.name} has been   scheduled on ${meetingDetail.location} at ${meetingDetail.time}`

    return Promise.resolve(calender1)
}


meeting
   //then() execute when promise return resolve otherwise execute catch()
  .then((res) => {
    //resolve data
    console.log(JSON.stringify(res))
  })
  .catch( (err) => {
    //reject data
    // console.log(err.message)//if send throw javascript error then show in .message
    console.log(err)//if sent just string then show this in err 
  })


//chain promise
meeting
 .then(addToCalendar1)
 .then((res) => {
    console.log(JSON.stringify(res))
  })
  .catch( (err) => {
    console.log(err)
  })


  const promise1 = Promise.resolve(`Promise 1 resolved`);

const promise2 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve('promise 2 resolved')
    }, 2000)
})

promise1.then(res => console.log("promise 1 result - ",res))
promise2.then(res => console.log("promise 2 result - ",res))

//now i want to 2 promise ek time e suru hve ekta result return korbe then we are use Promise.all

Promise.all([promise1, promise2])
 .then( res => console.log('all -> ',res))
 .catch( err => console.log(err))

 //Promise.race similar to Promise.all but differce is first promise resolve return that it.
 Promise.race([promise1, promise2])
 .then( res => console.log('race -> ',res))
 .catch( err => console.log(err))



console.log('hello')

  console.log('hello promise')