'use strict';
{ 

  // navbar hamburger
  const nav = document.querySelector('.navlist')
  const burgerbutton = document.querySelector('label')

  const navfromtop = () => {
    burgerbutton.addEventListener('click', () => {
      nav.classList.toggle('nav-list')
    })
  }
  navfromtop();
  
  // navbar click on one of the links
  const oneofthelinks = document.querySelectorAll('.navlist li a')

  const navhideonlinkclick = () => {
    oneofthelinks.forEach((oneofthelink) => {
      oneofthelink.addEventListener('click', () => {
      nav.classList.toggle('nav-list')
      })
    })
  }
  navhideonlinkclick();






  // h2, home, about, work-flex, form, contactright
  const targeth2 = document.querySelectorAll('h2');
  const targethome = document.querySelector('.home');
  const targetabout = document.querySelector('.about');
  const targetwork = document.querySelectorAll('.work-flex');
  const targetform = document.querySelector('form');
  const targetcontactright = document.querySelector('.contactright');


  function loadText (entries, obs){
    entries.forEach(function(entry){
      if(!entry.isIntersecting){
        return;
      }
      obs.unobserve(entry.target);

      entry.target.classList.add('popup');
    })
  }

  const options ={
    threshold:0.5,
  };

  const observer1 = new IntersectionObserver(loadText, options);


  for (let i = 0 ; i< targeth2.length; i++){
    observer1.observe(targeth2[i]);
  }
  observer1.observe(targethome);
  observer1.observe(targetabout);
  for (let i = 0 ; i< targetwork.length; i++){
    observer1.observe(targetwork[i]);
  }
  observer1.observe(targetform);
  observer1.observe(targetcontactright);

}