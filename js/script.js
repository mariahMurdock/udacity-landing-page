  // const hrefList = ['#section1', '#section2', '#section3', '#section4'];
  // const textContentList = ['Section One', 'Section Two', 'Section Three', 'Section Four'];
  //
  // for (let i=0; i < hrefList.length; i++) {
  //   const navBarUl = document.querySelector('#navbar__list');
  //   const navLi = document.createElement('li');
  //   navBarUl.appendChild(navLi);
  //   const aTag = document.createElement('a');
  //   aTag.setAttribute('href', hrefList[i]);
  //   aTag.textContent = textContentList[i];
  //   navLi.appendChild(aTag);
  // }


  const hrefList = ['#section1', '#section2', '#section3', '#section4'];
  const textContentList = ['Section One', 'Section Two', 'Section Three', 'Section Four'];
  const classList = ['.class1', '.class2', '.class3', '.class4'];

  for (let i=0; i < hrefList.length; i++) {
    const navBarUl = document.querySelector('#navbar__list');
    const navLi = document.createElement('li');
    navBarUl.appendChild(navLi);
    const button = document.createElement('button');
    button.setAttribute('class', classList[i]);
    const aTag = document.createElement('a');
    aTag.setAttribute('href', hrefList[i]);
    aTag.textContent = textContentList[i];
    button.appendChild(aTag);
    navLi.appendChild(button);
  }
