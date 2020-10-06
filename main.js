let btn=document.getElementById("btn").addEventListener("click",showAddress);
let ip= document.getElementById("infor");
let ipAddress=document.querySelector(".ip");
let locate= document.querySelector(".locate");
let timeZ=document.querySelector(".utc");
let isp= document.querySelector(".isp");
var map=document.getElementById("map");
var mymap = L.map('map');
var marker;
var myIcon = L.divIcon({className: 'my-div-icon'});
/*let map=document.querySelector("#map")*/
var lat;
var lng;
var zoom=10;
var api_key="at_lbecOzqxMm3MTwdNxjsawcbfvoC8k";




document.addEventListener("DOMContentLoaded",function(){
  ipAddress.innerHTML="	27.77.207.113"
  locate.innerHTML="Tan Chau An Giang VN"
  timeZ.innerHTML="UTC+7"
  isp.innerHTML="Viettel Group";
 mymap.setView([14.0583, 108.277], zoom);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);
  marker=L.marker([14.0583,108.277],{icon:myIcon}).addTo(mymap);
  marker.bindPopup("<p>Tan Chau An Giang</p>")

  
 
})

function showAddress(e){
  
  fetch("https://geo.ipify.org/api/v1?apiKey=at_lbecOzqxMm3MTwdNxjsawcbfvoC8k&ipAddress="+ip.value)
      .then(res=>res.json())
      .then(result=>{
          ipAddress.textContent=result.ip;
          locate.textContent=result.location.city+" "+result.location.country;
          timeZ.innerHTML="UTC-"+result.location.timezone;
          isp.innerHTML=result.isp;
          lat=result.location.lat;
          lng=result.location.lng;
          console.log(result)
          mymap.setView([lat, lng], zoom);
          marker=L.marker([lat,lng]).addTo(mymap);
          marker.bindPopup("<p>"+result.location.city +" "+ result.location.country+"</p>")


          
          
      }
      
      )
      
      


}
