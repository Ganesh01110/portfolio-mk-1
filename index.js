//cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

// for menu activation
const mobilemenucard = document.querySelector(".menumobile");
const menuicon = document.querySelector("#navbar>i");
const backmenuarrow = document.querySelector(".menumobile>a:nth-child(1)");

menuicon.onclick = () => {
  mobilemenucard.classList.toggle("active");
  //  alert("mobilemenu clicked");
};
backmenuarrow.onclick = () => {
  // alert("mobilemenu clicked");
  mobilemenucard.classList.remove("active");
};
window.onscroll = () => {
  mobilemenucard.classList.remove("active");
};

//contact box
const fixedcontact = document.querySelector(".fixedcontact");
const contactbox = document.querySelector(".contactbox");
fixedcontact.onclick = () => {
  contactbox.classList.toggle("active");
  //  alert("mobilemenu clicked");
};

//linking mail n number to element
const emailLink = document.getElementById("emailLink");
const emailAddress = "ganeshsahu0108@gmail.com";

emailLink.addEventListener("click", function () {
  window.location.href = "mailto:" + emailAddress;
});

const phoneLink = document.getElementById("phoneLink");
const phoneNumber = "+91-8658040407"; // Your phone number

phoneLink.addEventListener("click", function () {
  window.location.href = "tel:" + phoneNumber;
});

// left spiral
const words = "Transforming ideas into captivating web realities"; // Add more words if needed

const ANIMATION_DURATION = 2000; // Define your animation duration in milliseconds

function createElements(offset) {
  const characters = words.split("");
  characters.forEach((char, i) => {
    const div = document.createElement("div");
    div.innerText = char;
    div.classList.add("character");
    div.style.animationDelay = `-${i * (ANIMATION_DURATION / 16) - offset}ms`;

    if (offset >= 0) {
      document.getElementById("spiral").appendChild(div);
    } else {
      document.getElementById("spiral2").appendChild(div);
    }
  });
}

createElements(0);
createElements(-1 * (ANIMATION_DURATION / 0.8));

TweenMax.staggerFrom(".two>.righht>.box", 2.4, {
  // y: "-100%",
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 4,
});

//function for moving divs in project
var arr = [
  { String: "Clean code , Elegant designs" },
  { String: " Elevating user experiences with elegant code and design." },
  { String: " Html , css , Java script , typescript , tailwind , bootstrap " },
  { String: "Transforming ideas into captivating web realities" },
  { String: " java , spring , sql " },
  { String: "Bringing your vision to life, one pixel at a time." },
  { String: " react , next.js , mongodb ,redux , vite " },
  { String: "Building bridges between imagination and innovation" },
  { String: " Elevating user experiences with elegant code and design." },
];

function print() {
  var clutter = " ";
  arr.forEach(function (val, index) {
    clutter += `<div class="ticker__item">${val.String}</div>`;
  });
  console.log(clutter);
  document.getElementById("onetick").innerHTML = clutter;
  document.getElementById("twotick").innerHTML = clutter;
}
print();

// function

var arr1 = [
  {
    image: "src/chatapp.jpg",
    heading: "a chat app ui",
    para: "this project so far developed by using react,materialui,redux and the backend still on developement by using socket.io,express.js,mongodb",
    link: "https://github.com/Ganesh01110/chat-app-mk-1",
  },
  {
    image: "src/cofee-screenshot.jpg",
    heading: "a coffee selling website",
    para: "this e-commerce site is developed by using react , vite, redux, expressjs,mongodb",
    link: "https://github.com/Ganesh01110/resp.cofee-mk-2",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "landing pages",
    para: "multiple landing pages developed by using html,css,js,gsap-scrolltrigger,tween-max,tailwind css , bootstarp with slick design and seamless animation",
    link: "https://github.com/Ganesh01110?tab=repositories",
  },
  {
    image: "src/spring.png",
    heading: "student management system ",
    para: "this project is done by using spring , sql ,bootstrap and CRUD apllication on collaboration",
    link: "https://github.com/nishankumartripathy/Student-management",
  },
];

function print1() {
  var clutter1 = "";
  arr1.forEach(function (val1, index) {
    clutter1 += `  <div class="card">
    <div class="p-img"> <img src="${val1.image}"/></div>
    <h1> ${val1.heading}</h1>
    <p>${val1.para}</p>
    <button  onclick="redirectToLink('${val1.link}')">visit<i class="ri-arrow-right-up-line"></i></button>
  </div>`;
  });
  console.log(clutter1);
  document.getElementById("projectbox").innerHTML = clutter1;
}
function redirectToLink(link) {
  window.location.href = link;
}
print1();
