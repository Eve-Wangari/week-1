const button = document.querySelector('.hamburger-menu')
const mobile = document.querySelector('.mobile-menu')
const counters = document.querySelectorAll('.counter')
let scrollStarted = false;
// !scrollStarted is equal to true
button.addEventListener('click',navToggle)
document.addEventListener('scroll',scrollPage)

//to have the counter start only when we scroll down not on load
function scrollPage(){
  const scrollPos = window.scrollY;
  // console.log(scrollPos)
  if(scrollPos>100 && !scrollStarted){
    countUp();
    scrollStarted=true;

  }else if(scrollPos<100 && scrollStarted){
    reset();
    scrollStarted=false;

  }


}
function navToggle(){
    button.classList.toggle('show')
    document.querySelector('.overlay').classList.toggle('overlay-show')
    document.body.classList.toggle("stop-scroll")
    mobile.classList.toggle('show-menu')
    // document.querySelector('.main-header').classList.toggle('allow')
}

function countUp(){
  counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter= () =>{
      // get count target
      const target = +counter.getAttribute('data-target')

      // get counter value to compare with the target
      const c = +counter.innerText;
      // define the value to increase by 
      const increment = target/100;
      

      // if counter is less than target, add increment
      if(c<target){
        counter.innerText = `${Math.ceil(c+increment)}`

        setTimeout(updateCounter,75)
        // the set timeout function keeps running until the if condition is met.
      }else{
        counter.innerText = target
      }

    }
    
    updateCounter();
    
  });

}

function reset(){
  counters.forEach((counter)=>{counter.innerText=0})

}






// counters.forEach(counter => {
    
//       // console.log(counter.dataset.target)
//       // console.log(counter.getAttribute('data-target'))
//       // let target = parseInt(counter.getAttribute('data-target'))
//       // let target = Number(counter.getAttribute('data-target'))
//       let target = +counter.getAttribute('data-target') 
  
//      counter.innerHTML = 0;
//       // console.log(typeof(target))
//       // console.log(target)

//       let c = counter.innerHTML;
//       let increment = target/100;
//       // console.log(c)

 
//       if(c<target){
//         // console.log(Math.ceil(c+increment))
//         counter.innerHTML = `${Math.ceil(c+increment)}`
         

//       }
//         // console.log(c)

// })

// // function countUp(){ 

// // counters.forEach(counter => {
    
// //     // console.log(counter.dataset.target)
// //     // console.log(counter.getAttribute('data-target'))
// //     // let target = parseInt(counter.getAttribute('data-target'))
// //     // let target = Number(counter.getAttribute('data-target'))
// //     // let target = +counter.getAttribute('data-target') 

// //    counter.innerHTML = 0;
// //     // console.log(typeof(target))
// //     console.log(target)
// //       function updateCounter() {
// //         let target = +counter.getAttribute('data-target') 

        
// //       }
    
// // });

// // }
// // countUp()

