import React, { Component } from 'react';
import Header from './Header';

class Info extends Component {
  constructor(){
    super();
    this.state={
      info:[]
    };
  }

  componentDidMount(){
    var event_id = parseInt(this.props.match.params.event_id);
    var url = 'https://cors.now.sh/https://api.smarkets.com/v3/events/?ids=' + event_id;
    console.log(event_id);
    var currentState = this;
    fetch(url)
   .then((resp) => resp.json()) // Transform the data into json
   .then(function(data) {
   console.log("data",data);
   currentState.setState({info: data.events[0]});
 })
}

  render(){
    let info = this.state.info;
    return (
     <div>
       <a href="/"><Header /></a>
       <div className="App-container">
          <ul className="list-group">
            <li className="list-group-item list-group-item-action">
             Event Details
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
             {info.name}
              <span class="badge badge-success">{info.state}</span>
             <span>{info.start_date}</span>
            </li>
          </ul>
        </div>
      </div>
      );
    }
 }

export default Info;
