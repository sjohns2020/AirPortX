import React from 'react'
import Footer from '../components/footer';
import Header from '../components/header';
import Main from '../components/main';

const Container = () => {

    //State
    //Fetch


    return (
        <div className="App">
            <Header />
            <main class="main">
                <Main />
            </main>
            <Footer />
        </div>
    );
}

export default Container;