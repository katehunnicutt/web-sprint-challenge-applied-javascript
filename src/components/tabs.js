import axios from 'axios'

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

  //declaring the elements
  const topicsVar = document.createElement('div')
  const javascriptVar = document.createElement('div')
  const bootstrapVar = document.createElement('div')
  const technologyVar = document.createElement('div')
  const jqueryVar = document.createElement('div')
  const nodeVar = document.createElement('div')


  //setting tree structure
  topicsVar.appendChild(javascriptVar)
  topicsVar.appendChild(bootstrapVar)
  topicsVar.appendChild(technologyVar)
  topicsVar.appendChild(jqueryVar)
  topicsVar.appendChild(nodeVar)



  //class names
  topicsVar.classList.add('topics')
  javascriptVar.classList.add('tab')
  bootstrapVar.classList.add('tab')
  technologyVar.classList.add('tab')
  jqueryVar.classList.add('tab')
  nodeVar.classList.add('tab')


  //inplementing text
  javascriptVar.textContent = topics[0]
  bootstrapVar.textContent = topics[1]
  technologyVar.textContent = topics[2]
  jqueryVar.textContent = topics[3]
  nodeVar.textContent = topics[4]


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

  const tabContainer = document.querySelector(selector)
  axios
  .get("https://lambda-times-api.herokuapp.com/topics")
  .then((res) => {
    const topicsArray = res.data.topics
    tabContainer.append(Tabs(topicsArray))
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
}


export { Tabs, tabsAppender }
