// console.log('conneted this file in html')

function print(){
    console.log('hello print')
}

console.log('this current state before call print fuction')
print()
console.log('this current state after print call')


//promise
const hasMeeting = false;

//promise1
const meeting = new Promise((resolve, reject) =>{
    if(!hasMeeting){
        const meetingDetails = {
            name: 'Technical Meeting',
            location: 'google meet',
            time: '20:20pm'
        };
        resolve(meetingDetails)
    }
    else{
        reject(new Error('meeting already scheduled'))
    }
})


//promise 2
const addToCalendar = (meetingDetails) =>{
        const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`
        console.log(calender)
        return Promise.resolve(calender)
}


// console.log(meeting)
meeting
  .then(addToCalendar)
  .then(res => {
    console.log(JSON.stringify(res))
   })
  .catch(err => {
    console.log(err.message)
  })

const promise1 = Promise.resolve(`Promise 1 resolved`);

const promise2 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve('promise 2 resolved')
    }, 2000)
})

promise1.then(res => console.log("promise 1 result - ",res))
promise2.then(res => console.log("promise 2 result - ",res))

console.log('hello')
