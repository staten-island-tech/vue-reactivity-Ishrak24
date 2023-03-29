let state = {
  dress: 0,
  hair: 0,
};

nextdress();
nexthair();

function nextdress() {
  let dress = document.querySelector("#dress");

  if (state.dress < 6) {
    state.dress++;
    dress.setAttribute("class", `dress${state.dress}`);
  } else if (state.dress === 6) {
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
