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
      .replace(
        "#message#",
        "<h1 style='color: cyan'>" + options.message + "</h1>"
      )
      .replace("#img#", `<img src=${options.img} + 'width="500" height="250">`)
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
    title: "TARDIS",
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

// Tell the app to listen to port 3000

app.listen(3000, function () {
  console.log("Listening on port 3000");
});
