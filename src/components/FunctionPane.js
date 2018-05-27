import React from 'react';
import "./FunctionPane.css"
import AutoComplete from "./AutoComplete";

export default class FunctionPane extends React.Component {
    dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street'];

    render() {
        return (
            <div className={"FunctionPane"}>
                <h2>Main Function pane</h2>
                <AutoComplete dataSource={this.dataSource}/>
            </div>
        );
    }
}
