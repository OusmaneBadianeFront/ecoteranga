// IMPLEMENTING STICKY  A NAVABR 

const header = document.querySelector('.header')
const section1 = document.querySelector('#section--1');
const sections = document.querySelectorAll('.section');


// We will observe the position of our section1

const obs = new IntersectionObserver(function(entries){
   const ent = entries[0];
   if(ent.isIntersecting==false){
    header.classList.add("sticky")
   }else{
    header.classList.remove("sticky")
   }
},{

    root:null,
    threshold :0
})
obs.observe(section1);

// Reaveling elements Onscroll
const reaveal=function(entries, observer){
const [entry]= entries;
    console.log(entry)

    if(!entry.isIntersecting)return;
    entry.target.classList.remove('section--hidden')
    observer.unobserve(target)
    
}

const obsSection = new IntersectionObserver(reaveal,{
    
 },{
 
     root:null,
     threshold :0.12,   
 })

//  adding the section--hidden to all the sections
sections.forEach(function(section){
    obsSection.observe(section);
    section.classList.add('section--hidden')
})



