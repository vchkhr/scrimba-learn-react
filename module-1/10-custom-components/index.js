/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list

Render your list to the page

 */


function List() {
  return (
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ol>
  )
}

ReactDOM.render(<List />, document.getElementById("root"))
