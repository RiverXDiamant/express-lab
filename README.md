# Express Lab
Express Homework

Exercise

The goal of the exercise is to do put in a rep doing everything that you did during the Express lesson!
This lab is a deliverable

    Build 10 Routes and a view engine, say anything you want
    Make 2 different templates, and use them both in different routes ( you can only have 1 view engine but multiple templates )
=========================
Bonus

    Dynamically add links to your view engine so you can make anchor tags to link your pages together, hmmm how would you do that ….. hint split , loop , you can figure it out, but it will take a lot of problem solving, you'll have to do more than change one line of code, but it will only take a few lines of code, use an array or object another hint.
=========================
Super Bonus

This is an advanced bonus that previews what we will soon learn in class, I didn't teach you any of this but your free to research it's not required at all…

Create a route and view dedicated to displaying a single data resource, such as a single student.

We refer to this as the show route/view, vs. the index route/view.

The key to implementing this feature is route parameters documented in the Route parameters section of the Express Routing guide

Links to an external site..

Basically, you can define a route as follows:

// have some object with a bunch of learners
// edit your view engine as needed and don't copy this code
// word for word, bar for bar, its just an idea

app.get('/learners/:id', function(req, res) {
  console.log(`The value for the :id route parameter is: ${req.params.id}`);
  res.render('learners/show', { learnerId: req.params.id, learnerName: learnerObject[req.params.id].name });
});

To send a matching route from the browser, you can use an html a tag that generates a hyperlink that looks like:

<a href="/learners/ ##learnerId##">
  Click for Details for Student ##studentName##>
</a>
