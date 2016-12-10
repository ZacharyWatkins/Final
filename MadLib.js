var first;
var second;
var third;
var fourth;
var fifth;
var sixth;
var CompleteList = [];
function Story1() {
  first = document.getElementById("1").value;
  second = document.getElementById("2").value;
  third = document.getElementById("3").value;
  fourth = document.getElementById("4").value;
  fifth = document.getElementById("5").value;
  if (isNaN(first || second || third || fourth)) {
    CompleteList.push(first || second || third || forth);
    //page one
    setCookie("one",first);
    setCookie("two",second);
    setCookie("three",third);
    setCookie("four",fourth);
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
  document.getElementById("answer1").innerHTML = part1;
  document.getElementById("answer2").innerHTML = part2;
  document.getElementById("answer3").innerHTML = part3;
  document.getElementById("answer4").innerHTML = part4;
  document.getElementById("answer5").innerHTML = part5;
  document.getElementById("ShowList").innerHTML = CompleteList;
}

//page two
setCookie("six",sixth);
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
