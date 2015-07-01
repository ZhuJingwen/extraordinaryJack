
$(document).ready(function(){
  $.getJSON('data.json',function(data){
  for(var i = 0; i < data.length; i++){
  var imageContainer = document.getElementById("images");
   var pic = document.createElement("img");
   pic.src = "images/"+ i +".gif";
   var h = pic.height;
   var w = pic.width;
   var block = document.createElement("div");
   block.id = i;
   block.className = "block";
   var cover = document.createElement("div");
   cover.className = "cover";
   cover.height = h;
   cover.width = w;
   var coverText = document.createElement("div");
   coverText.innerHTML = data[i].name + " is Extraordinary";
   coverText.className = "coverText";
   cover.appendChild(coverText);
   block.appendChild(pic);
   block.appendChild(cover);
    imageContainer.appendChild(block);
  }
  });
});
