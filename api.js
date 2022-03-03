document.getElementById("weather2").style.display='none';

const search=()=>{
  const input=  document.getElementById("city-name");
  const inputValu=input.value;
   input.value='';
  const url=`https://api.weatherapi.com/v1/current.json?key=1e2ac8d8caa6427185775843220303&q=${inputValu}&aqi=no`;
   fetch(url)
   .then(res=>res.json())
   .then(data=>showDeteles(data));
}


const showDeteles=(data)=>{
     
      const city= document.getElementById("city");
      const tem= document.getElementById("tem");
    
      try{
          city.innerHTML=data.location.name;
        tem.innerHTML=data.current.temp_c;
        const temN=parseFloat(tem.innerText);
        document.getElementById("weather2").style.display='none';
        if(temN>30){
            document.getElementById("weather").innerHTML=" Hot"
        }
      else{
        document.getElementById("weather").innerHTML="Clouds";}
       }
     
      catch{
      
        document.getElementById("weather2").style.display='block';
      }
           

    
      
  

}