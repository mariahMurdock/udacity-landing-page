  const hrefList = ['#section1', '#section2', '#section3', '#section4'];
  const textContentList = ['Section One', 'Section Two', 'Section Three', 'Section Four'];

  for (let i=0; i < hrefList.length; i++) {
    const navBarUl = document.querySelector('#navbar__list');
    const navLi = document.createElement('li');
    navBarUl.appendChild(navLi);
    const aTag = document.createElement('a');
    aTag.setAttribute('href', hrefList[i]);
    aTag.textContent = textContentList[i];
    navLi.appendChild(aTag);
  }
