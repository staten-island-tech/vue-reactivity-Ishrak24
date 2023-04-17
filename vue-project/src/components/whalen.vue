<template>
  <h1 id="heading">Whalen in the Closet</h1>
  <div id="box">
    <div id="backdrop">
      <div id="girl"></div>
      <div id="hair"></div>
      <div id="dress"></div>
    </div>
    <div class="buttonBox">
      <button id="nexthair" onclick="nexthair()">hair➡</button>
      <button id="nextdress" onclick="nextdress()">dress➡</button>
    </div>
  </div>
</template>

<script>
let state = {
  dress: 0,
  hair: 0,
};

nextdress();
nexthair();

function nextdress() {
  let dress = document.querySelector("#dress");

  if (state.dress < 7) {
    state.dress++;
    dress.setAttribute("class", `dress${state.dress}`);
  } else if (state.dress === 7) {
    state.dress = 0;
    dress.setAttribute("class", `dress${state.dress}`);
  }
}

function nexthair() {
  let hair = document.querySelector("#hair");

  if (state.hair < 7) {
    state.hair++;
    hair.setAttribute("class", `hair${state.hair}`);
  } else if (state.hair === 7) {
    state.hair = 0;
    hair.setAttribute("class", `hair${state.hair}`);
  }
}
</script>

<style>
body {
  background-color: rgb(105, 181, 231);
  background-image: linear-gradient(
    -10deg,
    #67d1ff 0%,
    #31adff 58%,
    #004fb7 100%
  );
  background-repeat: no-repeat;
  background-attachment: fixed;
}

#box {
  background-color: rgb(255, 188, 62);
  border-radius: 20px;
  margin: auto;
  text-align: center;
  height: 350px;
  width: 350px;
}

#linksBox {
  text-align: center;
  margin: auto;
  opacity: 65%;
  border-radius: 30px;
}

#linksBox a {
  padding: 0px 5px;
}

#linksBox a img {
  border-radius: 7px;
  box-shadow: 0px 0px 2px 1px rgb(205, 255, 243);
}
9 9 #linksBox:hover {
  opacity: 100%;
}

#heading {
  font-size: 30px;
  text-align: center;
  color: snow;
  text-shadow: 0px 4px 5px rgb(24, 25, 88);
  font-family: "j'aime le poisson !", "Trebuchet ms";
}

#backdrop {
  top: 1em;
  margin: auto;
  position: relative;
  background-image: url(https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71enGfet2pL._AC_SX679_.jpg);
  background-size: cover;
  border-radius: 20px;
  height: 320px;
  width: 320px;
}

.buttonBox {
  position: relative;
  margin: 1rem;
}

button {
  margin-top: 2em;
  margin-right: 0.4em;
  color: black;
  background-color: rgb(243, 240, 255);
  box-shadow: 0px 1px 2px 1px rgb(73, 75, 184);
  border-radius: 10px;
  padding: 5px 12px;
  font-size: larger;
  transition: 0.1s linear;
}

button:hover {
  background-color: rgb(248, 252, 255);
  box-shadow: 0px 2px 4px 1px rgb(73, 75, 184);
}
</style>
