
  var wakeuptime = 7;
  var noon = 12;
  var lunchtime = 12;
  var naptime = lunchtime + 2;
  var partytime;
  var evening = 18;
var clock = document.getElementById("clock");
var currentTime = function(){
  var newDate = new Date();
  var hours = newDate.getHours();
  var minutes = newDate.getMinutes();
  var seconds = newDate.getSeconds();
  var meridiem = "AM";
  if(hours >= 12){
    meridiem = "PM";
  }
  if(hours > 12){
    hours = hours - 12; 
  }
  if(hours < 10){
    hours = "0" + hours;
  }
  if(minutes < 10){
    minutes = "0" + minutes;
  }
  if(seconds < 10){
    seconds = "0" + seconds;
  }
  clock.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
}
var updateTime = function(){
  var time = new Date().getHours();
  var lolCatImag = document.getElementById("lolcatImage");
  var quoteText = document.getElementById("timeEvent");
  var messageText;
  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
  if (time == partytime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    messageText = "Let's party!";
  }
  else if (time == wakeuptime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "Wake up!";
  }
  else if (time == lunchtime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "Let's have some lunch!";
  }
  else if (time == naptime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "Sleep tight!";
  }
  else if (time < noon)
  {
    image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
    messageText = "Good morning!";
  }
  else if (time >= evening)
  {
    image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
    messageText = "Good evening!";
  }
  else
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    messageText = "Good afternoon!";
  }
  lolCatImag.src = image;
  quoteText.innerText = messageText
  currentTime();
};
setInterval(updateTime, 1000);

var partyButton = document.getElementById("partyTimeButton");
var letsParty = function(){
  if(partytime < 0){
    partytime = new Date().getHours();
    partyButton.innerText = "lets Party!";
    partyButton.style.backgroundColor = "red";
  }
  else{
    partytime = - 1;
    partyButton.innerText = "Party Over!";
    partyButton.style.backgroundColor = "black";
  }
}
partyButton.addEventListener("click", letsParty);
letsParty();
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var wakeUp = function(){
  wakeuptime = wakeUpTimeSelector.value;
}
wakeUpTimeSelector.addEventListener("change", wakeUp);
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var lunchTime = function(){
  lunchtime = lunchTimeSelector.value;
}
lunchTimeSelector.addEventListener("change", lunchTime);
var napTimeSelector = document.getElementById("napTimeSelector");
var napTime = function(){
  naptime = napTimeSelector.value;
}
napTimeSelector.addEventListener("change", napTime);
