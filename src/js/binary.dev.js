"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BinaryCalculator =
/*#__PURE__*/
function () {
  //! 필드 ES13 부터 지원 중이나 정식 지원단계가 아님
  function BinaryCalculator() {
    _classCallCheck(this, BinaryCalculator);

    this.p_takeInputValue = 0;
    this.p_takeInputBinary = 0;
    this.p_outputValue = 0;
    this.p_outputBinary = 0;
    this.p_takeInputValueToBinary10 = 0;
  }

  _createClass(BinaryCalculator, [{
    key: "fingerPrintTouch",
    value: function fingerPrintTouch() {
      var i = 0;
      setInterval(function () {
        i % 2 == 0 && $("#fingerPrint").css("text-shadow", "0 0 20px #51ff0d").css("color", "yellow");
        i % 2 == 1 && $("#fingerPrint").css("text-shadow", "0 0 0px #51ff0d").css("color", "white");
        i++;
      }, 2000);
      $("#fingerPrint").on("click", function () {
        $("#fingerPrint").css("display", "none");
        setTimeout(function () {
          setInterval(function () {
            var timeToolin = new Date();
            var timeHour = String(timeToolin.getHours());
            var timemin = String(timeToolin.getMinutes());
            var timesec = String(timeToolin.getSeconds());
            timesec.length == 1 && (timesec = "0" + timesec);
            timeHour.length == 1 && (timeHour = "0" + timeHour);
            timemin.length == 1 && (timemin = "0" + timemin);
            $(".timeTool").html("".concat(timeHour, " : ").concat(timemin, " : ").concat(timesec));
          }, 1000);
          $("main *").css("visibility", "visible").css("opacity", "1");
          $(".loading").css("opacity", "0"); //$("main")
          //  .css("background", "url(../img/zard.png)")
          //  .css("background-size", "cover")
          //  .css("background-repeat", "no-repeat");
        });
      });
    }
  }, {
    key: "windowClick",
    value: function windowClick() {
      $("i").on("click", function () {
        $(".alert").css("display", "none") && $("#inputNumberSection").prop("disabled", false);
      });
      $(".alertButton").on("click", function () {
        $(".alert").css("display", "none") && $("#inputNumberSection").prop("disabled", false);
      });
    }
  }, {
    key: "inputValLength",
    value: function inputValLength() {
      $("#inputNumberSection").val().length > 5 && $("#inputNumberSection").prop("disabled", true) && $(".alert").css("display", "block") && $("#inputNumberSection").val("");
    }
  }, {
    key: "switchAlpha",
    value: function switchAlpha(rememberNumber) {
      var numberToAlpha = "";

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
  }, {
    key: "firstButtonEvent",
    value: function firstButtonEvent(binaryNumber, regex) {
      var _this = this;

      this.p_regex0 = /^[0]/;
      $("#inputNumberSection").off();
      $("#inputNumberSection").attr("disabled", false);
      this.setTakeInputBinary = binaryNumber; //$("#inputNumberSection").val("");

      $("#inputNumberSection").val($("#inputNumberSection").val().replace(regex, ""));
      $("#inputNumberSection").val($("#inputNumberSection").val().replace(this.p_regex0, "")); //console.log(this.p_takeInputBinary);
      //$(".firstButton").attr("disabled", true);

      $("#inputNumberSection").on("keyup", function () {
        //regex.test($("#inputNumberSection").val()) == false &&
        //$("#inputNumberSection").val("");
        $("#inputNumberSection").val($("#inputNumberSection").val().replace(regex, ""));
        $("#inputNumberSection").val($("#inputNumberSection").val().replace(_this.p_regex0, ""));

        _this.inputValLength();
      });
    }
  }, {
    key: "eventWatcherInput",
    value: function eventWatcherInput() {
      var _this2 = this;

      this.p_regex2 = /[^01]/g;
      this.p_regex8 = /[^0-7]/g;
      this.p_regex10 = /[^0-9]/g;
      this.p_regex16 = /[^0-9a-fA-F]/g;
      $(".firstButton").on("click", function () {
        $(".firstButton").css("background-color", "white");
      }); //* 버튼 누르면 입력 가능, 입력 불가능한 숫자 입력하면 초기화

      $("#jinsu2ButtonFirst").on("click", function () {
        $("#jinsu2ButtonFirst").css("background-color", "#48bfe3");

        _this2.firstButtonEvent("2", _this2.p_regex2);
      });
      $("#jinsu8ButtonFirst").on("click", function () {
        $("#jinsu8ButtonFirst").css("background-color", "#48bfe3");

        _this2.firstButtonEvent("8", _this2.p_regex8);
      });
      $("#jinsu10ButtonFirst").on("click", function () {
        $("#jinsu10ButtonFirst").css("background-color", "#48bfe3");

        _this2.firstButtonEvent("10", _this2.p_regex10);
      });
      $("#jinsu16ButtonFirst").on("click", function () {
        $("#jinsu16ButtonFirst").css("background-color", "#48bfe3");

        _this2.firstButtonEvent("16", _this2.p_regex16);
      });
    }
  }, {
    key: "eventWatcherOutput",
    value: function eventWatcherOutput() {
      var _this3 = this;

      $(".outputButton").on("click", function () {
        _this3.setTakeInputValue = $("#inputNumberSection").val();

        _this3.inputNumberToDecimal();

        $(".outputButton").css("backgroundColor", "white"); //this.event16To10();
        //console.log(this.getTakeInputValueToBinary10);
        //console.log(this.event16To10());
        //console.log(this.getTakeInputValue);
        //console.log(this.p_takeInputValue);
      });
      $("#jinsu2ButtonSecond").on("click", function () {
        $("#jinsu2ButtonSecond").css("background-color", "yellow");
        _this3.setOutputValue = _this3.event10To2(); //$("main").css("min-width", "90vw");

        $("output").html("").css("opacity", "0");
        $(".loading").css("opacity", "1");
        setTimeout(function () {
          $(".loading").css("opacity", "0");
          setTimeout(function () {
            $("output").html(_this3.getOutputValue).css("opacity", "1");
          }, 200);
        }, 1000);
      });
      $("#jinsu8ButtonSecond").on("click", function () {
        $("#jinsu8ButtonSecond").css("background-color", "yellow");
        _this3.setOutputValue = _this3.event10To8(); //$("main").css("min-width", "90vw");

        $("output").html("").css("opacity", "0");
        $(".loading").css("opacity", "1");
        setTimeout(function () {
          $(".loading").css("opacity", "0");
          setTimeout(function () {
            $("output").html(_this3.getOutputValue).css("opacity", "1");
          }, 200);
        }, 1000);
      });
      $("#jinsu10ButtonSecond").on("click", function () {
        $("#jinsu10ButtonSecond").css("background-color", "yellow");
        _this3.setOutputValue = _this3.getTakeInputValueToBinary10; //$("main").css("min-width", "90vw");

        $("output").html("").css("opacity", "0");
        $(".loading").css("opacity", "1");
        setTimeout(function () {
          $(".loading").css("opacity", "0");
          setTimeout(function () {
            $("output").html(_this3.getOutputValue).css("opacity", "1");
          }, 200);
        }, 1000);
      });
      $("#jinsu16ButtonSecond").on("click", function () {
        $("#jinsu16ButtonSecond").css("background-color", "yellow");
        _this3.setOutputValue = _this3.event10To16(); //$("main").css("min-width", "90vw");

        $("output").html("").css("opacity", "0");
        $(".loading").css("opacity", "1");
        setTimeout(function () {
          $(".loading").css("opacity", "0");
          setTimeout(function () {
            $("output").html(_this3.getOutputValue).css("opacity", "1");
          }, 200);
        }, 1000);
      });
    } //* 10진수를 16진수로 바꿔주는 기능

  }, {
    key: "event10To16",
    value: function event10To16() {
      var tenToSixteen = "";
      var rememberNumber = this.getTakeInputValueToBinary10; //console.log(rememberNumber);

      var i = 0;

      while (i == 0) {
        var numberToAlpha = "";
        var numberToAlphaRest = "";

        if (rememberNumber / 16 < 16 && rememberNumber / 16 > 0) {
          numberToAlpha = this.switchAlpha(Math.floor(rememberNumber / 16));
          numberToAlphaRest = this.switchAlpha(Math.floor(rememberNumber % 16));
          numberToAlpha != 0 && (tenToSixteen = numberToAlpha + (numberToAlphaRest + tenToSixteen));
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
        } //console.log(rememberNumber);
        //console.log(tenToTwo);

      }

      return tenToSixteen;
    } //* 10진수를 2진수로 바꿔주는 기능

  }, {
    key: "event10To2",
    value: function event10To2() {
      var tenToTwo = "";
      var rememberNumber = this.getTakeInputValueToBinary10; //console.log(rememberNumber);

      var i = 0;

      while (i == 0) {
        if (rememberNumber / 2 < 2 && rememberNumber > 0) {
          tenToTwo = Math.floor(rememberNumber / 2) + (rememberNumber % 2 + tenToTwo);
          i = 2;
        } else if (rememberNumber / 2 > 2) {
          tenToTwo = rememberNumber % 2 + tenToTwo;
          rememberNumber = Math.floor(rememberNumber / 2);
        } else if (rememberNumber == 0) {
          i = 2;
        } else if (rememberNumber / 2 == 2) {
          tenToTwo = rememberNumber % 2 + tenToTwo;
          rememberNumber = Math.floor(rememberNumber / 2);
        } else if (rememberNumber == undefined) {
          i = 2;
        } //if (rememberNumber / 2 == 1) {
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
    } //* 10진수를 8진수로 바꿔주는 기능

  }, {
    key: "event10To8",
    value: function event10To8() {
      var tenToEight = "";
      var rememberNumber = this.getTakeInputValueToBinary10; //console.log(rememberNumber);

      var i = 0;

      while (i == 0) {
        if (rememberNumber > 7) {
          if (rememberNumber / 8 < 8) {
            tenToEight = Math.floor(rememberNumber / 8) + (rememberNumber % 8 + tenToEight);
            i = 2;
          } else if (rememberNumber / 8 > 0) {
            tenToEight = rememberNumber % 8 + tenToEight;
            rememberNumber = Math.floor(rememberNumber / 8);
          }
        } else {
          tenToEight = rememberNumber;
          i = 2;
        }
      }

      return tenToEight;
    } //* 10진수를 10진수로 바꿔주는 기능
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

  }, {
    key: "inputNumberToDecimal",
    value: function inputNumberToDecimal() {
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
    } //* 2진수를 10진수로 바꿔주는 식

  }, {
    key: "event2To10",
    value: function event2To10() {
      var twoToTen = 0;

      if (this.getTakeInputValue != 0 && this.getTakeInputValue != "" && this.getTakeInputValue != undefined) {
        for (var i = 0; i < this.getTakeInputValue.length; i++) {
          if (this.getTakeInputValue[this.getTakeInputValue.length - i - 1] == 1) {
            twoToTen += this.getTakeInputValue[this.getTakeInputValue.length - i - 1] * Math.pow(2, i);
          }
        }
      }

      this.setTakeInputValueToBinary10 = twoToTen;
    } //* 8진수를 10진수로 바꿔주는 식

  }, {
    key: "event8To10",
    value: function event8To10() {
      var eightToTen = 0;

      if (this.getTakeInputValue != 0 && this.getTakeInputValue != "" && this.getTakeInputValue != undefined) {
        for (var i = 0; i < this.getTakeInputValue.length; i++) {
          if (this.getTakeInputValue[this.getTakeInputValue.length - i - 1] != 0) {
            eightToTen += this.getTakeInputValue[this.getTakeInputValue.length - i - 1] * Math.pow(8, i);
          }
        }
      }

      this.setTakeInputValueToBinary10 = eightToTen;
    } //* 16진수를 10진수로 바꿔주는 식

  }, {
    key: "event16To10",
    value: function event16To10() {
      var sixteenToTen = 0;

      if (this.getTakeInputValue != 0 && this.getTakeInputValue != "" && this.getTakeInputValue != undefined) {
        for (var i = 0; i < this.getTakeInputValue.length; i++) {
          if (/^[a-fA-F]$/.test(this.getTakeInputValue[this.getTakeInputValue.length - i - 1])) {
            switch (this.getTakeInputValue[this.getTakeInputValue.length - i - 1]) {
              case "a":
                sixteenToTen += 10 * Math.pow(16, i);
                break;

              case "b":
                sixteenToTen += 11 * Math.pow(16, i);
                break;

              case "c":
                sixteenToTen += 12 * Math.pow(16, i);
                break;

              case "d":
                sixteenToTen += 13 * Math.pow(16, i);
                break;

              case "e":
                sixteenToTen += 14 * Math.pow(16, i);
                break;

              case "f":
                sixteenToTen += 15 * Math.pow(16, i);
                break;

              case "A":
                sixteenToTen += 10 * Math.pow(16, i);
                break;

              case "B":
                sixteenToTen += 11 * Math.pow(16, i);
                break;

              case "C":
                sixteenToTen += 12 * Math.pow(16, i);
                break;

              case "D":
                sixteenToTen += 13 * Math.pow(16, i);
                break;

              case "E":
                sixteenToTen += 14 * Math.pow(16, i);
                break;

              case "F":
                sixteenToTen += 15 * Math.pow(16, i);
            }
          } else if (this.getTakeInputValue[this.getTakeInputValue.length - i - 1] != 0) {
            sixteenToTen += this.getTakeInputValue[this.getTakeInputValue.length - i - 1] * Math.pow(16, i);
          }
        }
      }

      this.setTakeInputValueToBinary10 = sixteenToTen;
    }
  }, {
    key: "setTakeInputBinary",
    set: function set(takeInputBinary) {
      this.p_takeInputBinary = takeInputBinary;
    }
  }, {
    key: "setTakeInputValue",
    set: function set(takeInputValue) {
      this.p_takeInputValue = takeInputValue;
    }
  }, {
    key: "getTakeInputValue",
    get: function get() {
      if (this.p_takeInputValue != "") {
        return this.p_takeInputValue;
      }
    }
  }, {
    key: "getTakeInputValueToBinary10",
    get: function get() {
      return this.p_takeInputValueToBinary10;
    }
  }, {
    key: "setTakeInputValueToBinary10",
    set: function set(takeInputValueToBinary10) {
      this.p_takeInputValueToBinary10 = takeInputValueToBinary10;
    }
  }, {
    key: "setOutputValue",
    set: function set(outputValue) {
      this.p_outputValue = outputValue;
    }
  }, {
    key: "getOutputValue",
    get: function get() {
      if (this.p_outputValue != "") {
        return this.p_outputValue;
      } else {
        return "숫자를 입력하세요.";
      }
    }
  }]);

  return BinaryCalculator;
}();

var calculatorClass = new BinaryCalculator();
calculatorClass.eventWatcherInput();
calculatorClass.eventWatcherOutput();
calculatorClass.windowClick();
calculatorClass.fingerPrintTouch(); //setTimeout(() => {
//  $("main").css("transform", "rotateY(0deg)" /*translate(-50%, -50%)*/);
//}, 1000);