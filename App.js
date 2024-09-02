// const heading = React.createElement("h1", {
//     id: "heading",
// }, "Hello World from React");
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// Creating Nested Eleemnt in React

const parent = React.createElement(
    "div", 
    {id: "parent"},
    React.createElement(
        "div", 
        {id: "child",}, 
        [React.createElement(
            "h1",
            {
                id: "heading",
                key: 1 // to get rid off each child must have a unique key prop
            },
            "I am Heading 1"
        ),
        React.createElement(
            "h2",
            {
                id: "heading",
                key: 2 // to get rid off each child must have a unique key prop
            },
            "I am Heading 2"
        )
    ]));

const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(parent);
 console.log(parent)

 // for same level of hierarchy pass all elements as Arrays