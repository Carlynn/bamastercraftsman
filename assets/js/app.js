let projects = [
  {
    "title": "Heli & Carlynn Designs",
    "description": "Branding website for the passionate business owners to solve their branding needs.",
    "created": "October 2017",
    "image": "assets/imgs/branding.png",
    "platforms": "Ruby on Rails, JQuery, HTML & CSS, Materialize",
    "gems": "Action Mailer, AWS, Devise, Figaro, Friendly Id, Paperclip",
    "link": "https://powerful-stream-25184.herokuapp.com/",
    "github_link": "https://github.com/Carlynn/Branding-Site"
  },
  {
    "title": "Viz Data",
    "description": "A website dedicated to users in the Web Development field, searching for career opportunities that can be represented in graphical formatted and compared.",
    "created": "October 2017",
    "image": "assets/imgs/vizData.png",
    "platforms": "Ruby on Rails, JQuery, HTML & CSS, Materialize",
    "gems": "Chartkick, Devise, Friendly ID, Kaminari",
    "link": "https://ancient-reaches-44992.herokuapp.com/",
    "github_link": "https://github.com/Carlynn/viz"
  },
  {
    "title": "Travel With Us",
    "description": "Travel app to show all the must see attractions for Europe within the following destinations: Barcelona, London, Paris, and St.Petersburg. The main functionality of this application is to help users create travel posts which consists of personal recommendations, along with reviews of things to do while in that designated city.",
    "created": "September 2017",
    "image": "assets/imgs/vagabond.png",
    "platforms": "Ruby on Rails, JQuery, HTML & CSS, Materialize",
    "gems": "Bcrypt, Devise, Friendly ID, Kaminari",
    "link": "https://guarded-taiga-12222.herokuapp.com/",
    "github_link": "https://github.com/Carlynn/vagabond"
  },
  {
    "title": "Pub Hub",
    "description": "Living or working in San Francisco? Eating out, but don't know where to eat your lunch? Pub Hub is the place to go to locate the nearest Privately Owned Public Outdoor Space near you!",
    "created": "August 2017",
    "image": "assets/imgs/pubHub.png",
    "platforms": "JQuery, Body Parser, MongoDB, Mongoose, Express, Google Maps API, HTML & CSS, Bootstrap",
    "link": "https://sheltered-hollows-61938.herokuapp.com/",
    "github_link": "https://github.com/Carlynn/PubHub-Proj-1"
  }
];

$(document).ready(function(){
  $("head").load("header.html");

  $.get("nav.html", function(data){
    $("#nav-placeholder").replaceWith(data);
  });
  $.get("footer.html", function(data){
    $("#footer-placeholder").replaceWith(data);
  });

  $(".button-collapse").sideNav();
  $('.slider').slider();

    $.each(projects, function (key, data) {
      $("#card-container").append('<figure><div class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + data['image'] + '"></div><div class="card-reveal"><span class="card-title gold">' + data['title'] + '<i class="material-icons right">close</i></span><p>' + data['description'] + '</p><p><b>Platforms: </b>' + data['platforms'] + '</p><p><b>Gems: </b>' + data['gems'] + '</p><p><b>Website: </b><a href="' + data['link'] + '">' + data['link'] + '</a></p><p><b>Github: </b><a href="' + data['github_link'] + '">' + data['github_link'] + '</a></p></div></figure>');
      });

  });
