// console.log('conneted this file in html')

function print(){
    console.log('hello print')
}

console.log('this current state before call print fuction')
print()
console.log('this current state after print call')


//promise
const hasMeeting = false;

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

console.log('hello')
