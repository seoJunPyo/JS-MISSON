const btns = document.querySelectorAll("button");
const targetDOM = document.querySelector(".target");

let person = {
  id: 0,
  name: "kim",
  age: 20,
};

const handler = {
  set(target, prop, value) {
    if (prop === "id") {
      target[prop] = value;
      targetDOM.innerHTML = value;
      return true;
    }
    if (prop !== "name") {
      console.log("아님");
    }
  },
};

const proxy = new Proxy(person, handler);

[...btns].forEach((btn) => {
  btn.onclick = (e) => {
    proxy.id = e.target.innerHTML;
  };
});
