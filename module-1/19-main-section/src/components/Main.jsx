/**
Challenge: Build the main section!

Skip 2 aspects of the design for now:
1. The colored bullets in the list
2. The larger React logo on the side

Those will be separate challenges coming up.
*/

export default function Main() {
  return (
    <div class="main-content">
      <h1 className="page-title">Fun facts about React</h1>

      <ul className="page-list">
        <li>Was first released in 2013</li>
        <li>Has well over 100k stars on GitHub</li>
        <li>Is maintained by Facebook</li>
      </ul>
    </div>
  )
}
