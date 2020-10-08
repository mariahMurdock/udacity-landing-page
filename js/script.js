  // Build Dynamic Navbar
  const hrefList = ['#section1', '#section2', '#section3', '#section4'];
  const textContentList = ['Section One', 'Section Two', 'Section Three', 'Section Four'];
  const classList = ['btn', 'btn', 'btn', 'btn'];

  for (let i = 0; i < hrefList.length; i++) {
    // grab navbar ul id from HTML
    const navBarUl = document.querySelector('#navbar__list');
    //  create li
    const navLi = document.createElement('li');
    //  append li to ul in hTML
    navBarUl.appendChild(navLi);
    // create button
    const button = document.createElement('button');
    // set button class attribute in HTML
    button.setAttribute('class', classList[i]);
    // create anchor tag
    const aTag = document.createElement('a');
    // set anchor tag href attribute in HTML
    aTag.setAttribute('href', hrefList[i]);
    // add text content to anchor tags
    aTag.textContent = textContentList[i];
    // place anchor tag inside of button
    button.appendChild(aTag);
    // place button inside of li
    navLi.appendChild(button);
  }

  // Add Highlight To Navbar
  // grab all btn class elements
  let allElements = document.getElementsByClassName('btn');
  // loop through all btn class elements
  for (let i = 0; i < allElements.length; i++) {
    // add event listener while iterating through btn class elements
    allElements[i].addEventListener('click', function() {
      // if any, remove all active classes
      let currentElements = document.getElementsByClassName('active');
      // grab active class
      if (currentElements.length > 0) {
        // replace active class with empty string
        currentElements[0].className = currentElements[0].className.replace(' active', '');
      }
      // replace className with active
      this.className += ' active';
    });
  }
