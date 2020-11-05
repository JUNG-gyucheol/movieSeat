/**
 * app.js
 */

/*

문제>
영화관 좌석예매 시스템

개요>
본 시스템은 영화관 좌석예매 시스템으로 사용자가 관람할 좌석을 GUI로 선택하거나 취소할수 있는 시스템이다.
좌석을 선택한 후 예약완료를 누르면 해당 자리는 선택이 불가능해야 한다.

필수 요구사항>
1. 좌석 선택(클릭) 시 선택된 항목은 기존 좌석과 다르게 표시되어야 한다.
2. 선택 된 좌석은 다시 클릭 시 선택 취소가 가능해야 한다.
3. 예약완료 시 선택된 좌석은 선택 불가능한 상태로 변경되어야 한다.

비고>
좌석정보 초기값( 0: 통로, 1: 예약가능 좌석, 2: 예약완료 좌석, 3: 선택불가 좌석)

*/

let seats = [
  [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
];
let app = document.getElementById("app");
let selectedSeats = [];

/**
 * onLoad
 */
const onLoad = () => {
  createSeats();
};

/**
 * 좌석생성
 */
const createSeats = () => {
  let container = document.createElement("div");
  let newSeat;
  app.innerHTML = "";

  container.classList.add("line");
  seats.map((seatRow, x) => {
    console.log(seatRow);
    seatRow.map((seat, y) => {
      console.log(seat);
      newSeat = document.createElement("div");

      /*
      enable : 예약 가능한 좌석
      disable : 예약 불가능 좌석
      seat === 1 이면 죄석가능한 좌석이고 
      나머지는 통로로 표시
      */

      if (seat === 1) {
        newSeat.classList.add("seat", "enable");
      } else {
        newSeat.classList.add("seat", "hallway");
      }
      newSeat.addEventListener("click", handleChangeSeatType);
      newSeat.data = { x, y, value: seat };
      container.appendChild(newSeat);
    });
  });
  app.appendChild(container);
};

/**
 * 좌석선택
 */
const handleChangeSeatType = (e) => {
  /* To do */
  if (e.target.classList[1] === "enable") {
    //클래스가 enable이면 enable라는 클래스를 제거 한 뒤 disable이라는 클래스를 추가해줍니다.
    e.target.classList.remove("enable");
    e.target.classList.add("disable");
  } else if (e.target.classList[1] === "disable") {
    //클래스가 disable이면 disable라는 클래스를 제거 한 뒤 enable이라는 클래스를 추가해줍니다.
    e.target.classList.remove("disable");
    e.target.classList.add("enable");
  }
};

/**
 * 예약완료
 */
const handleSoldout = () => {
  /* To do */
  console.log("예약버튼클릭");
  //클래스이름이 disable인것들을 배열로 해서 저장
  const choicedSeat = document.querySelectorAll(".disable");
  console.log(choicedSeat);
  //disable이라는 클래스가 없다면 죄석을 선택해달라는 경고창이 표시됩니다.
  if (choicedSeat.length === 0) {
    alert("좌석을 선택해주세요.");
  }
  //for문을 .disable인 클래스 이름을 지우고 soldout 클래스를 추가해줍니다.
  for (i = 0; i < choicedSeat.length; i++) {
    choicedSeat[i].classList.remove("disable");
    choicedSeat[i].classList.add("soldout");
  }
};
