import React from "react";
import Clock from "react-live-clock";

timeBefore();
function timeBefore() {
  //현재시간을 가져옴
  var now = new Date();

  //글쓴 시간
  var writeDay = new Date("Thu Jun 20 2019 15:01:17 GMT+0900");
  //또는 파라미터로 시간을 넘겨받아서 계산할 수도 있음..

  var minus;
  //현재 년도랑 글쓴시간의 년도 비교
  if (now.getFullYear() > writeDay.getFullYear()) {
    minus = now.getFullYear() - writeDay.getFullYear();
    //두개의 차이를 구해서 표시
    document.getElementsByClassName("sub")[0].innerHTML = minus + "년 전";
    console.log(minus + "년 전");
  } else if (now.getMonth() > writeDay.getMonth()) {
    //년도가 같을 경우 달을 비교해서 출력
    minus = now.getMonth() - writeDay.getMonth();
    document.getElementsByClassName("sub")[0].innerHTML = minus + "달 전";
    console.log(minus + "달 전");
  } else if (now.getDate() > writeDay.getDate()) {
    //같은 달일 경우 일을 계산
    minus = now.getDate() - writeDay.getDate();
    document.getElementsByClassName("sub")[0].innerHTML = minus + "일 전";
    console.log(minus + "일 전");
  } else if (now.getDate() == writeDay.getDate()) {
    //당일인 경우에는
    var nowTime = now.getTime();
    var writeTime = writeDay.getTime();
    if (nowTime > writeTime) {
      //시간을 비교
      sec = parseInt(nowTime - writeTime) / 1000;
      day = parseInt(sec / 60 / 60 / 24);
      sec = sec - day * 60 * 60 * 24;
      hour = parseInt(sec / 60 / 60);
      sec = sec - hour * 60 * 60;
      min = parseInt(sec / 60);
      sec = parseInt(sec - min * 60);
      if (hour > 0) {
        //몇시간전인지
        document.getElementsByClassName("sub")[0].innerHTML = hour + "시간 전";
        console.log(hour + "시간 전");
      } else if (min > 0) {
        //몇분전인지
        document.getElementsByClassName("sub")[0].innerHTML = min + "분 전";
        console.log(min + "분 전");
      } else if (sec > 0) {
        //몇초전인지 계산
        document.getElementsByClassName("sub")[0].innerHTML = sec + "초 전";
        console.log(sec + "초 전");
      }
    }
  }
}
