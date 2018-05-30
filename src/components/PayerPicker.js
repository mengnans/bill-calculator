import React from 'react'
import {List, Picker} from 'antd-mobile'

export default class PayerPicker extends React.Component {

    render() {
        return (
            <Picker data={this.props.users} cols={1} extra={"Select the payer"} okText={"Ok"} dismissText={"Cancel"}>
                <List.Item arrow="horizontal">Payer</List.Item>
            </Picker>
        );
    }
}
