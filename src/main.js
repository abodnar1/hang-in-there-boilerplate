// query selector variables go here 👇

// Variables for our three main pages - main poster page, create own poster form, & saved posters
var posterMain = document.querySelector(".main-poster");
var posterForm = document.querySelector(".poster-form");
var savedPostersPage = document.querySelector(".saved-posters");
var savedPostersGrid = document.querySelector(".saved-posters-grid");

// Variables specific to main poster page
var posterImage = document.querySelector(".poster-img");
var posterTitle = document.querySelector(".poster-title");
var posterQuote = document.querySelector(".poster-quote");

// Variables for Create Own Poster
var createOwnTitle = document.querySelector("#poster-title");
var createOwnQuote = document.querySelector("#poster-quote");
var createOwnUrl = document.querySelector("#poster-image-url");

// Variables specific to buttons
var showRandomButton = document.querySelector(".show-random");
var showFormButton = document.querySelector(".show-form");
var savedPostersButton = document.querySelector(".show-saved");
var nevermindTakeMeButton = document.querySelector(".show-main");
var backToMainButton = document.querySelector(".back-to-main");
var showMyPosterButton = document.querySelector(".make-poster");
var saveArtButton = document.querySelector(".save-poster");

// we've provided you with some data to work with 👇
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [];
var currentPoster;

// event listeners go here 👇
window.addEventListener("load", generateRandomPoster);
showRandomButton.addEventListener("click", generateRandomPoster);
showFormButton.addEventListener("click", makeOwnPoster);
savedPostersButton.addEventListener("click", showSaved);
nevermindTakeMeButton.addEventListener("click", mainPage);
backToMainButton.addEventListener("click", mainPage);
showMyPosterButton.addEventListener("click", showMyPoster);
saveArtButton.addEventListener("click", saveMyCreation);

// functions and event handlers go here 👇
// (we've provided one for you to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

// Function to click on "Show Another Random Poster"
function generateRandomPoster() {
  currentPoster = new Poster(images[getRandomIndex(images)], titles[getRandomIndex(titles)], quotes[getRandomIndex(quotes)]);

  showRandom();
};

// Function generates a new random poster when show random button is clicked
function showRandom() {
  posterTitle.innerText = currentPoster.title;
  posterQuote.innerText = currentPoster.quote;
  posterImage.src = currentPoster.imageURL;
};

// Function to show the poster created by the user's inputs and save them to the respective arrays
function showMyPoster() {
  currentPoster.imageURL = createOwnUrl.value;
  currentPoster.title = createOwnTitle.value;
  currentPoster.quote = createOwnQuote.value;

  posterTitle.innerText = createOwnTitle.value;
  posterQuote.innerText = createOwnQuote.value;
  posterImage.src = createOwnUrl.value;
  event.preventDefault();

  titles.push(createOwnTitle.value);
  quotes.push(createOwnQuote.value);
  images.push(createOwnUrl.value);

  mainPage();
  resetForm();
};

// Function to clear user input values on make own poster pages
function resetForm() {
  createOwnTitle.value = "";
  createOwnQuote.value = "";
  createOwnUrl.value = "";
};

// Function to hide our Main Poster Page and show the form to Make Own Poster
function makeOwnPoster() {
  posterMain.classList.add("hidden");

  showForm();
};

// Function to make visible Make Own Poster page
function showForm() {
  posterForm.classList.remove("hidden");
};

// Function to show saved posters and hide Make Own Poster and Main Page
function showSaved() {
  savedPostersPage.classList.remove("hidden");

  makeOwnPoster();
  hidePosterForm();
  savedGrid();
};

// Function to hide saved posters
function hideShowSaved() {
  savedPostersPage.classList.add("hidden");
};

// Function to hide make own poster page
function hidePosterForm() {
  posterForm.classList.add("hidden");
};

// Function to show main page and hide make own poster page and show saved posters
function mainPage() {
  posterMain.classList.remove("hidden");

  hidePosterForm();
  hideShowSaved();
};

// Function to save any poster
function saveMyCreation() {
  if (!savedPosters.includes(currentPoster)) {
    savedPosters.push(currentPoster);
    }
  };

// Function to make image thumbnail visible on saved posters page
function savedGrid() {
  for (var i = 0; i < savedPosters.length; i++) {
    savedPostersGrid.innerHTML +=
    `<article class="mini-poster">
      <img src="${savedPosters[i].imageURL}" alt="nothin' to see here">
      <h2>${savedPosters[i].title}</h1>
      <h4>${savedPosters[i].quote}</h3>
    </article>`;
  }
};
