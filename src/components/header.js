const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below. X
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly! X
  // The text inside elements will be set using their `textContent` property (NOT `innerText`). X
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const header = document.createElement('div')
  const dateVar = document.createElement('span')
  const titleVar = document.createElement('h1')
  const tempVar = document.createElement('span')


  header.classList.add('header');
  dateVar.classList.add('date');
  tempVar.classList.add('temp');
  

  //header.textContent = header;
  titleVar.textContent = `${ title }`
  dateVar.textContent =`${ date }`
  tempVar.textContent = `${ temp }`

  header.appendChild(titleVar)
  header.appendChild(dateVar)
  header.appendChild(tempVar)

  return header
}


const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
