import currentTime from "./service.js";

// Glide gallery
new Glide(".glide", {
    type: "carousel",
    autoplay: 6000,
    animationDuration: 1200,
    //animationTimingFunc: "ease-in-out",
    gap: 5,
}).mount();

currentTime();

// fetch data.json and write it to console
// fetch('data/data.json')
      fetch('data/data.json') // fetcher data.json
    .then((resp) => resp.json())
    .then((json) => {
        //console.log(json);
        let meetingsList = json.meetingsList;
        let output = "";
        for(let i = 0; i < meetingsList.length; i++){ //vi forEacher over et array og skriver dem ud i innerHtml

            output += "<div class='event-item'>"
            output += "<p class='title'>" + meetingsList[i].title + "</p>"; 
            output += "<span class='room'>" + meetingsList[i].room + "</span>"; 
            output += "<span class='time'>" + meetingsList[i].time + "</span>"; 
            output += "</div>";
           // output += "<p>" + meetingName[i].title + "</p>";;
           // output += "<span>" + meetingName[i].room + "</span>";;
           // output += "<span>" + meetingName[i].time + "</span>";;
        }

        document.querySelector('.meetingContainer').innerHTML = output; // skriver det ud i innerHtml
    }) 