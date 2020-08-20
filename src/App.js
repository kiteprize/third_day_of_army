import React from "react";
import "./styles.css";
import Clock from "react-live-clock";
import Moment from "moment";

const fin_day = { year: 2021, month: 10, day: 5 };

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Clock
            format={"현재 YYYY년 MM월 DD일 HH시 mm분 ss초"}
            ticking={true}
          />
        </h1>
        <h1>
          전역일 {fin_day.year}년 {fin_day.month}월 {fin_day.day}일 09시
        </h1>
      </div>
    );
  }
}
export default MyComponent;
