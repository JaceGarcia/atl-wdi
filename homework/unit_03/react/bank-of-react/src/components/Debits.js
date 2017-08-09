import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Debits extends Component {
    render() {



        return (

            <div>

                <h1>Debits</h1>

                Description:{this.props.description}

                <br />

                Amount:{this.props.amount}

                <br />

                Date:{this.props.date}


                <br />


            </div>
        );
    }
}


export default Debits;