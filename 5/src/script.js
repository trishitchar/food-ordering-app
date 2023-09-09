import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

 /**
            header
                -logo, 
                -nav items, 
            body
                -search bar, 
                -list of restaurants, 
                    -food items,
             footer
                -links
                -copyright
            
*/
const AppLayout= () =>{
    return (
        <>
            <Header />
            <Body/>
            <Footer/>

        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

// ReactDOM.render(<AppLayout/>, document.getElementById("root")); same as above
