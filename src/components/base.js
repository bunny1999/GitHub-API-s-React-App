import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import '../App.css';
import Footer from './footer';
import Header from './header';

export default function Base(props) {
    return (
        <div className="App">
            <ToastContainer/>
            <Header/>   
            {props.children}   
            <Footer/>
        </div>
    )
}
