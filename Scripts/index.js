import meetings from "./meetings.js";
import timeClock from "./timeClock.js";
import gallery from "./gallery.js";
import newsFeed from "./newsFeed.js";

const app = {};

// initilize the app and its coreponding modules
app.init = () => {
  meetings.init();

  timeClock.currentTime();

  gallery.init();

  newsFeed.init();
};

app.init();
