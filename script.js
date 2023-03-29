document.getElementById("link").addEventListener("click", links);
document.getElementById("brave").addEventListener("click", brave);
document.getElementById("links").addEventListener("click", links);
function links() {
  let yeah = document.cookie;
  let star = localStorage.getItem("allows");
  if (yeah == "allos" || yeah == "al" || star == "safaris") {
    window.location.href = "Games.html";
  } else {
    let pass = prompt("Please enter password:", "");
    if (pass == 78977897) {
      document.cookie = "allos";
      localStorage.setItem("allows", "safaris");
      window.location.href = "Games.html";
    } else {
      alert("Wrong passcode");
    }
  }
}
function brave() {
  let yeah = document.cookie;
  let star = localStorage.getItem("allows");
  if (yeah == "allos" || yeah == "al" || star == "safaris") {
    window.location.href = "Brave.html";
  } else {
    let pass = prompt("Please enter password:", "");
    if (pass == 78977897) {
      document.cookie = "allos";
      localStorage.setItem("allows", "safaris");
      window.location.href = "Brave.html";
    } else {
      alert("Wrong passcode");
    }
  }
}
function resetEmbeddedWebsite() {
  var elem = document.getElementById("embedded-website");
  elem.src = elem.src;
}
function toggleFullScreen() {
  var elem = document.getElementById("embedded-website");
  if (!document.fullscreenElement) {
    elem.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
function dev() {
  let yeah = document.cookie;
  let nos = localStorage.getItem("alw");
  if (yeah == "al" || nos == "ysur") {
    window.location.href = "dev.html";
  } else {
    let devpass = prompt("please enter your password:", "");
    if (devpass == "yuiasd3") {
      document.cookie = "al";
      window.location.href = "dev.html";
      localStorage.setItem("alw", "ysur");
    } else {
      alert("wrong password you are not dev");
      document.cookie = "notdevs";
      localStorage.setItem("allowed", "wronggus");
      window.location.href = "blocked.html";
    }
  }
}
function notallowed() {
  let check = document.cookie;
  let no = localStorage.getItem("allowed");
  if (check == "notdevs" || no == "wronggus") {
    window.location.href = "blocked.html";
    console.log("Person has been blocked they clicked the dev button");
  }
}
function allowedsd() {
  let star = localStorage.getItem("allows");
  let starting = localStorage.getItem("alw");
  let yeah = document.cookie;
  if (
    yeah == "allos" ||
    yeah == "al" ||
    star == "safaris" ||
    starting == "ysur"
  ) {
    console.log("allowed");
  } else {
    window.alert("unathorized acess redirected to index");
    window.location.href = "index.html";
  }
}
function ask() {
  let person = prompt("Please enter your link:", "Link");
  let link = "http://webcache.googleusercontent.com/search?q=cache:" + person;
  window.location.href = link;
}
function add() {
  var enter = prompt("Enter website url");
  if (enter.includes("https://")) {
    window.location.href = enter;
  } else {
    window.location.href = "https://" + enter;
  }
}
function about() {
  var url = window.location.href;
  var win = window.open();
  var iframe = win.document.createElement("iframe");
  iframe.style =
    "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:#333333;border:none;";
  if (url.includes("https://") || url.includes("http://")) {
    iframe.src = url;
  } else {
    iframe.src = "https://" + url;
  }
  win.document.body.appendChild(iframe);
}
function Open(){
  var url = window.location.href="https://ixl55.glitch.me/indexi.html";
  var win = window.open();
  var iframe = win.document.createElement("iframe");
  iframe.style =
    "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:#333333;border:none;";
  if (url.includes("https://") || url.includes("http://")) {
    iframe.src = url;
  } else {
    iframe.src = "https://" + url;
  }
  win.document.body.appendChild(iframe);
  window.close();
  window.location.href="https://www.google.com";
  Window.close();
}
function Home() {
  var url = "https://ixl55.glitch.me/indexi.html";
  var win = window.open();
  var iframe = win.document.createElement("iframe");
  iframe.style =
    "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:#333333;border:none;";
  if (url.includes("https://") || url.includes("http://")) {
    iframe.src = url;
  } else {
    iframe.src = "https://" + url;
  }
  win.document.body.appendChild(iframe);
}
