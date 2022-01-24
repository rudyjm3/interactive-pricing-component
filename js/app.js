
const slider = document.getElementById("moneySlider")
const min = slider.min
const max = slider.max
const value = slider.value
//E9EEFB
slider.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${(value-min)/(max-min)*100}%, #E9EEFB ${(value-min)/(max-min)*100}%, #E9EEFB 100%)`

slider.oninput = function() {
  this.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${(this.value-this.min)/(this.max-this.min)*100}%, #E9EEFB ${(this.value-this.min)/(this.max-this.min)*100}%, #E9EEFB 100%)`
};