//Display an algorithm from range of 0 to 100
   //Odd numbers (i%2 != 0)
   //Even Numbers (i%2 == 0)

   //Fizz (i%3 == 0)
   //buzz (i%5 == 0)
   //FizzBuzz (i%3 == 0 && i%5 ==0)



for (i=1  ; i<=100; i++){
   i%2==0?disp.innerHTML+=`<div style= 'color: red'> ${i} I be even</div>` : disp.innerHTML+=`<div>${i} I be odd</div>`
   // i%2!=0?disp.innerHTML+=`<div>${i} I be odd</div>` : disp.innerHTML+="" 
   
}



for (i=0; i<=100; i++) {
   i%3==0 && i%5==0?disp.innerHTML+=`<div>${i} I be FIzzBuzz</div>` : disp.innerHTML+="" 
   i%3==0?disp.innerHTML+=`<div>${i} I be fizz</div>` : disp.innerHTML+="" 
   i%5==0?disp.innerHTML+=`<div>${i} I be buzz</div>` : disp.innerHTML+="" 
}


