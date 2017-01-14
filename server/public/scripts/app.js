$(document).ready(function(){
var currentPerson = {};
var currentPersonIndex = 0;
var currentColor = 'white';

  $.ajax({
    type: "GET",
    url: "/data",
    success: function(data){


    data.forEach( function (person) {
      currentColor = randColorString ();
      createDOMIndex(person, currentColor); //
  }); // creates the index for everyone in the data.

    appendDOM(data[currentPersonIndex]); // puts the current ( initally the first) person into the DOM
    // also adds the highlighting class for the person's index.
    // would like to have the background-color or border of the div be their index color.

    currentPerson = data[currentPersonIndex].name; // grabs first person name
    console.log('currentperson' + currentPersonIndex);


    $('.goPrevious').on('click', function () {
      if (currentPersonIndex == 0) {
        currentPersonIndex = data.length-1;
      } else {
        currentPersonIndex--;
      }
      appendDOM(data[currentPersonIndex]);
    });

    $('.goNext').on('click', function () {
      if (currentPersonIndex == data.length-1) {
        currentPersonIndex = 0;
      } else {
        currentPersonIndex++;
      }
      appendDOM(data[currentPersonIndex]);
    });




    }
  });
});

function createDOMIndex(data, color) {
// this function places the initials of everyone at the bottome
  var initials ="";
  var initialArray =  data.name.split(" ");

  initialArray.forEach( function (names) {
    initials += names[0];
  }) // makes a string of the indiviuals initials for use in the buttons.

  var $personIndex = $('<div class="indexPersonDiv" style="background-color:' + color + '" id="' + data.githubUserName + '"></div>');
  // creates the divs and applies a random color
  $personIndex.append('<button>'+initials+'</button>');
  // places the persons initials inside the box.
  $('.indexRow').append($personIndex);
}


function appendDOM (person) {

  $('.cohortInfo').children('div').remove();
  // clears the previous data out
  $('.indexRow').children().removeClass('indexRowCurrent');
  // removes any already existing highlighting.


  var $personDiv = $('<div id="' + person.name + '"</div>');
  $personDiv.append('<p>' + person.name + '</p>')
  $personDiv.append('<p><a href="https://github.com/' + person.githubUserName + '"</a>https://github.com/' + person.githubUserName + '</a></p>')
  $personDiv.append('<p>' + person.shoutout + '</p>')
  // builds the html for the DOM.

  $('.cohortInfo').append($personDiv);
  // appends the main personal info in the DOM

  $('.indexRow').find('#' + person.githubUserName).addClass('indexRowCurrent');
  // toggles the current person down inthe indexRow.
};

function randColorString () {
// creates a random rgb string for putting inline to the css.  this creates a random box color.
var rand256a =  Math.floor(Math.random() * 256);
var rand256b =  Math.floor(Math.random() * 256);
var rand256c =  Math.floor(Math.random() * 256);

return "rgb(" + rand256a + "," + rand256b + "," + rand256c + ")"
};
