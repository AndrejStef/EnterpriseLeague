function myFunction() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function myFunction2() {
  let dots2 = document.getElementById("dots2");
  let moreText2 = document.getElementById("more2");
  let btnText2 = document.getElementById("myBtn2");

  if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btnText2.innerHTML = "Read more";
    moreText2.style.display = "none";
  } else {
    dots2.style.display = "none";
    btnText2.innerHTML = "Read less";
    moreText2.style.display = "inline";
  }
}
function myFunction3() {
  let dots3 = document.getElementById("dots3");
  let moreText3 = document.getElementById("more3");
  let btnText3 = document.getElementById("myBtn3");

  if (dots3.style.display === "none") {
    dots3.style.display = "inline";
    btnText3.innerHTML = "Read more";
    moreText3.style.display = "none";
  } else {
    dots3.style.display = "none";
    btnText3.innerHTML = "Read less";
    moreText3.style.display = "inline";
  }
}

function displayFunction() {
  let radioButton = document.getElementsByName("filter");
  let underlineNews = document.getElementById("news-input");
  let underlinePress = document.getElementById("press-input");

  let news = document.getElementById("news");
  let press = document.getElementById("press");
  let newsTitle = document.getElementById("news-title");
  let pressTitle = document.getElementById("press-title");

  if (radioButton[0].checked === true) {
    news.style.display = "inline";
    press.style.display = "none";
    underlineNews.className = "underline-checked-news";
    underlinePress.classList.remove("underline-checked-press");
    pressTitle.style.display = "none";
    newsTitle.style.display = "inline";
    underlinePress.className = "underline-not-checked";
  } else {
    news.style.display = "none";
    press.style.display = "inline";
    underlinePress.className = "underline-checked-press";
    underlineNews.classList.remove("underline-checked-news");
    pressTitle.style.display = "inline";
    newsTitle.style.display = "none";
    underlineNews.className = "underline-not-checked";
  }
}

if (localStorage.getItem("answer") === null) {
  $(document).ready(function () {
    setTimeout(function () {
      $("#exampleModal").modal("show");
    }, 10000);
  });
}
function save_data(val) {
  fired_button = val;
  localStorage.setItem("answer", fired_button);
  // let saved = localStorage.getItem("answer");
  // console.log(saved);
}
