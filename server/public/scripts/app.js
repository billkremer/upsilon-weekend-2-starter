$(document).ready(function(){
var currentPerson = {};
var currentPersonIndex = 0;


  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){

    appendDOM(data[currentPersonIndex]); // puts the current (first) person into the DOM
    data.forEach( function (person) {
    createDOMIndex(person); //
    });

    // console.log(data);
    currentPerson = data[currentPersonIndex].name; // grabs first person name
    // console.log('currentperson' + currentPerson)

    $()





    //figure out current person
  //      appendDOM(currentPerson); // this needs an individual




    }
  });
});

function createDOMIndex(data) {
// this function places the initials of everyone at the bottome
  var initials ="";
  var initialArray =  data.name.split(" ");

  initialArray.forEach( function (names) {
    initials += names[0];
  })

  var $personIndex = $('<div class="indexPersonDiv" style="background-color:' + randColorString() + '"></div>');
  // creates the divs and applies a random color
  $personIndex.append('<button>'+initials+'</button>')
  // places the persons initials inside the box.
  $('.indexRow').append($personIndex)
}


function appendDOM (person) {
  var $personDiv = $('<p>' + person.name + '</p>')
  $personDiv.append('<p><a href="https://github.com/' + person.githubUserName + '"</a>https://github.com/' + person.githubUserName + '</a></p>')
  $personDiv.append('<p>' + person.shoutout + '</p>')

  $('.cohortInfo').append($personDiv);
};

function randColorString () {
// creates a random rgb string for putting inline to the css.  this creates a random box color.
var rand256a =  Math.floor(Math.random() * 256);
var rand256b =  Math.floor(Math.random() * 256);
var rand256c =  Math.floor(Math.random() * 256);

return "rgb(" + rand256a + "," + rand256b + "," + rand256c + ")"
};
