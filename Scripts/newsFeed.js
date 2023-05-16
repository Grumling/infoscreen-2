const newsFeed = {};

newsFeed.TV2NORDtmpl = (item) =>
  `<div class='feedCardContainer'>
    <img class='feedCardImg' src="${item.querySelector("enclosure").getAttribute("url")}">
    <div class='feedCardContent'>
    <h1 class='feedTitle' >${item.querySelector("title").textContent}</h1>
    <p class='feedDesc'>
        ${item.querySelector("description").textContent}<b>
    </p>
    </div>
</div>`;

newsFeed.renderTV2NORD = (data) => {
  const list = document.querySelector(".newsRss");
  const items = data.querySelectorAll("item");

  for (let i = 0; i < 4; i++) {
    console.log(); //Smid denne id i () for at se alle tags items[i]
    list.innerHTML += newsFeed.TV2NORDtmpl(items[i]);
  }
};

newsFeed.init = () => {
  const newsUrl = `https://www.tv2nord.dk/rss`;

  fetch(newsUrl)
    .then((response) => response.text())
    .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
    .then((data) => newsFeed.renderTV2NORD(data));
};

export default newsFeed;