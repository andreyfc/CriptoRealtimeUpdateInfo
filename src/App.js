import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props){
      super(props);
      this.state = {
        items: [],
        isLoaded: false,
    }
}

componentDidMount() {

    // set time to request new data
    var updateData = 2000

    var intervalId = setInterval(() => {
            
            fetch('https://www.bitstamp.net/api/ticker/')
            .then( res => res.json())
            .then( json => {
                this.setState({
                  isLoaded: true,
                  items: json,
                })
            });
    }, updateData);  
}

render() {

    var { isLoaded, items } = this.state;

    // Checks if data has been uploaded
    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    else {

        return (
            <div className="App">
                <div class="container">
                    <table class="table">
                        <thead>
                            <th colspan="2"><h1>Bitcoin Price In Real Time.</h1></th>
                            <tr>
                                <td> Last: {items.last} </td>
                            </tr>
                            <tr>
                                <td> High: {items.high} </td>
                            </tr>
                            <tr>
                                <td> Open: {items.open} </td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        );
    }

}
}

export default App;
