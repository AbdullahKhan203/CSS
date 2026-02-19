// // document.addEventListener('DOMContentLoaded',()=>{
// //    let circles = document.querySelectorAll('.circle');
// //    circles.forEach((circle)=>{
// //     let degree=0;
// //     let givenDegree=parseInt(circle.getAttribute('data-degree'));
// //     let color=circle.getAttribute('color');
// //     let number=circle.querySelectorAll('h1')
// //     console.log(number);
    
// //        let interval=setInterval(()=>{
// //            degree++;
// //            if(degree>givenDegree){
// //             clearInterval(interval)
// //             return;
// //            }
// //         //    circle.style.background =`conic-gradient(${color} ${degree}%, blue 0%)`;
// //            circle.style.background =`conic-gradient(${color} ${degree}%, #222 0%)`;
// //            number[0].style.color=color;
// //            number[1].style.color=color;
// //           },20)
// //    })
// // })




document.addEventListener('DOMContentLoaded', function() {
    const circle = document.querySelector('.circle');
    const progressTicks = document.querySelector('.progress-ticks');
    const number = document.querySelector('.number');
    
    const targetDegree = parseInt(circle.getAttribute('data-degree'));
    const color = circle.getAttribute('data-color');
    let degree = 0;
    
    const interval = setInterval(() => {
        degree++;
        
        // Update progress fill
        circle.style.background = `conic-gradient(${color} ${degree}%, transparent 0%)`;
        
        // Update tick marks visibility
        progressTicks.style.setProperty('--progress', `${degree}%`);
        
        // Update percentage text
        number.textContent = `${degree}%`;
        
        // Stop condition
        if (degree >= targetDegree) {
            clearInterval(interval);
        }
    }, 20);
});











