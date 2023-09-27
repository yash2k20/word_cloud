const colorSchemes = {
  "Default": ["#00CCCC", "#89da59", "#80bd9e", "#ff420e"],
  "Cool": ["#003b46", "#07575b", "#66a5ad", "#c4dfe6"],
  "Nature": ["#2e4600", "#486b00", "#a2c523", "#7d4427"],
  "Vibrant": ["#375e97", "#fb6542", "#ffbb00", "#ffbb00"],
  "Delicate": ["#98dbc6", "#5bc8ac", "#e6d72a", "#f18d9e"],
  "Beach": ["#f4cc70", "#de7a22", "#20948b", "#6ab187"],
  "Autumn": ["#8d230f", "1e434c", "#9b4f0f", "#c99e10"],
  "Ice": ["#f1f1f2", "#bcbabe", "#a1d6e2", "#1995ad"],
  "Citrus": ["#eb8a44", "#f9dc24", "#4b7447", "#8eba43"]
}

const commonWords = ["என"," நான்", "அவரது", "என்று", "அவர்", "இருந்தது", "உடன்", "அவை","இருக்கும்", "இந்த", "ஒரு", "ஆனால்", "என்ன", "சில", "ஆகிறது", "அது", "அல்லது"];

const sample = "ஒவ்வொருவருக்கும் கல்வி கற்பதற்கான உரிமையுண்டு. குறைந்தது ெதாடக்க அடிப்படைக் கட்டங்களிலாவது கல்வி இலவசமானதாயிருத்தல் வேண்டும். தொடக்கக் கல்வி கட்டாயப்படுத்தல் வேண்டும். தொழில் நுட்பக் கல்வியும் உயர் தொழிற் கல்வியும் பொதுவாகப் பெறப்படத்தக்கனவாயிருத்தல் வேண்டும். உயர் கல்வியானது யாவருக்கும் திறமையடிப்படையின் மீது சமமான முறையில் கிடைக்கக் கூடியதாக்கப்படுதலும் வேண்டும்";


document.getElementById("container").onload = function() {
      
  // placeholder text
  document.getElementById("input-text").placeholder = sample;

  // create a chart
  var chart = anychart.tagCloud();
  chart.data(sample, {
    mode:"byWord",
    maxItems: 12,
    ignoreItems: commonWords
  });

  
  var customColorScale = anychart.scales.linearColor();
  customColorScale.colors(colorSchemes["Default"]);

  chart.colorScale(customColorScale);
  
  chart.container("cloud-container");
  chart.draw();

};


document.getElementById("generate").onclick = function() {

  var mode = document.querySelector('input[name="mode"]:checked').value;
  var colorSelection = document.querySelector('input[name="colorScheme"]:checked').value;
  var scale = document.querySelector('input[name="scales"]:checked').value;
  var wordSpacing = document.getElementById("display").innerHTML;

  
  document.getElementById("cloud-container").innerHTML = "";


  var text = '';
  if(document.getElementById('input-text').value == ""){
    text = sample;
  }
  
  else {
    var text = document.getElementById('input-text').value;
  }
  
  var cleanedText = text;

  
 var chart = anychart.tagCloud();
  chart.data(cleanedText, {
    mode: "byWord",
    maxItems: 200,
    ignoreItems: commonWords
  });

  
  var customColorScale = anychart.scales.linearColor();
  customColorScale.colors(colorSchemes[colorSelection]);

  if(mode == "Rectangle"){
      chart.mode("rect");
    }

  if(scale == "Logarithmic") {
    chart.scale(anychart.scales.log());
  }


  chart.textSpacing(wordSpacing);

  
  chart.colorScale(customColorScale);

  chart.container("cloud-container");
  chart.draw();

}

var slider = document.getElementById("myRange");
var output = document.getElementById("display");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}