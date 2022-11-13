// =============== Express Lab =============== \\

// TODO:
// 1. Build 10 Routes
// 2. Build 1 view engine, say anything you want
// 3. Make 2 different templates
// 4. Use them both in different routes ( you can only have 1 view engine but multiple templates )

// load express
const express = require("express");
// create express app
const app = express();

// Build 1 View Engine

const fs = require("fs");
app.engine("diamant", (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);

    // styling can be added directly to the elements
    const rendered = content
      .toString()
      .replace("#title#", "<title>" + options.title + "</title>")
      .replace("#message#", "<h1>" + options.message + "</h1>")
      .replace("#img#", `<img src=${options.img} + 'width="1000" height="500">`)
      .replace("#content#", "<div>" + options.content + "</div>");
    return callback(null, rendered);
  });
});

// Configure the app (app.set)
app.set("views", "./views");
app.set("view engine", "diamant");
// - middleware

// Build 10 Routes using the 2 different templates
app.get("/", function (req, res) {
  res.send("<h1>Hello Express!</h1>");
});

// template-1
app.get("/about", (req, res) => {
  res.render("template-1", {
    title: "Doctor Who",
    message:
      "Doctor Who is a British science fiction television show broadcast by the BBC since 1963.",
    content:
      "The show depicts the adventures of a Time Lord called the Doctor, an extraterrestrial being who appears to be human. The Doctor explores the universe in a time-travelling space ship called the TARDIS.",
  });
});

app.get("/thedoctor", (req, res) => {
  res.render("template-1", {
    title: "Doctor - The Doctor",
    message: "The Doctor",
    content:
      "The Doctor is the title character in the long-running BBC science fiction television programme Doctor Who. Since the show's inception in 1963, the character has been portrayed by thirteen lead actors. In the programme, 'the Doctor' is the alias assumed by a millennia-old humanoid alien, a Time Lord who travels through space and time in the TARDIS, frequently with companions",
  });
});

app.get("/tardis", (req, res) => {
  res.render("template-1", {
    title: "Doctor Who - TARDIS",
    message: "TARDIS: Time And Relative Dimension In Space",
    content:
      "The TARDIS is a fictional hybrid of the time machine and spacecraft that appears in the British science fiction television series Doctor Who and its various spin-offs. Its exterior appearance mimics a police box, an obsolete type of telephone kiosk that was once commonly seen on streets in Britain",
  });
});

app.get("/companions", (req, res) => {
  res.render("template-1", {
    title: "Doctor Who - Companions",
    message:
      "There have been many companions of The Doctor through out its 50 year history",
    content:
      "In the long-running BBC television science fiction programme Doctor Who and related works, the term 'companion' refers to a character who travels or shares adventures with the Doctor. In most Doctor Who stories, the primary companion acts as an audience surrogate",
  });
});

app.get("/enemies", (req, res) => {
  res.render("template-1", {
    title: "Doctor Who - Villains",
    message: " We are the Daleks! Ex-ter-mi-nate!!",
    content:
      "Davros was our creator. We want to exterminate the entire Universe. We are not afraid of stairs.",
  });
});

// template-2

app.get("/regenerations", (req, res) => {
  res.render("template-2", {
    title: "Doctor Who - Regenerations",
    message:
      "Since 1963, there have been 14 regenerations of The Doctor, most current will be played by Ncuti Gatwa in 2023.",
    img: "https://levycreative.com/wp-content/uploads/2019/10/jeremyenecio_bbc_home_web.jpg",
    content:
      "In the long-running British science fiction television series Doctor Who, regeneration is a biological ability exhibited by the Time Lords, a race of fictional humanoids originating on the planet Gallifrey.",
  });
});

app.get("/gallifrey", (req, res) => {
  res.render("template-2", {
    title: "Doctor Who - Gallifrey",
    message:
      "Gallifrey is a fictional planet in the long-running British science fiction television series Doctor Who.",
    img: "https://thedoctorwhocompanion.com/wp-content/uploads/2016/12/Hell-Bent-Gallifrey-12-Twelfth-Peter-Capaldi.jpg",
    content:
      "It is the original home world of the Time Lords, the civilization to which the protagonist, the Doctor belongs. It is located in a binary star system 250 million light years from Earth. It was destroyed by The Doctor, during the Time War in which The Time Lords and Daleks would have ended up destroying all of Space Time. In the 50th Anniversary Special 'The Day of the Doctor', All 13 regenrations of the Doctor were able to save Gallifrey in a Time Cube.",
  });
});

app.get("/daleks", (req, res) => {
  res.render("template-2", {
    title: "Doctor Who - Daleks",
    message:
      "The Daleks are a fictional extraterrestrial race of mutants principally portrayed in the British science fiction television programme Doctor Who.",
    img: "https://1.bp.blogspot.com/-cOoyS2L4-zQ/U-FXp66xgMI/AAAAAAAAOUc/d62Ocl1ifls/w1200-h630-p-k-no-nu/misc+first.jpg",
    content:
      "They were conceived by science-fiction writer Terry Nation and first appeared in the 1963 Doctor Who serial The Daleks, in shells designed by Raymond Cusick",
  });
});

app.get("/riversong", (req, res) => {
  res.render("template-2", {
    title: "Doctor Who - River Song",
    message:
      "River Song is played by Alex Kingston in the British science-fiction series Doctor Who.",
    img: "https://www.themarysue.com/wp-content/uploads/2015/05/River_Song.jpg",
    content:
      "Her catchphrase: 'Spoilers!'. River Song was introduced to the series as an experienced future companion of series protagonist the Doctor, an alien Time Lord who travels through time in his TARDIS.",
  });
});

app.get("/themaster", (req, res) => {
  res.render("template-2", {
    title: "Doctor Who - The Master",
    message:
      "The Master, or Missy, is a recurring character in the British science fiction television series Doctor Who and its associated spin-off works. They are most recently portrayed by Sacha Dhawan",
    img: "https://houseofgeekery.files.wordpress.com/2021/02/who2.jpg?w=620",
    content:
      "They are a renegade alien Time Lord and the childhood friend and later archenemy of the title character, The Doctor. The Master is currently on their 11th Regeneration cycle.",
  });
});

// Tell the app to listen to port 3000

app.listen(3000, function () {
  console.log("Listening on port 3000");
});
