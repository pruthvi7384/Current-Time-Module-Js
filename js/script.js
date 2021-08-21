const currentTimeDisplay = document.getElementById('time');
const TodayDate = document.getElementById('date');
const CurrentMsg = document.getElementById('msg');
const Name = document.getElementById('name');
setInterval(()=>{
    // ===Chanages Today Date=====
        const today_date = new Date();
        getDate(today_date);
        getTime(today_date);
        // console.log(today_date);
    // ==X=Chanages Today Date==X===
},1000)
Name.innerHTML=prompt('Enter Your Name Please !');
function getDate(date){
    // console.log(date);
    //====== Get Today Date======
        const getFullYear = date.getFullYear(),
            day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
            getDay =day[date.getDay()],
            getDate = date.getDate(),
            month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
            getMonth = month[date.getMonth()];
    //===X== Get Today Date==X====

    //====== Display Here Full Date======
        const fullTodayDate=`${getDay} ${getDate} ${getMonth} ${getFullYear}`;
        TodayDate.innerHTML=fullTodayDate;
        // console.log(fullTodayDate);
    //==X=== Display Here Full Date==X===
}
function getTime(time){
    // ======Get Current Time====
        getHours= time.getHours(),
        getMinutes= time.getMinutes(),
        getseconds= time.getSeconds();
    // ===X==Get Current Time==X==

    // ========12 Hours Formate===
        const ampm = getHours >= 12 ? 'PM' : 'AM';
        if(getHours<12){
            CurrentMsg.innerHTML='Good Morning';
            document.body.style = "background-image:url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbOwcB0YgbgBgndkj30AndMeFgBtlgTECAMQ&usqp=CAU')";
        }else if(getHours<18){
            CurrentMsg.innerHTML='Good Afternoon';
            document.body.style = "background-image:url('https://thumbs.dreamstime.com/b/beautiful-afternoon-autumn-landscape-mountains-scenery-sunny-weather-gorgeous-sky-amazing-nature-background-trees-colorful-164729108.jpg')";
        }else{
            CurrentMsg.innerHTML='Good Evening';
            document.body.style = "background-image:url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShR3mImQgbve-2upvpCgoNwLZxWcK1HlO_tg&usqp=CAU')";
        }
        if(getHours == 12){
            getHours = 12;
        }
        if(getHours > 12){
            getHours = getHours - 12;
        }
        if(getHours < 10){
            getHours =`0${getHours}`;
        }
        if(getMinutes < 10){
            getMinutes = `0${getMinutes}`;
        }
        if(getseconds < 10){
            getseconds = `0${getseconds}`;
        }
    // =====X==12 Hours Formate==X==

    // ======Display Time Here=====
        const currentTime= `${getHours} : ${getMinutes} : ${getseconds} ${ampm}`;
        currentTimeDisplay.innerHTML=currentTime;
        // console.log(currentTime);
    // ===X==Display Time Here==X==
}