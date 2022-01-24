
const slider = document.getElementById("moneySlider")
const min = slider.min
const max = slider.max
const value = slider.value
//E9EEFB
slider.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${(value-min)/(max-min)*100}%, #E9EEFB ${(value-min)/(max-min)*100}%, #E9EEFB 100%)`

slider.oninput = function() {
  this.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${(this.value-this.min)/(this.max-this.min)*100}%, #E9EEFB ${(this.value-this.min)/(this.max-this.min)*100}%, #E9EEFB 100%)`
};

// TOGGLE
let toggle = document.getElementById('chk');

toggle.addEventListener('change', e => {

   if(e.target.checked){
      document.getElementsByClassName('yr')[0].style.cssText = "color:var(--Strong_Cyan); transition: color 0.5s ease-in-out";
      document.getElementsByClassName('mth')[0].style.cssText = "color:var(--Grayish_Blue)";
      document.getElementsByClassName('discount__amount')[0].style.cssText ="background-color: rgba(254, 236, 231, 1.0); transition: all 0.5s ease-in-out";
   } else {
      document.getElementsByClassName('mth')[0].style.cssText = "color:var(--Strong_Cyan); transition: color 0.5s ease-in-out";
      document.getElementsByClassName('yr')[0].style.cssText = "color:var(--Grayish_Blue)";
      document.getElementsByClassName('discount__amount')[0].style.cssText ="background-color: transparent";
   }
})
