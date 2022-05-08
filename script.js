const items = document.querySelectorAll('.item');
const titles = document.querySelectorAll('.sectionTitle');
const digit = document.querySelectorAll('.digit');
const previousTimes= document.querySelectorAll('.previousTime');
const previousDigits = document.querySelectorAll('.previousdigit');
const timePeriods = ['Yesterday','Last Week','Last Month']

const options = document.querySelectorAll('.option');

const renderTimes = function(time,data,i){
   element = data;
   if(time===timePeriods[0]){
      const {title} = element;
          const {timeframes:{daily}}= element
          const {current}=daily;
          const {previous}=daily;
         //  console.log(current)
          digit[i].innerHTML = current;
          previousDigits[i].innerHTML = previous;
          previousTimes[i].innerHTML = timePeriods[0];
   }

   if(time===timePeriods[1]){
      const {title} = element;
          const {timeframes:{weekly}}= element
          const {current}=weekly;
          const {previous}=weekly;
         //  console.log(current)
          digit[i].innerHTML = current;
          previousDigits[i].innerHTML = previous;
          previousTimes[i].innerHTML = timePeriods[1];
   }

   if(time===timePeriods[2]){
      const {title} = element;
          const {timeframes:{monthly}}= element
          const {current}=monthly;
          const {previous}=monthly;
         //  console.log(current)
          digit[i].innerHTML = current;
          previousDigits[i].innerHTML = previous;
          previousTimes[i].innerHTML = timePeriods[2];
   }
}


function getJson(time){
   fetch("./data.json")
   .then(response => {
      return response.json();
   })
   .then(data => {
       const sections = data
       sections.forEach((element,i) => {
          renderTimes(time,element,i)
         });
      });

}


options.forEach((option,i)=>{
   console.log(i)
   option.addEventListener('click',function(){

      console.log('💩',option,i)
      getJson(timePeriods[i])
   })
})

// console.log(previousTimes)
// console.log(previousDigits)
// console.log(digit)
// console.log(items)





