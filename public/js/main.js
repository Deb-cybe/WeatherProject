console.log(12);
const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
let submitBtn=document.getElementById('submitBtn');
const temp_status=document.getElementById('temp_status');
const temp_span=document.getElementById('temp_span');
const temp=document.getElementById('temp');
const datahide=document.querySelector('.middle_layer');

//get day, date, month
const day=document.getElementById('day');
const dayArr=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
day.innerHTML=dayArr[new Date().getDay()];
const date=document.getElementById('date');
const month=['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'];
date.innerHTML=new Date().getDate()+" "+month[new Date().getMonth()];

const getInfo=async(event)=>{

    event.preventDefault();//**
    //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=da91fe3804cffeda981510820197c8e1
    let cityVal=cityName.value;
    if (cityVal === "") {
        city_name.innerText=`Write a City Name!`;
        datahide.classList.add('data_hide');
    } else {
        try {
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=da91fe3804cffeda981510820197c8e1`;
        const response=await fetch(url);
        const data=await response.json();
        console.log(data);
        const arrData=[data];
        // console.log(arrData[0].main.temp);
        let temp_value=arrData[0].main.temp;
        temp_value=-273+temp_value;
        temp_value=temp_value.toFixed(2);
        temp_span.innerText=temp_value;
        const tempWeather=temp_status.innerText=arrData[0].weather[0].main;
        if(tempWeather=="Clouds"){
            temp_status.innerHTML='<i class="fa fa-cloud"></i>';
        }
        else if(tempWeather=="Clear"){
            temp_status.innerHTML='<i class="fa fa-sun"  style="color:rgb(238, 255, 0);"></i>';
        }
        else if(tempWeather=="Rain"){
            temp_status.innerHTML='<i class="fa fa-rain"  style="color:"blue";"></i>';
        }
        //some others are smoke,haze
        city_name.innerText=arrData[0].name+","+arrData[0].sys.country;
        datahide.classList.remove('data_hide');
        } catch(error){
            console.log(error);
            city_name.innerText=`Enter proper city name!`;
            datahide.classList.add('data_hide');
        }
    }
    // alert(2);
};

submitBtn.addEventListener('click',getInfo);