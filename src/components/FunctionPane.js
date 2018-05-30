import React from 'react';
import "./FunctionPane.css"
import PayerPicker from "./PayerPicker";
import { WhiteSpace } from 'antd-mobile';
import MoneyInputItem from "./MoneyInputItem";
import PayDatePicker from "./PayDatePicker";

export default class FunctionPane extends React.Component {

    users = [
        {
            label: "Mengnan",
            value: "Mengnan"
        },
        {
            label: "Colin",
            value: "Colin"
        },
    ]

    render() {
        return (
            <div className={"FunctionPane"}>
                <h2>Main Function pane</h2>
                <WhiteSpace size="lg" />
                <PayDatePicker/>
                <WhiteSpace size="sm" />
                <PayerPicker users={this.users}/>
                <WhiteSpace size="sm" />
                <MoneyInputItem/>
                <WhiteSpace size="sm" />

            </div>
        );
    }
}
