document.getElementById("link").addEventListener("click", links);
document.getElementById("brave").addEventListener("click", brave);
document.getElementById("links").addEventListener("click", links);
function links() {
  let yeah = document.cookie;
  let star = localStorage.getItem("allows");
  if (yeah == "allos" || yeah == "al" || star == "safaris") {
    window.location.href = "Games.html";
  } else {
    let pass = prompt("Please enter password:", "Password");
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
    let pass = prompt("Please enter password:", "Password");
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
function allowedsd() {
  let star = localStorage.getItem("allows");
  let starting = localStorage.getItem("alw")
  let yeah = document.cookie;
  if (yeah == "allos" || yeah == "al" || star == "safaris" || starting == "ysur") {
    console.log("allowed")
  } else {
    console.log("unathorized acess redirected to index");
    window.location.href = "index.html";
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
