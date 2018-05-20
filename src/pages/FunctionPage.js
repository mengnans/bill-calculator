import React from "react";
import "./FunctionPage.css"
import Footer from "../components/Footer";
import FunctionPane from "../components/FunctionPane"
import Header from "../components/Header";

class FunctionPage extends React.Component{

    render(){
        return(
            <div className={"FunctionPage"}>
                <Header/>
                <FunctionPane/>
                <Footer/>
            </div>
        );
    }
}

export default FunctionPage;