document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  
  
  const accordion = () => {
    const characteristicsTitle = document.querySelectorAll('.characteristics__title');
    const characteristicsDescription = document.querySelectorAll('.characteristics__description');

    characteristicsTitle.forEach((elem, i) => {
      elem.addEventListener('click', () => {
        elem.classList.toggle('active');
        characteristicsDescription[i].classList.toggle('active');
      });
    });
  };
  

  
  accordion();




  
});