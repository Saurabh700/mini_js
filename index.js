//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.
var scopeinfo = JSON.parse(localStorage.getItem("scope"))
  var hoistinfo = JSON.parse(localStorage.getItem("hoisting"))
  var constructorfunction = JSON.parse(localStorage.getItem("constructorfunction"))
  var proto = JSON.parse(localStorage.getItem("prototype"))

  var scopedata = document.getElementById("scopedata")
  scopedata.innerText = scopeinfo.join("\n")
  var Hoistingdata = document.getElementById("Hoistingdata")
  Hoistingdata.innerText = hoistinfo.join("\n")
  var cfdata = document.getElementById("cfdata")
  cfdata.innerText = constructorfunction.join("\n")
  var protodata = document.getElementById("protodata")
  protodata.innerText = proto.join("\n")

  var vid1 = document.getElementById("vid1")
  var vid2 = document.getElementById("vid2")
  var vid3 = document.getElementById("vid3")
  var vid4 = document.getElementById("vid4")

  function Showinfo(){
    scopedata.style.display = "block"
    vid1.style.display = "block"
  }
  function Showinfo1(){
    Hoistingdata.style.display = "block"
    vid2.style.display = "block"
  }
  function Showinfo2(){
    cfdata.style.display = "block"
    vid3.style.display = "block"
  }
  function Showinfo3(){
    protodata.style.display = "block"
    vid4.style.display = "block"
  }
