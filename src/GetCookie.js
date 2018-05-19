import React from 'react'
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

export default class GetCookie extends React.Component{
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    componentWillMount() {
        const { cookies } = this.props;

        this.state = {
            name: cookies.get('name') || 'Ben'
        };
    }

    handleNameChange(name) {
        const { cookies } = this.props;

        cookies.set('name', name, { path: '/' });
        this.setState({ name });
    }

    render(){

        const { cookies } = this.props;
        this.state = {
            name: cookies.get('name') || 'Ben'
        };
        return(

            <div>
                {this.state.name}
            </div>
        );
    }
}