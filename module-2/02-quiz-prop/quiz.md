1. What do props help us accomplish?

Insert data to components.

2. How do you pass a prop into a component?

Via function parameters.

3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
   
No, since it's not HTML attribute.

4. How do I receive props in a component?
function Navbar() {
    return (
        <header>
            ...
        </header>
    )
}

```
function Navbar(props) {
    return (
        <header>
            {props.title}
        </header>
    )
}
```

5. What data type is `props` when the component receives it?

JavaScript Object.
