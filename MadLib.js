var first;
var second;
var third;
var fourth;
var fifth;
var sixth;
var seventh;
var eighth;
var ninth;
var tenth;
var CompleteList = [];
function Story1() {
  first = document.getElementById("1").value;
  second = document.getElementById("2").value;
  third = document.getElementById("3").value;
  fourth = document.getElementById("4").value;
  fifth = document.getElementById("5").value;
  if (isNaN(first || second || third || fourth)) {
    CompleteList.push(first);
    CompleteList.push(second);
    CompleteList.push(third);
    CompleteList.push(fourth);
    //page one
    setCookie("one",first);
    setCookie("two",second);
    setCookie("three",third);
    setCookie("four",fourth);
  }
  else {
    window.alert(Must Not Be Numbers)
  }
  if (isNaN(fifth)) {
    window.alert("Please Enter a Number for Five")
  }
  else {
    setCookie("five",fifth);
    CompleteList.push(fifth);
  }
  setCookie("Picks",CompleteList.toString());
}
function NextPage() {
  var part1 = getCookie("one");
  var part2 = getCookie("two");
  var part3 = getCookie("three");
  var part4 = getCookie("four");
  var part5 = getCookie("five");
  CompleteList = getCookie("Picks");
  document.getElementById("answer1").innerHTML = part1;
  document.getElementById("answer2").innerHTML = part2;
  document.getElementById("answer3").innerHTML = part3;
  document.getElementById("answer4").innerHTML = part4;
  document.getElementById("answer5").innerHTML = part5;
  document.getElementById("ShowList").innerHTML = getCookie("Picks");
}
function Story2() {
  sixth = document.getElementById("6").value;
  seventh = document.getElementById("7").value;
  eighth = document.getElementById("8").value;
  ninth = document.getElementById("9").value;
  tenth = document.getElementById("10").value;
  if (isNaN(sixth || seventh || eighth || ninth)) {
    CompleteList.push(sixth);
    CompleteList.push(seventh);
    CompleteList.push(eighth);
    CompleteList.push(ninth);
    //page one
    setCookie("six",sixth);
    setCookie("seven",seventh);
    setCookie("eight",eighth);
    setCookie("nine",ninth);
  }
  else {
    window.alert(Must Not Be Numbers)
  }
  if (isNaN(tenth)) {
    window.alert("Please Enter a Number for Fifth Entry")
  }
  else {
    setCookie("ten",tenth);
    CompleteList.push(tenth);
  }
  setCookie("Picks",CompleteList.toString());
}
function NextPage2() {
  var part6 = getCookie("six");
  var part7 = getCookie("seven");
  var part8 = getCookie("eight");
  var part9 = getCookie("nine");
  var part10 = getCookie("ten");
  CompleteList = getCookie("Picks");
  document.getElementById("answer6").innerHTML = part6;
  document.getElementById("answer7").innerHTML = part7;
  document.getElementById("answer8").innerHTML = part8;
  document.getElementById("answer9").innerHTML = part9;
  document.getElementById("answer10").innerHTML = part10;
  document.getElementById("ShowList1").innerHTML = getCookie("Picks");
}
//courtesy of w3schools, from http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
