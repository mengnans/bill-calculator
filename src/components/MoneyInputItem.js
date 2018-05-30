import React from 'react'
import {InputItem} from 'antd-mobile'

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
    moneyKeyboardWrapProps = {
        onTouchStart: e => e.preventDefault(),
    };
}

export default class MoneyInputItem extends React.Component{

    render() {
        return (
            <InputItem
                placeholder="0.00"
                extra="$"
                type={"money"}
                clear
                moneyKeyboardAlign={"right"}
                moneyKeyboardWrapProps={moneyKeyboardWrapProps}
            >Total</InputItem>
        );
    }
}
