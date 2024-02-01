const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway=document.querySelector(".giveaway");
const deadline=document.querySelector(".deadline");
const items=document.querySelectorAll(".deadline-format h4");

let tempDate=new Date();

let tempYear=tempDate.getFullYear();
let tempMonth=tempDate.getMonth();
let tempDay=tempDate.getDate();



// let futureDate=new Date(2024,0,11,11,30,0);
// console.log(futureDate);

const futureDate=new Date(tempYear,tempMonth,tempDay+10,10,30,0);
// console.log(futureDate);

const year=futureDate.getFullYear();
const hours=futureDate.getHours();
const mins=futureDate.getMinutes();

let month=futureDate.getMonth();
month=months[month];

const date=futureDate.getDate();

const day = weekdays[futureDate.getDay()];


giveaway.textContent = `giveaway ends on ${day} ${date} ${month} ${year} ${hours}:${mins}am `;

const futureTime=futureDate.getTime();

function getRemTime()
{
  const presentTime=new Date().getTime();

  const rem=futureTime-presentTime;

  const oneDay=24*60*60*1000;
  const oneHour=60*60*1000;
  const oneMin=60*1000;

  let days=rem/oneDay;
  days=Math.floor(days);
  
  let hours = Math.floor((rem % oneDay) / oneHour);
  let mins = Math.floor((rem % oneHour) / oneMin);
  let secs = Math.floor((rem % oneMin) / 1000);
  
  const values=[days,hours,mins,secs];
  
 
 function format(item)
 {
   if(item<10)
   {
    return item=`0${item}`
   }
   return item;
 }

 items.forEach((item, index) => {
   item.innerHTML = format(values[index]);
 });

 if(rem<0)
 {
  clearInterval(countdown);
  deadline.innerHTML=`<h4 class="expired">UH OH! Time's Up! See u next time!</h4>`
 }

}

let countdown=setInterval(getRemTime,1000);




getRemTime();

