const inputnum = document.getElementById("inputnum");
const ctof = document.getElementById("tofahrenheit");
const ftoc = document.getElementById("tocelsius");
const ctok = document.getElementById("ctok");
const ktoc = document.getElementById("ktoc");
const ftok = document.getElementById("ftok");
const ktof = document.getElementById("ktof");
const result = document.getElementById("result");
const button = document.getElementById("buttons");
var temp;


button.onclick = function() {
    if (ctof.checked) {
        temp = Number(inputnum.value);
        temp = temp * 9 / 5 + 32;
        
        
        if (temp.toFixed(2).length > 7) {
            alert('Invalid figure conversion. Please enter a valid temperature');
        } else {
            result.textContent = temp.toFixed(2) + "°F";
        }
    } else if (ftoc.checked) {
        temp = Number(inputnum.value);
        temp = (temp - 32) * (5 / 9);
        
      
        if (temp.toFixed(2).length > 7) {
            alert('Invalid figure conversion. Please enter a valid temperature');
        } else {
            result.textContent = temp.toFixed(2) + "°C";
        }
    } else if (ctok.checked) {
        temp = Number(inputnum.value);
        temp = temp + 273.15;
        
       
        if (temp.toFixed(2).length > 7) {
            alert('Invalid figure conversion. Please enter a valid temperature');
        } else {
            result.textContent = temp.toFixed(2) + "°K";
        }
    } else if (ktoc.checked) {
        temp = Number(inputnum.value);
        temp = temp - 273.15;
        
        
        if (temp.toFixed(2).length > 7) {
            alert('Invalid figure conversion. Please enter a valid temperature');
        } else {
            result.textContent = temp.toFixed(2) + "°C";
        }
    } else if (ftok.checked) {
        temp = Number(inputnum.value);
        temp = (temp + 459.67) * (5 / 9);
        
       
        if (temp.toFixed(2).length > 7) {
            alert('Invalid figure conversion. Please enter a valid temperature');
        } else {
            result.textContent = temp.toFixed(2) + "°K";
        }
    } else if (ktof.checked) {
        temp = Number(inputnum.value);
        temp = (temp * 9 / 5) - 459.67;
        
     
        if (temp.toFixed(2).length > 7) {
            alert('Invalid figure conversion. Please enter a valid temperature');
        } else {
            result.textContent = temp.toFixed(2) + "°F";
        }
    } else {
        window.alert("Please select your temperature unit");
    }
    
    
    
}