import React from 'react';

import csvStringToArray from './generic/csvStringToArray';

import { Amplify } from 'aws-amplify';
import { Authenticator,useTheme,Heading, Text } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import './css/events.css';

import ics from './troopcalendar';

import awsExports from '../aws-exports';
Amplify.configure(awsExports);

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

class TableData extends React.Component {
  
}

class Calendar extends React.Component {
  calculateDates() {
    this.state.currentMonth = this.state.currentDate.getMonth();
    this.state.currentMonthStr = monthNames[this.state.currentMonth];

    this.state.currentYear = this.state.currentDate.getFullYear();

    this.state.firstDayOfMonth = new Date(this.state.currentYear, this.state.currentMonth, 1);
    this.state.lastDayOfMonth = new Date(this.state.currentYear, this.state.currentMonth + 1, 0);

    this.render();
  }

  addMonth() {
    const date = this.state.currentDate
    this.state.currentDate = new Date(date.setMonth(date.getMonth()+1));

    this.calculateDates();

    console.log("hello");
  }

  removeMonth() {
    const date = this.state.currentDate
    this.state.currentDate = new Date(date.setMonth(date.getMonth()-1));

    this.calculateDates();
  }

  constructor(props) {
    super(props);

    this.state = {};

    this.state.currentDate = new Date();

    this.calculateDates();
  }

  getDayNum(day) {
    const res = day - this.state.firstDayOfMonth.getDay() + 1;
    if (res <= 0 || res > this.state.lastDayOfMonth.getDate()) {
      return;
    }
    else {
      return res;
    }
  }

  renderTableData(idx) {
    return (
      <td>
        <div className="events-day">
          <p>{this.getDayNum(idx)}</p>
        </div>
      </td>
    )
  }

  render() {
    return (
      <div className="container-fluid events-container">
        <div className="events-control-container">
          <button onClick={() => this.addMonth()}>&#8592;</button>
          <h3 className="section-heading">Events for {this.state.currentMonthStr} {this.state.currentYear}</h3>
          <button onClick={() => this.addMonth()}>&#8594;</button>
        </div>
        <table className="table events-table">
          <thead>
            <tr>
              <th scope="col">Sunday</th>
              <th scope="col">Monday</th>
              <th scope="col">Tuesday</th>
              <th scope="col">Wednesday</th>
              <th scope="col">Thursday</th>
              <th scope="col">Friday</th>
              <th scope="col">Saturday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {this.renderTableData(0)}
              {this.renderTableData(1)}
              {this.renderTableData(2)}
              {this.renderTableData(3)}
              {this.renderTableData(4)}
              {this.renderTableData(5)}
              {this.renderTableData(6)}
            </tr>
            <tr>
              {this.renderTableData(7)}
              {this.renderTableData(8)}
              {this.renderTableData(9)}
              {this.renderTableData(10)}
              {this.renderTableData(11)}
              {this.renderTableData(12)}
              {this.renderTableData(13)}
            </tr>
            <tr>
              {this.renderTableData(14)}
              {this.renderTableData(15)}
              {this.renderTableData(16)}
              {this.renderTableData(17)}
              {this.renderTableData(18)}
              {this.renderTableData(19)}
              {this.renderTableData(20)}
            </tr>
            <tr>
              {this.renderTableData(21)}
              {this.renderTableData(22)}
              {this.renderTableData(23)}
              {this.renderTableData(24)}
              {this.renderTableData(25)}
              {this.renderTableData(26)}
              {this.renderTableData(27)}
            </tr>
            <tr>
              {this.renderTableData(28)}
              {this.renderTableData(29)}
              {this.renderTableData(30)}
              {this.renderTableData(31)}
              {this.renderTableData(32)}
              {this.renderTableData(33)}
              {this.renderTableData(34)}
            </tr>
            <tr>
              {this.renderTableData(35)}
              {this.renderTableData(36)}
              {this.renderTableData(37)}
              {this.renderTableData(38)}
              {this.renderTableData(39)}
              {this.renderTableData(40)}
              {this.renderTableData(41)}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

function Events() {
  return (
    <div className="container-fluid photo-section color-scheme-alt">
      <h3 className="section-heading">Events</h3>
      <Authenticator hideSignUp={true}>
        {({ signOut, user }) => (
          <>
            <button onClick={signOut}>Sign out</button>
            <div className="events">
              <br />
              <Calendar />
            </div>
          </>
        )}
      </Authenticator>
    </div>
  );
}

export default Events;
