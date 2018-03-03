let services = [
  {
    "title-1": "Patio Furniture",
    "description-1": "Whether you want something simple to compliment your existing indoor or outdoor area, or a unique design that will be the envy of your neighbors, we’ll be able to design something that is both beautiful and functional and  ts seamlessly in your home or garden. Unlike inexpensive wood or plastic patio furniture our well-built furniture and gates will last for years to come. The quality of the  nished product speaks for itself and our customers are always delighted with the end result.",
    "photo-1": "assets/images/services-cover-patio.jpg",
    "title-2": "STAINLESS STEEL AND ALUMINUM WELDING",
    "description-2": "With more than 30 years of experience with stainless steel and aluminum fabrication in the heart of wine country, we o er custom gate designs that will enhance your home. We o er a full package suite using high precision tools to do the job. Call us today for a quote.",
    "photo-2": "assets/images/services-cover-stainless.jpg",
  },
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

    // $.each(services, function (key, data) {
    //   $("#services").append('<figure><div class="container"><div class="row"><div class="col s12"><h2>' + data['title-1'] + '</h2></div></div><div class="row"><div class="col s12 m6"><img class="services-image" src="' + data['photo-1'] + '"></div><div class="col s12 m6"><p>' + data['description-1'] + '</p></div></div></div><div class="container"><div class="row"><div class="col s12"><h2>' + data['title-2'] + '</h2></div></div><div class="row"><div class="col s12 m6"><p>' + data['description-2'] + '</p></div><div class="col s12 m6"><img class="services-image" src="' + data['photo-2'] + '"></div></div></div></figure>');
    //   });

  });
