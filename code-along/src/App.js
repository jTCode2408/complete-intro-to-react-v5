const Pet = () => {
    return React.createElement('div', {}, [
            React.createElement('h1', {}, 'Drogo'),
            React.createElement('h2', {}, 'Dog'),
            React.createElement('h2',{}, 'Aussie' ),
        ])
    
}
const App = ()=> {
return React.createElement( "div", {}, [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet),
            React.createElement(Pet),
            React.createElement(Pet)
        ]
    
)
};

ReactDom.render(React.createElement(App), document.getElementById('root')
);

