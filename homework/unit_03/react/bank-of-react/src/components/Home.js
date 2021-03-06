import React, {Component} from 'react';
import AccountBalance from "./AccountBalence";
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
                <h1>Bank of React</h1>


                <AccountBalance accountBalance={this.props.accountBalance}/>
                <Link to="/userProfile">User Profile</Link>
                <Link to="/debits">Debit</Link>
            </div>

    );
    }
}

export default Home;
