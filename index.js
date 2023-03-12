const secondHand = document.querySelector('.sec-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function getdate(){
    const date = new Date();
    let sec = date.getSeconds();
    let min = date.getMinutes();
    let hour = date.getHours();

   
    //turning the seconds into a degree so that it can match the given time for example 2 sec divide by 60
    //is equal to 0.0333... then that  will get multiplied with 360 which will be 12deg and based on that it will get rotated
    //the reason it got plus with 90 is because the initial was 90 
    const secondDegree = ((sec/60)*360)+90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    
    const minDegree = ((min/60)*360)+90;
    minuteHand.style.transform=`rotate(${minDegree}deg)`;


    const hourDegree =((hour/12)*360)+90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;



}

setInterval(() => {
   getdate() 
}, 1000);