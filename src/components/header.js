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

  //declaring the elements
  const header = document.createElement("div")
  const dateVar = document.createElement("span")
  const titleVar = document.createElement("h1")
  const tempVar = document.createElement("span")

  //setting up tree strucure
  header.appendChild(titleVar)
  header.appendChild(dateVar)
  header.appendChild(tempVar)

  //adding class names
  header.classList.add('header');
  dateVar.classList.add('date');
  tempVar.classList.add('temp');
  

  //text contents
  titleVar.textContent = `${ title }`
  dateVar.textContent =`${ date }`
  tempVar.textContent = `${ temp }`



  return header
}


const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const headerContainer = document.querySelector(selector)
  headerContainer.append(Header('Lambda Times', 'March 12, 2021', '43\u00B0'))
}

export { Header, headerAppender }
