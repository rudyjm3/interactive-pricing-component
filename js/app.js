
const slider = document.getElementById("moneySlider")
const min = slider.min
const max = slider.max
const value = slider.value

slider.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 96%, 42%) ${(value-min)/(max-min)*100}%, #E9EEFB ${(value-min)/(max-min)*100}%, #E9EEFB 100%)`

slider.oninput = function() {
  this.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 96%, 42%) ${(this.value-this.min)/(this.max-this.min)*100}%, #E9EEFB ${(this.value-this.min)/(this.max-this.min)*100}%, #E9EEFB 100%)`
};


// SLIDER AND PRICE CALCULATION /////////////////////////////////////////////////////////
let viewers = document.getElementsByClassName('views_number')[0];
let cost = document.getElementsByClassName('m_amount')[0];


function moneySliderUpdate(ele) {
   let value = +ele.value;
   console.log(value);

   switch(value) {
      case 0:
         view = "0";
         cost = "0.00";
         break; 
      case 20:
         view = "10K";
         cost = "8.00";
         discount = (25 / 100) * cost;
         discount_amount = (cost - discount).toFixed(2); 
         break;
      case 40:
         view = "50K";
         cost = "12.00"; 
         discount = (25 / 100) * cost;
         discount_amount = (cost - discount).toFixed(2);         
         break;
      case 60:
         view = "100K";
         cost = "16.00";
         discount = (25 / 100) * cost;
         discount_amount = (cost - discount).toFixed(2); 
         break;
      case 80:
         view = "500K";
         cost = "24.00";
         discount = (25 / 100) * cost;
         discount_amount = (cost - discount).toFixed(2); 
         break;
      case 100:
         view = "1M";
         cost = "36.00";
         discount = (25 / 100) * cost;
         discount_amount = (cost - discount).toFixed(2);
         break;  
   }

   document.getElementsByClassName('views_number')[0].innerText = view;
   console.log(view);
   document.getElementsByClassName('m_amount')[0].innerText = cost;
   console.log(cost);
   


   let toggle = document.getElementById('chk');
   toggle.addEventListener('change', e => {

      if(e.target.checked) {
         document.getElementsByClassName('yr')[0].style.cssText = "color:var(--Strong_Cyan); transition: color 0.5s ease-in-out";
         document.getElementsByClassName('mth')[0].style.cssText = "color:var(--Grayish_Blue)";
         document.getElementsByClassName('discount__amount')[0].style.cssText ="background-color: rgba(254, 236, 231, 1.0); transition: all 0.5s ease-in-out";

         document.getElementsByClassName('m_amount')[0].innerText = discount_amount;

         console.log("cost minus discount, inside switch statement " + discount_amount);
         console.log("discount calc inside switch statement " + discount);
      } else {
         document.getElementsByClassName('mth')[0].style.cssText = "color:var(--Strong_Cyan); transition: color 0.5s ease-in-out";
         document.getElementsByClassName('yr')[0].style.cssText = "color:var(--Grayish_Blue)";
         document.getElementsByClassName('discount__amount')[0].style.cssText ="background-color: transparent";

         document.getElementsByClassName('m_amount')[0].innerText = cost;
      }
   })
};

////////////////////////////////////////////////////////
// TOGGLE
// let toggle = document.getElementById('chk');

// toggle.addEventListener('change', e => {

//    let currentCost = document.getElementsByClassName('m_amount')[0].innerText;
//    let discount = 25;
//    let distotal;
//    let percent;
// console.log(currentCost + " unchanged amount");

//    if(e.target.checked){
//       document.getElementsByClassName('yr')[0].style.cssText = "color:var(--Strong_Cyan); transition: color 0.5s ease-in-out";
//       document.getElementsByClassName('mth')[0].style.cssText = "color:var(--Grayish_Blue)";
//       document.getElementsByClassName('discount__amount')[0].style.cssText ="background-color: rgba(254, 236, 231, 1.0); transition: all 0.5s ease-in-out";
      
//    } else {
//       document.getElementsByClassName('mth')[0].style.cssText = "color:var(--Strong_Cyan); transition: color 0.5s ease-in-out";
//       document.getElementsByClassName('yr')[0].style.cssText = "color:var(--Grayish_Blue)";
//       document.getElementsByClassName('discount__amount')[0].style.cssText ="background-color: transparent";
//    }
// })



// Here are the different page view ranges and the corresponding monthly price totals:

// - 10K pageviews / $8 per month  (slider step = 20)
// - 50K pageviews / $12 per month (slider step = 40)
// - 100K pageviews / $16 per month (slider step = 60)
// - 500k pageviews / $24 per month (slider step = 80)
// - 1M pageviews / $36 per month (slider step = 100)

// If the visitor switches the toggle to yearly billing, a 25% discount should be applied to all prices.

