function friendlyFunctionWithoutAsync() {
    return Promise.resolve('hello with out async')
}

async function friendlyFunction() {
    return `hello with async`
}

//how to crate promise

const hasMeetings = true;

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
        reject(new Error('meeting already scheduled'))
        // reject('metting already schduled')
    }
})

const addToCalendar1 = (meetingDetail) => {
    const calender1 = `${meetingDetail.name} has been   scheduled on ${meetingDetail.location} at ${meetingDetail.time}`

    return Promise.resolve(calender1)
}

async function myMeeting(){
   try{
    const meetingDetails = await meeting;
    const calender = await addToCalendar1(meetingDetails);
    console.log(calender) 
   }
   catch{
    console.log('promise error',error)
   }
}
myMeeting()

console.log(friendlyFunctionWithoutAsync())
console.log(friendlyFunction())


console.log('end')