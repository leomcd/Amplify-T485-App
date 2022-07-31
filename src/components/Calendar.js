import React from 'react';

import WithAuth from './generic/WithAuth';

import './css/calendar.css';

import csv from './troopcalendar';
import csvParse from './generic/csvStringToArray';

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

class CalendarDisplay extends React.Component {
  getTimeStamp(res) {
    const date = res.replace(/"/g,'').replace(/ /g,'').split('-');
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

  getCalendarOnDay(idx) {
    let day = idx - this.state.firstDayOfMonth.getDay() + 1;
    if (day < 10) {day = '0' + day.toString();}

    let month = this.state.currentMonth + 1;
    if (month < 10) {month = '0' + month.toString();}

    const year = this.state.currentYear;
    const key = year + month + day;

    let calendar = this.data[key];

    if (calendar) {return calendar;}
    else {return [];}
  }

  getCalendarData() {
    const data = csvParse(csv);

    let dates = {};

    data.forEach((res, i) => {
      const [year,month,day,hour,minute,second] = this.getTimeStamp(res.dtstart);
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
    const calendar = this.getCalendarOnDay(idx);
    let summary = "";

    if (calendar.length > 0) {
      summary = calendar[0].summary;
    }

    return (
      <td>
        <div className="calendar-day">
          <p>{this.getDayNum(idx)}</p>
          <h6 className="calendar-name" onClick={() => this.loadPopup(calendar[0])}>{summary}</h6>
        </div>
      </td>
    )
  }

  renderPopup() {
    if (this.state.popupEnabled) {
      let [year,month,day,hour,minute,second] = this.getTimeStamp(this.state.currentEvent.dtstart);
      let m = "am"
      if (hour > 12) {hour -= 12; m = "pm";}

      let descriptionTitle = "";
      let description = "";
      if (this.state.currentEvent.description !== undefined) {descriptionTitle = "Description: "; description = this.state.currentEvent.description;}

      let [endYear,endMonth,endDay,endHour,endMinute,endSecond] = this.getTimeStamp(this.state.currentEvent.dtend);
      let em = "am"
      if (endHour > 12) {endHour -= 12; em = "pm";}

      let endDateTitle = "";
      let endDate = "";
      let endTime = "";
      if (endYear !== year || endMonth !== month || endDay !== day) {
        endDateTitle = "End date: ";
        endDate = endMonth + "/" + endDay + "/" + endYear + " " + endHour + ":" + endMinute + em;
      } else if (endHour !== hour || endMinute !== minute || endSecond !== second || em !== em) {
        endTime = " - " + endHour + ":" + endMinute + em;
      }

      return (
        <div className="calendar-popup-container">
          <div className="calendar-popup">
            <div className="calendar-popup-content">
              <h1>{this.state.currentEvent.summary}</h1>
              <h2>Date: <p>{month}/{day}/{year}</p></h2>
              <h2>Time: <p>{hour}:{minute}{m}{endTime}</p></h2>
              <h2>{descriptionTitle}<p>{description}</p></h2>
              <h2>Location: <p>{this.state.currentEvent.location}</p></h2>
              <h2>{endDateTitle}<p>{endDate}</p></h2>
            </div>
            <button type="button" onClick={() => this.closePopup()} className="btn-close calendar-popup-close" aria-label="Close" />
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="container-fluid calendar-container">
        {this.renderPopup()}
        <div className="calendar-control-container">
          <span onClick={() => this.addMonth(-1)} className="calendar-control-btn carousel-control-prev-icon" />
          <h3 className="section-heading">Calendar for {this.state.currentMonthStr} {this.state.currentYear}</h3>
          <span onClick={() => this.addMonth(1)} className="calendar-control-btn carousel-control-next-icon" />
        </div>
        <table className="table calendar-table">
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

function Calendar() {
  return (
    <div className="container-fluid photo-section color-scheme-alt">
      <h3 className="section-heading">Calendar</h3>
      <WithAuth from="calendar">
        <div className="calendar">
          <br />
          <CalendarDisplay />
        </div>
      </WithAuth>
    </div>
  );
}

export default Calendar;
