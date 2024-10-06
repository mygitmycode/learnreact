//const headingrjs = React.createElement("h1",{id:"heading"},"Hello From React JS");
//const rootrjs = ReactDOM.createRoot(document.getElementById("root"));
//rootrjs.render(headingrjs);

/**
 * 
 * div parent
 *  div child
 *          h1
 *          h2
 *  div child2
 *          h1
 *          h2
 */

const phead = React.createElement("div",{id:"parent"},[

    React.createElement("div",{id:"child"},
        [React.createElement("h1",{}, "I am h1 tag"),
        React.createElement("h2",{}, "I am h2 tag")]),
    
        React.createElement("div",{id:"child2   "},
            [React.createElement("h1",{}, "I am h1 tag"),
            React.createElement("h2",{}, "I am h2 tag")])

]);
const rootrjs = ReactDOM.createRoot(document.getElementById("root"));
rootrjs.render(phead);