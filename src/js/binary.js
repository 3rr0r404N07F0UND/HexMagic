class BinaryCalculator {
  //! 필드 ES13 부터 지원 중이나 정식 지원단계가 아님
  constructor() {
    this.p_takeInputValue = 0;
    this.p_takeInputBinary = 0;
    this.p_outputValue = 0;
    this.p_outputBinary = 0;
    this.p_takeInputValueToBinary10 = 0;
  }
  set setTakeInputBinary(takeInputBinary) {
    this.p_takeInputBinary = takeInputBinary;
  }
  set setTakeInputValue(takeInputValue) {
    this.p_takeInputValue = takeInputValue;
  }
  get getTakeInputValue() {
    if (this.p_takeInputValue != "") {
      return this.p_takeInputValue;
    }
  }
  get getTakeInputValueToBinary10() {
    return this.p_takeInputValueToBinary10;
  }
  set setTakeInputValueToBinary10(takeInputValueToBinary10) {
    this.p_takeInputValueToBinary10 = takeInputValueToBinary10;
  }
  set setOutputValue(outputValue) {
    this.p_outputValue = outputValue;
  }
  get getOutputValue() {
    if (this.p_outputValue != "") {
      return this.p_outputValue;
    } else {
      return "숫자를 입력하세요.";
    }
  }
  fingerPrintTouch() {
    let i = 0;
    setInterval(() => {
      i % 2 == 0 &&
        $("#fingerPrint")
          .css("text-shadow", "0 0 20px #51ff0d")
          .css("color", "yellow");
      i % 2 == 1 &&
        $("#fingerPrint")
          .css("text-shadow", "0 0 0px #51ff0d")
          .css("color", "white");
      i++;
    }, 2000);
    $("#fingerPrint").on("click", () => {
      $("#fingerPrint").css("display", "none");
      setTimeout(() => {
        setInterval(() => {
          let timeToolin = new Date();
          let timeHour = String(timeToolin.getHours());
          let timemin = String(timeToolin.getMinutes());
          let timesec = String(timeToolin.getSeconds());
          timesec.length == 1 && (timesec = "0" + timesec);
          timeHour.length == 1 && (timeHour = "0" + timeHour);
          timemin.length == 1 && (timemin = "0" + timemin);
          $(".timeTool").html(`${timeHour} : ${timemin} : ${timesec}`);
        }, 1000);
        $("main *").css("visibility", "visible").css("opacity", "1");
        $(".loading").css("opacity", "0");
        //$("main")
        //  .css("background", "url(../img/zard.png)")
        //  .css("background-size", "cover")
        //  .css("background-repeat", "no-repeat");
      });
    });
  }
  windowClick() {
    $("i").on("click", () => {
      $(".alert").css("display", "none") &&
        $("#inputNumberSection").prop("disabled", false);
    });
    $(".alertButton").on("click", () => {
      $(".alert").css("display", "none") &&
        $("#inputNumberSection").prop("disabled", false);
    });
  }
  inputValLength() {
    $("#inputNumberSection").val().length > 5 &&
      $("#inputNumberSection").prop("disabled", true) &&
      $(".alert").css("display", "block") &&
      $("#inputNumberSection").val("");
  }
  switchAlpha(rememberNumber) {
    let numberToAlpha = "";
    switch (rememberNumber) {
      case 10:
        numberToAlpha = "a";
        break;
      case 11:
        numberToAlpha = "b";
        break;
      case 12:
        numberToAlpha = "c";
        break;
      case 13:
        numberToAlpha = "d";
        break;
      case 14:
        numberToAlpha = "e";
        break;
      case 15:
        numberToAlpha = "f";
        break;
      default:
        numberToAlpha = rememberNumber;
        break;
    }
    return numberToAlpha;
  }
  firstButtonEvent(binaryNumber, regex) {
    this.p_regex0 = /^[0]/;
    $("#inputNumberSection").off();
    $("#inputNumberSection").attr("disabled", false);
    this.setTakeInputBinary = binaryNumber;
    //$("#inputNumberSection").val("");
    $("#inputNumberSection").val(
      $("#inputNumberSection").val().replace(regex, "")
    );
    $("#inputNumberSection").val(
      $("#inputNumberSection").val().replace(this.p_regex0, "")
    );
    //console.log(this.p_takeInputBinary);
    //$(".firstButton").attr("disabled", true);
    $("#inputNumberSection").on("keyup", () => {
      //regex.test($("#inputNumberSection").val()) == false &&
      //$("#inputNumberSection").val("");
      $("#inputNumberSection").val(
        $("#inputNumberSection").val().replace(regex, "")
      );
      $("#inputNumberSection").val(
        $("#inputNumberSection").val().replace(this.p_regex0, "")
      );
      this.inputValLength();
    });
  }
  eventWatcherInput() {
    this.p_regex2 = /[^01]/g;
    this.p_regex8 = /[^0-7]/g;
    this.p_regex10 = /[^0-9]/g;
    this.p_regex16 = /[^0-9a-fA-F]/g;
    $(".firstButton").on("click", () => {
      $(".firstButton").css("background-color", "white");
    });
    //* 버튼 누르면 입력 가능, 입력 불가능한 숫자 입력하면 초기화
    $("#jinsu2ButtonFirst").on("click", () => {
      $("#jinsu2ButtonFirst").css("background-color", "#48bfe3");
      this.firstButtonEvent("2", this.p_regex2);
    });
    $("#jinsu8ButtonFirst").on("click", () => {
      $("#jinsu8ButtonFirst").css("background-color", "#48bfe3");
      this.firstButtonEvent("8", this.p_regex8);
    });
    $("#jinsu10ButtonFirst").on("click", () => {
      $("#jinsu10ButtonFirst").css("background-color", "#48bfe3");
      this.firstButtonEvent("10", this.p_regex10);
    });
    $("#jinsu16ButtonFirst").on("click", () => {
      $("#jinsu16ButtonFirst").css("background-color", "#48bfe3");
      this.firstButtonEvent("16", this.p_regex16);
    });
  }
  eventWatcherOutput() {
    $(".outputButton").on("click", () => {
      this.setTakeInputValue = $("#inputNumberSection").val();
      this.inputNumberToDecimal();
      $(".outputButton").css("backgroundColor", "white");
      //this.event16To10();
      //console.log(this.getTakeInputValueToBinary10);
      //console.log(this.event16To10());
      //console.log(this.getTakeInputValue);
      //console.log(this.p_takeInputValue);
    });
    $("#jinsu2ButtonSecond").on("click", () => {
      $("#jinsu2ButtonSecond").css("background-color", "yellow");
      this.setOutputValue = this.event10To2();
      //$("main").css("min-width", "90vw");
      $("output").html("").css("opacity", "0");
      $(".loading").css("opacity", "1");
      setTimeout(() => {
        $(".loading").css("opacity", "0");
        setTimeout(() => {
          $("output").html(this.getOutputValue).css("opacity", "1");
        }, 200);
      }, 1000);
    });
    $("#jinsu8ButtonSecond").on("click", () => {
      $("#jinsu8ButtonSecond").css("background-color", "yellow");
      this.setOutputValue = this.event10To8();
      //$("main").css("min-width", "90vw");
      $("output").html("").css("opacity", "0");
      $(".loading").css("opacity", "1");
      setTimeout(() => {
        $(".loading").css("opacity", "0");
        setTimeout(() => {
          $("output").html(this.getOutputValue).css("opacity", "1");
        }, 200);
      }, 1000);
    });
    $("#jinsu10ButtonSecond").on("click", () => {
      $("#jinsu10ButtonSecond").css("background-color", "yellow");
      this.setOutputValue = this.getTakeInputValueToBinary10;
      //$("main").css("min-width", "90vw");
      $("output").html("").css("opacity", "0");
      $(".loading").css("opacity", "1");
      setTimeout(() => {
        $(".loading").css("opacity", "0");
        setTimeout(() => {
          $("output").html(this.getOutputValue).css("opacity", "1");
        }, 200);
      }, 1000);
    });
    $("#jinsu16ButtonSecond").on("click", () => {
      $("#jinsu16ButtonSecond").css("background-color", "yellow");
      this.setOutputValue = this.event10To16();
      //$("main").css("min-width", "90vw");
      $("output").html("").css("opacity", "0");
      $(".loading").css("opacity", "1");
      setTimeout(() => {
        $(".loading").css("opacity", "0");
        setTimeout(() => {
          $("output").html(this.getOutputValue).css("opacity", "1");
        }, 200);
      }, 1000);
    });
  }
  //* 10진수를 16진수로 바꿔주는 기능
  event10To16() {
    let tenToSixteen = "";
    let rememberNumber = this.getTakeInputValueToBinary10;
    //console.log(rememberNumber);
    let i = 0;
    while (i == 0) {
      let numberToAlpha = "";
      let numberToAlphaRest = "";
      if (rememberNumber / 16 < 16 && rememberNumber / 16 > 0) {
        numberToAlpha = this.switchAlpha(Math.floor(rememberNumber / 16));
        numberToAlphaRest = this.switchAlpha(Math.floor(rememberNumber % 16));
        numberToAlpha != 0 &&
          (tenToSixteen = numberToAlpha + (numberToAlphaRest + tenToSixteen));
        numberToAlpha == 0 && (tenToSixteen = numberToAlphaRest + tenToSixteen);
        i = 2;
      } else if (rememberNumber / 16 > 15) {
        numberToAlphaRest = this.switchAlpha(rememberNumber % 16);
        tenToSixteen = numberToAlphaRest + tenToSixteen;
        rememberNumber = Math.floor(rememberNumber / 16);
      } else if (rememberNumber / 16 < 16 && rememberNumber / 16 < 0) {
        tenToSixteen = this.switchAlpha(rememberNumber);
        i = 2;
      } else if (rememberNumber == 0 || rememberNumber == undefined) {
        i = 2;
      }
      //console.log(rememberNumber);
      //console.log(tenToTwo);
    }
    return tenToSixteen;
  }
  //* 10진수를 2진수로 바꿔주는 기능
  event10To2() {
    let tenToTwo = "";
    let rememberNumber = this.getTakeInputValueToBinary10;
    //console.log(rememberNumber);
    let i = 0;
    while (i == 0) {
      if (rememberNumber / 2 < 2 && rememberNumber > 0) {
        tenToTwo =
          Math.floor(rememberNumber / 2) + ((rememberNumber % 2) + tenToTwo);
        i = 2;
      } else if (rememberNumber / 2 > 2) {
        tenToTwo = (rememberNumber % 2) + tenToTwo;
        rememberNumber = Math.floor(rememberNumber / 2);
      } else if (rememberNumber == 0) {
        i = 2;
      } else if (rememberNumber / 2 == 2) {
        tenToTwo = (rememberNumber % 2) + tenToTwo;
        rememberNumber = Math.floor(rememberNumber / 2);
      } else if (rememberNumber == undefined) {
        i = 2;
      }
      //if (rememberNumber / 2 == 1) {
      //  tenToTwo = "10" + tenToTwo;
      //  i = 2;
      //} else if (rememberNumber / 2 != 1 && rememberNumber / 2 > 0) {
      //  tenToTwo = tenToTwo + (rememberNumber % 2);
      //  rememberNumber = Math.floor(rememberNumber / 2);
      //} else {
      //  i = 2;
      //}
      //console.log(rememberNumber);
      //console.log(tenToTwo);
    }
    return tenToTwo;
  }
  //* 10진수를 8진수로 바꿔주는 기능
  event10To8() {
    let tenToEight = "";
    let rememberNumber = this.getTakeInputValueToBinary10;
    //console.log(rememberNumber);
    let i = 0;
    while (i == 0) {
      if (rememberNumber > 7) {
        if (rememberNumber / 8 < 8) {
          tenToEight =
            Math.floor(rememberNumber / 8) +
            ((rememberNumber % 8) + tenToEight);
          i = 2;
        } else if (rememberNumber / 8 > 0) {
          tenToEight = (rememberNumber % 8) + tenToEight;
          rememberNumber = Math.floor(rememberNumber / 8);
        }
      } else {
        tenToEight = rememberNumber;
        i = 2;
      }
    }
    return tenToEight;
  }
  //* 10진수를 10진수로 바꿔주는 기능
  //event10To10() {
  //  if (
  //    this.setTakeInputValue != 0 &&
  //    this.setTakeInputValue != "" &&
  //    this.setTakeInputValue != undefined &&
  //    this.setTakeInputValue != null
  //  ) {
  //    this.setTakeInputValueToBinary10 = this.setTakeInputValue;
  //  }
  //}
  //* 10진수로 바꾸어주는 기능
  inputNumberToDecimal() {
    switch (this.p_takeInputBinary) {
      case "2":
        this.event2To10();
        break;
      case "8":
        this.event8To10();
        break;
      case "10":
        this.setTakeInputValueToBinary10 = this.getTakeInputValue;
        break;
      case "16":
        this.event16To10();
        break;
    }
  }
  //* 2진수를 10진수로 바꿔주는 식
  event2To10() {
    let twoToTen = 0;
    if (
      this.getTakeInputValue != 0 &&
      this.getTakeInputValue != "" &&
      this.getTakeInputValue != undefined
    ) {
      for (let i = 0; i < this.getTakeInputValue.length; i++) {
        if (
          this.getTakeInputValue[this.getTakeInputValue.length - i - 1] == 1
        ) {
          twoToTen +=
            this.getTakeInputValue[this.getTakeInputValue.length - i - 1] *
            2 ** i;
        }
      }
    }
    this.setTakeInputValueToBinary10 = twoToTen;
  }
  //* 8진수를 10진수로 바꿔주는 식
  event8To10() {
    let eightToTen = 0;
    if (
      this.getTakeInputValue != 0 &&
      this.getTakeInputValue != "" &&
      this.getTakeInputValue != undefined
    ) {
      for (let i = 0; i < this.getTakeInputValue.length; i++) {
        if (
          this.getTakeInputValue[this.getTakeInputValue.length - i - 1] != 0
        ) {
          eightToTen +=
            this.getTakeInputValue[this.getTakeInputValue.length - i - 1] *
            8 ** i;
        }
      }
    }
    this.setTakeInputValueToBinary10 = eightToTen;
  }
  //* 16진수를 10진수로 바꿔주는 식
  event16To10() {
    let sixteenToTen = 0;
    if (
      this.getTakeInputValue != 0 &&
      this.getTakeInputValue != "" &&
      this.getTakeInputValue != undefined
    ) {
      for (let i = 0; i < this.getTakeInputValue.length; i++) {
        if (
          /^[a-fA-F]$/.test(
            this.getTakeInputValue[this.getTakeInputValue.length - i - 1]
          )
        ) {
          switch (
            this.getTakeInputValue[this.getTakeInputValue.length - i - 1]
          ) {
            case "a":
              sixteenToTen += 10 * 16 ** i;
              break;
            case "b":
              sixteenToTen += 11 * 16 ** i;
              break;
            case "c":
              sixteenToTen += 12 * 16 ** i;
              break;
            case "d":
              sixteenToTen += 13 * 16 ** i;
              break;
            case "e":
              sixteenToTen += 14 * 16 ** i;
              break;
            case "f":
              sixteenToTen += 15 * 16 ** i;
              break;
            case "A":
              sixteenToTen += 10 * 16 ** i;
              break;
            case "B":
              sixteenToTen += 11 * 16 ** i;
              break;
            case "C":
              sixteenToTen += 12 * 16 ** i;
              break;
            case "D":
              sixteenToTen += 13 * 16 ** i;
              break;
            case "E":
              sixteenToTen += 14 * 16 ** i;
              break;
            case "F":
              sixteenToTen += 15 * 16 ** i;
          }
        } else if (
          this.getTakeInputValue[this.getTakeInputValue.length - i - 1] != 0
        ) {
          sixteenToTen +=
            this.getTakeInputValue[this.getTakeInputValue.length - i - 1] *
            16 ** i;
        }
      }
    }
    this.setTakeInputValueToBinary10 = sixteenToTen;
  }
}

const calculatorClass = new BinaryCalculator();
calculatorClass.eventWatcherInput();
calculatorClass.eventWatcherOutput();
calculatorClass.windowClick();
calculatorClass.fingerPrintTouch();
//setTimeout(() => {
//  $("main").css("transform", "rotateY(0deg)" /*translate(-50%, -50%)*/);
//}, 1000);
