const meetings = {};

meetings.init = () => {
  fetch("data/data.json") // fetcher data.json
    .then((resp) => resp.json())
    .then((json) => {
      let meetingsList = json.meetingsList;
      let output = "";
      for (let i = 0; i < meetingsList.length; i++) {
        output += "<div class='event-item'>";
        output += "<p class='title'>" + meetingsList[i].title + "</p>";
        output += "<span class='room'>" + meetingsList[i].room + "</span>";
        output += "<span class='time'>" + meetingsList[i].time + "</span>";
        output += "</div>";
      }

      document.querySelector(".meetingContainer").innerHTML = output; // skriver det ud i innerHtml
    });
};

export default meetings;
