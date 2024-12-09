// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './components/Home';

// const App = () => {
//     return (
//         <Router>
//             <Switch>
//                 <Route path="/" exact component={Home} />
//                 {/* Add more routes here */}
//             </Switch>
//         </Router>
//     );
// };

// export default App;

// src/App.js
import React from 'react';
import ProductList from './components/ProductList';
import './styles.css';

const App = () => {
    return (
        <div className="App">
            <header>
                <h1>Product Listing</h1>
            </header>
            <main>
                <ProductList />
            </main>
        </div>
    );
};

export default App;