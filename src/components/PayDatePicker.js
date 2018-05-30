import React from 'react'
import {DatePicker, List} from 'antd-mobile'

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
export default class PayDatePicker extends React.Component{
    state = {
        date: now,
    }
    render() {

        return (
            <DatePicker
                mode={"date"}
                title={"Select Date"}
                value={this.state.date}
                onChange={date => this.setState({ date })}
            ><List.Item arrow="horizontal">Datetime</List.Item></DatePicker>
        );
    }
}
