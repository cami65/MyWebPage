const conts = [ 
    { 
      id: 1, 
      conttext1: '2,500', 
      conttext2: `Homes For Sale`
    }, { 
        id: 2, 
        conttext1: '5,000+', 
        conttext2: `Homes Recently Sold`
      },
      { 
        id: 3, 
        conttext1: '170+', 
        conttext2: `Price Reduced`
      },  
      { 
        id: 1, 
        conttext1: '2,500', 
        conttext2: `Homes For Sale`
      }, { 
          id: 2, 
          conttext1: '5,000+', 
          conttext2: `Homes Recently Sold`
        },
        { 
          id: 3, 
          conttext1: '170+', 
          conttext2: `Price Reduced`
        }
  ]; 
   
  const contsContainer = document.querySelector('.smallcont2'); 
   
  for (const cont of conts) { 
    renderCont(cont); 
  } 
   
  function renderCont(cont) { 
    const num = document.createElement('div'); 
    contsContainer.appendChild(num); 
    num.outerHTML = getContMarkup(cont); 
  } 
   
  function getContMarkup(cont) { 
    return ` 
      <div class="smallcont211"> 
        <p class="conttext1">${cont.conttext1}</p> 
        <p class="conttext2">${cont.conttext2} </p> 
      </div> 
    `; 
  } 



  let currentSlideNumber = 0; 
  const firstCard = document.querySelector('.smallcont211:first-child'); 
  const leftButton = document.querySelector('.carousel-button.left'); 
  const rightButton = document.querySelector('.carousel-button.right'); 
   
  function handleCarouselButtonClick(direction) { 
    currentSlideNumber += direction; 
    const margin = -411 * currentSlideNumber; 
    firstCard.style.marginLeft = `${margin}px`; 
   
    if(currentSlideNumber === 0) { 
      leftButton.setAttribute('disabled', true); 
    } else { 
      leftButton.removeAttribute('disabled'); 
    } 
   
    if(currentSlideNumber === conts.length - 3) { 
      rightButton.setAttribute('disabled', true); 
    } else { 
      rightButton.removeAttribute('disabled'); 
    } 
  } 

  