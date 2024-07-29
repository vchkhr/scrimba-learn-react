Quiz!

1. What is a React component?

A function that can returns React object


2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

It should be named as MyComponent()


3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
```

The last line should be `ReactDOM.render(<Header />, document.getElementById("root"))`
