// *************************************************** nav bar ********************************************************************************

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  
  links.classList.toggle("show-links");
});



//********************************************************************** our services *******************************************************888888 */

 

const services = [
    {
        ids: 1,
        ser_name: "Hotel Booking",
        // job: "web developer",
        ser_img: "https://www.clipartmax.com/png/middle/27-272285_hotel-clipart-hotel-reservation-hotel-cartoon-png.png",
        ser_text: "Luxury is not a place, it's an experience. Located at the perfect place for a perfect vacation. Great rooms make great mornings.",
    },
    {
        ids: 2,
        ser_name: "Flight Booking",
        // job: "web designer",
        ser_img: "https://media.istockphoto.com/vectors/animated-plane-flying-across-the-world-vector-id457714887?k=20&m=457714887&s=170667a&w=0&h=x7veK1vpccvbI_7WJ08tAkopJ_08183-WuRbaUUnmvQ=",
        ser_text: "Reach with us to reach your destination",
    },
    {
        ids: 3,
        ser_name: "Travel guide",
        // job: "intern",
        ser_img: "https://images-na.ssl-images-amazon.com/images/I/71QhyWw-SgL.jpg",
        ser_text: "No matter where in the world you want to go, we can help get you there,",
    },
    {
        ids: 4,
        ser_name: "Plan your trip",
        // job: "the-boss",
        ser_img: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2021/07/DestinationsNearDelhi_1.jpg",
        ser_text: "Traveling opens door to creating memories. We are professional planners for your vacations. No matter where you're going from, we take you there.",
    },
];

// select item
const imgs = document.getElementById("ser-img");
const ser = document.getElementById("ser");
// const job = document.getElementById("job");
const ser_info = document.getElementById("ser-info");

const serPrevBtn = document.querySelector(".ser-prev-btn");
const serNextBtn = document.querySelector(".ser-next-btn");

// set starting item
let currentSer = 0;

// load initial item
document.getElementById("service-container").addEventListener("DOMContentLoaded", () => {
    const item = services[currentSer];
    imgs.src = item.ser_img;
    ser.textContent = item.ser_name;
    // job.textContent = item.job;
    ser_info.textContent = item.text;
});

// show person based on item
function showSer(myService) {
    const item = services[myService];
    imgs.src = item.ser_img;
    ser.textContent = item.ser_name;
    // job.textContent = item.job;
    ser_info.textContent = item.ser_text;
}

// show next person
serNextBtn.addEventListener("click", () => {
    currentSer++;
    if(currentSer > services.length - 1){
        currentSer = 0;
    }
    showSer(currentSer);
});

// show prev person
serPrevBtn.addEventListener("click", () => {
    currentSer--;
    if(currentSer < 0){
        currentSer = services.length - 1;
    }
    showSer(currentSer);
});



// *************************************************************************about us *************************************************************

const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});










// ************************************************************************** our reviews *********************************************************




const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "https://www.nicepng.com/png/detail/279-2793243_sad-panda-added-tanabata-at-anime-manga-dubbed.png",
        text: "We had a wonderful holiday in Rajasthan which will remain long in the memory. India is a breathtakingly beautiful country full of splendid temples and palaces, noise and colour, peaceful rural scenes and most of all friendly welcoming people. We stayed in some amazing hotels and had brilliant guides who made us feel like friends. Even the noise and bustle is an experience in itself and we enjoyed the contrast between the busy streets, quiet hotels and rural experiences.",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img: "https://i.redd.it/kzworyljfj011.jpg",
        text: "We started with a few days in Mumbai & ended in Delhi, from where we visited the Taj Mahal. In between we visited Bhopal and Satpura and Kanha National Parks. It was a good mixture given the contrast between the busy cities & quiet beautiful national parks. We particularly liked the peacefulness & variety of wildlife in the countryside. The accommodation & guides were excellent throughout our stay.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img: "https://i.pinimg.com/736x/16/a5/b1/16a5b19270ff9dadfe26a5783c1cdb3b.jpg",
        text: "We are a couple in our mid-60s who had not been to SE Asia before and wanted a hassle-free trip with pre-arranged hotels/ tours/ internal flights etc. We were absolutely thrilled with the itinerary and service provided by Nick @ Experience Travel. In particular , the hotels were just perfect , each one better than the one before ! We also appreciated that we spent at least 2 and usually 3 nights in each location as the re-packing was kept to a minimum.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the-boss",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFrAx90E6B3EU1q7R8RVJsKisvjoHOl8bC0w0h4oEkLAt0HqTdOCCMcSOAmERQLdIJ4WA&usqp=CAU",
        text: "A well planned , varied experience with excellent prior planning and local knowledge. Very interesting, different hotels. The local drivers and guides made us feel welcome and at home in their communities.",
    },
];

// select item
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
document.getElementById("review-container").addEventListener("DOMContentLoaded", () => {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person
nextBtn.addEventListener("click", () => {
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
});

// show prev person
prevBtn.addEventListener("click", () => {
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

// show random person
randomBtn.addEventListener("click", () => {
    console.log("Hello");
    currentItem = Math.floor(Math.random()*reviews.length);
    showPerson(currentItem);
});






















