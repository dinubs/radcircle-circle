circle = function(radius, steps, centerX, centerY) {
      var xValues = [centerX];
      var yValues = [centerY];
      for (var i = 0; i < steps; i++) {
          xValues[i] = (centerX + radius * Math.cos(2 * Math.PI * i / steps));
          yValues[i] = (centerY + radius * Math.sin(2 * Math.PI * i / steps));
      }

      return [xValues, yValues];
    }
// Change These, and create .json files with names exactly the same as the name in the images folder.
var people = ["aj", "gavin", "aj", "gavin", "aj", "gavin"]

var radius = 200, count = people.length, centerX = document.getElementById('wrap').clientWidth / 2, centerY = document.getElementById('wrap').clientHeight / 2; 

var coords = circle(radius, count, centerX, centerY);

for ( var i=0; i<count; i++ ) {
  var x = coords[0][i],
      y = coords[1][i];

  var rand = Math.floor((Math.random() * count) + 1);

  var div = document.createElement('div')
    div.style.left = (x-25) + 'px'
    div.style.top = (y-25) + 'px'
    div.style.backgroundImage = 'url("images/'+people[i]+'100circle.png")'
    div.setAttribute("data-person-name", people[i]);
    div.setAttribute("class", "circleChooser");
    document.getElementById('wrap').appendChild(div)
}

  var classname = document.getElementsByClassName("circleChooser");

    var myFunction = function() {
        var attribute = this.getAttribute("data-person-name");
        console.log(attribute);
        $("#content-wrap").html ('<svg class="load-icon"><use class="loader" xlink:href="#radCircle" /></svg>')
        // Comment out the below lines to just see the loading icon
        $.getJSON( attribute + ".json", function( data ) {
          console.log(data);
          $("#content-wrap").html( '<h1 id="content-header"></h1><h3 id="content-school"><h3><p id="content-bio"></p>' );
          $("#content-header").html( data.fullName );
          $("#content-school").html( data.school );
          $("#content-bio").html( data.bio );
        });
    };

    for(var i=0;i<classname.length;i++){
        classname[i].addEventListener('click', myFunction, false);
        classname[i].addEventListener('mouseover', myFunction, false);
    }