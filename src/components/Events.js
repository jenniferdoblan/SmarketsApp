import React, { Component } from 'react';

class Events extends Component {
  constructor(){
    super();
    this.state={
      popular_events:[]
    };
  }

  componentDidMount(){
    var url = 'https://cors.now.sh/https://fe-api.smarkets.com/v0/events/popular/'
    var currentState = this;
    fetch(url)
   .then((resp) => resp.json()) // Transform the data into json
   .then(function(data) {
   console.log("data",data);
   currentState.setState({popular_events: data.results});
 })
}

  render(){
    var popular_events = this.state.popular_events;
    return (
      <div className="App-container">
         <ul className="list-group">
           {popular_events.map(current =>
            <a key={current.id} href= {'/event/' + current.id} className="list-group-item list-group-item-action">{current.name}</a>
           )}
         </ul>
      </div>
    );
  }
}

export default Events;
