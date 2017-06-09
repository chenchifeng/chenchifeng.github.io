"use strict";
var weather = document.getElementById("weather");
function aa(data){
    // var dataStr = data;          //把返回的数据(一个对象)赋值给data方便调试
    // var date = data.date;      //把对象里date键的值赋值给date变量
    var results = data.results[0];          //把对象里的results键(一个对象数组,其中第一个[0],也是一个数组)里的的第一个元素的值(一个对象)赋值给results变量
    var city = results.currentCity;
    var wtData = results.weather_data[0];
    var date = wtData.date,
        tem = wtData.temperature,
        wt = wtData.weather,
        day = wtData.dayPictureUrl,
        night = wtData.nightPictureUrl;
    weather.innerHTML = city + " ,<br> " + date + " ,<br> " + tem + " ,<br> " + wt + "<br> 日间: <img src="" + day + ""> 晚间: <img src="" + night + "">";

    console.log(results);
    console.log(city);

}

var script = document.createElement("script");
script.setAttribute('src','http://api.map.baidu.com/telematics/v3/weather?location=广州&output=json&ak=H7W5CxI0BPzKtwGcBHmpGPAz50xP1Qjw&callback=aa');
document.body.appendChild(script);
