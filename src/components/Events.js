import React from 'react';

import { Amplify } from 'aws-amplify';
import { Authenticator,useTheme,Heading, Text } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import './css/events.css';

import csv from './troopcalendar';
import csvParse from './generic/csvStringToArray';

import awsExports from '../aws-exports';
Amplify.configure(awsExports);

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

class Calendar extends React.Component {
  getTimeStamp(res) {
    const date = res.dtstart.split('"')[1].split('-');

    const year = date[0];
    const month = date[1];

    const dayTime = date[2].split('T');
    const day = dayTime[0];

    const time = dayTime[1].split(':');
    const hour = time[0];
    const minute = time[1];
    const second = time[2];

    return [year,month,day,hour,minute,second];
  }

  getEventsOnDay(idx) {
    let day = idx - this.state.firstDayOfMonth.getDay() + 1;
    if (day < 10) {day = '0' + day.toString();}

    let month = this.state.currentMonth + 1;
    if (month < 10) {month = '0' + month.toString();}

    const year = this.state.currentYear;
    const key = year + month + day;

    let events = this.data[key];

    if (events) {return events;}
    else {return [];}
  }

  getCalendarData() {
    const data = csvParse(csv);

    let dates = {};

    data.forEach((res, i) => {
      const [year,month,day,hour,minute,second] = this.getTimeStamp(res);
      const key = year.toString() + month.toString() + day.toString();

      if (!dates.hasOwnProperty(key)) {
        dates[key] = [res];
      } else {
        dates[key].push(res);
      };
    });

    return dates;
  }

  calculateDates() {
    let newState = this.state;
    newState.currentMonth = this.state.currentDate.getMonth();
    newState.currentMonthStr = monthNames[this.state.currentMonth];

    newState.currentYear = this.state.currentDate.getFullYear();

    newState.firstDayOfMonth = new Date(this.state.currentYear, this.state.currentMonth, 1);
    newState.lastDayOfMonth = new Date(this.state.currentYear, this.state.currentMonth + 1, 0);

    this.setState(newState);
  }

  addMonth(add) {
    const date = this.state.currentDate;
    let newState = this.state;
    newState.currentDate = new Date(date.setMonth(date.getMonth() + add));
    this.setState(newState);

    this.calculateDates();
  }

  constructor(props) {
    super(props);

    this.state = {};

    this.data = this.getCalendarData();

    this.state.currentDate = new Date();

    this.state.currentEvent = {};
    this.state.popupEnabled = false;

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

  loadPopup(event) {
    let newState = this.state;

    newState.popupEnabled = true;

    newState.currentEvent = event;

    this.setState(newState);
  }

  closePopup() {
    let newState = this.state;

    newState.popupEnabled = false;

    newState.currentEvent = {};

    this.setState(newState);
  }

  renderTableData(idx) {
    const events = this.getEventsOnDay(idx);
    let summary = "";

    if (events.length > 0) {
      summary = events[0].summary;
    }

    return (
      <td>
        <div className="events-day">
          <p>{this.getDayNum(idx)}</p>
          <h6 className="event-name" onClick={() => this.loadPopup(events[0])}>{summary}</h6>
        </div>
      </td>
    )
  }

  renderPopup() {
    if (this.state.popupEnabled) {
      let [year,month,day,hour,minute,second] = this.getTimeStamp(this.state.currentEvent);
      let m = "am"
      if (hour > 12) {hour -= 12; m = "pm";}

      let description = "";
      if (this.state.currentEvent.description !== undefined) {description = "Description: " + this.state.currentEvent.description}

      return (
        <div className="event-popup-container">
          <div className="event-popup">
            <div className="events-popup-content">
              <h1>{this.state.currentEvent.summary}</h1>
              <h2>Date: {month}/{day}/{year}</h2>
              <h2>Time: {hour}:{minute}{m}</h2>
              <h2>{description}</h2>
              <h2>Location: {this.state.currentEvent.location}</h2>
            </div>
            <button type="button" onClick={() => this.closePopup()} className="btn-close events-popup-close" aria-label="Close" />
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="container-fluid events-container">
        {this.renderPopup()}
        <div className="events-control-container">
          <span onClick={() => this.addMonth(-1)} className="events-control-btn carousel-control-prev-icon" />
          <h3 className="section-heading">Events for {this.state.currentMonthStr} {this.state.currentYear}</h3>
          <span onClick={() => this.addMonth(1)} className="events-control-btn carousel-control-next-icon" />
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
