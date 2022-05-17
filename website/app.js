/* Global Variables */
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=55e9352413cf72506946120bb9b4c485';
const div = document.querySelector('div');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//const getTemp = async() => {
    //const zip = document.getElementById('zip').value;
    //const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=55e9352413cf72506946120bb9b4c485`);
//try{
    //const data = await request.json();
    //console.log(data);
    //const temp = data.main.temp;
    //return {temp}
//}catch(error){
    //console.log('error', error);
//}
//}
//click event listener
document.getElementById('generate').addEventListener('click', performAction);
function performAction(e) {
        const feelings = document.getElementById('feelings').value;
        const zip = document.getElementById('zip').value;
        getTemp(zip)
        .then(function (data) {
            console.log(data);
            postData('/add', {date:newDate, temp:data.main.temp, content:feelings})
            updateUI();
        });
    };
        //get data from API
        const getTemp = async(zip) => {
            const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=55e9352413cf72506946120bb9b4c485`);
        try{
            const data = await request.json();
        //console.log(data);
        return data;
        }catch(error){
            console.log('error', error);
        }
        }
        //getTemp();
//}
//post data to server
const postData = async(url, data)=> {
    console.log(data);
    const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'content-type':'application/json',
    },
    body: JSON.stringify(data),

});
try{
    const newData = await response.json();
    console.log(newData);
    return newData;
}catch(error){
console.log('error', error);
}
}
//get updated data from server
const updateUI = async () =>{
    const request = await fetch('/all');
    console.log(request);
    try {
    const allData = await request.json()
    console.log(allData)
    document.getElementById('temp').innerHTML = `Temperature: ${allData[0].temp}`;
    document.getElementById('content').innerHTML = `I feel: ${allData[0].content}`;
    document.getElementById('date').innerHTML = `Date: ${allData[0].date}`;
    }catch(error) {
    console.log('error', error);
    }
    //updateUI();
   }