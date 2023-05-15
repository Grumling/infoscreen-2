import meetings from "./meetings.js";
import timeClock from "./timeClock.js";
import gallery from "./gallery.js";

const app = {};

app.init = () => {

  meetings.init();

  timeClock.currentTime();

  gallery.init();
};

app.init();
