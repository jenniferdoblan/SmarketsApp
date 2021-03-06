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
       <div className="Event-container Event-container-width">
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div className="col-sm-6">
               <span>Event</span>
              </div>
              <div className="col-sm-3">
               <span>Status</span>
               </div>
               <div className="col-sm-3">
              <span>Date</span>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <div className="col-sm-6">
                <span>{info.name}</span>
              </div>
              <div className="col-sm-3">
                <span className="badge badge-success">{info.state}</span>
              </div>
              <div className="col-sm-3">
                <span className="badge badge-default">{info.start_date}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      );
    }
 }

export default Info;
