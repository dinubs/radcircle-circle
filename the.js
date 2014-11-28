circle = function(radius, steps, centerX, centerY) {
      var xValues = [centerX];
      var yValues = [centerY];
      for (var i = 0; i < steps; i++) {
          xValues[i] = (centerX + radius * Math.cos(2 * Math.PI * i / steps));
          yValues[i] = (centerY + radius * Math.sin(2 * Math.PI * i / steps));
      }

      return [xValues, yValues];
    }
// Change These, and create .json files with names exactly the same as these.
var people = ["Mohammad", "Gavin", "Mohammad", "Gavin", "Mohammad", "Gavin"]

var radius = 200, count = people.length, centerX = document.getElementById('wrap').clientWidth / 2, centerY = document.getElementById('wrap').clientHeight / 2; 

var coords = circle(radius, count, centerX, centerY);

for ( var i=0; i<count; i++ ) {
  var x = coords[0][i],
      y = coords[1][i];

  var rand = Math.floor((Math.random() * count) + 1);

  var div = document.createElement('div')
    div.style.left = (x-25) + 'px'
    div.style.top = (y-25) + 'px'
    div.style.backgroundImage = 'url("http://api.randomuser.me/portraits/med/men/'+rand+'.jpg")'
    div.setAttribute("data-person-name", people[i]);
    div.setAttribute("class", "circleChooser");
  	document.getElementById('wrap').appendChild(div)
}

	var classname = document.getElementsByClassName("circleChooser");

    var myFunction = function() {
        var attribute = this.getAttribute("data-person-name");
        console.log(attribute);
        $.getJSON( attribute + ".json", function( data ) {
		  console.log(data);
		  $("#content-header").html( data.fullName );
		  $("#content-school").html( data.school );
		  $("#content-bio").html( data.bio );
		});
    };

    for(var i=0;i<classname.length;i++){
        classname[i].addEventListener('click', myFunction, false);
    }