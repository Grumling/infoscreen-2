const newsFeed = {};

newsFeed.TV2NORDtmpl = (item) =>
  `<div>
    <h1>${item.querySelector("title").textContent}</h1>
    <p>
        ${item.querySelector("description").textContent}<b>
    </p>
</div>`;

newsFeed.renderTV2NORD = (data) => {
  const list = document.querySelector(".news-list");
  const items = data.querySelectorAll("item");

  for (let i = 0; i < 5; i++) {
    console.log(); //Smid denne id i () for at se alle tags items[i]
    list.innerHTML += newsFeed.TV2NORDtmpl(items[i]);
  }

  /*items.forEach((item) => {
        list.innerHTML += newsFeed.TV2NORDtmpl(item);
    });*/
};

newsFeed.init = () => {
  const newsUrl = `https://www.tv2nord.dk/rss`;

  fetch(newsUrl)
    .then((response) => response.text())
    .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
    .then((data) => newsFeed.renderTV2NORD(data));
};

export default newsFeed;
