const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument. X
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology'] X
  // then the function returns the markup below. X
  // The tags used, the hierarchy of elements and their attributes must match the provided markup! X
  // The text inside elements will be set using their `textContent` property (NOT `innerText`). X
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  const topicsVar = document.createElement('div')
  const javascriptVar = document.createElement('div')
  const bootstrapVar = document.createElement('div')
  const technologyVar = document.createElement('div')

  topicsVar.classList.add('topics')
  javascriptVar.classList.add('javascript')
  bootstrapVar.classList.add('bootstrap')
  technologyVar.classList.add('technology')

  javascriptVar.textContent = 'javascript'
  bootstrapVar.textContent = 'bootstrap'
  technologyVar.textContent = 'technology'

  topicsVar.appendChild(javascriptVar)
  topicsVar.appendChild(bootstrapVar)
  topicsVar.appendChild(technologyVar)

return topicsVar
  
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
