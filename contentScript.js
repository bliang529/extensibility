  document.onreadystatechange = function()
  {
      if(document.readyState === 'complete')
      {
        // checks for video tag
        var videos = document.getElementsByTagName('video');
        for (var i = 0; i < videos.length; i++) {
            var video = videos[i];
              video.innerHTML= "<img class=\"label_tag\" width= \"30\" height= \"30\" src=" + chrome.extension.getURL('images/video.png') + " />" + video.innerHTML
            }
        // checks for audio tag
        var audios = document.getElementsByTagName('audio');
        for (var i = 0; i < audios.length; i++) {
            var audio = audios[i];
              audio.innerHTML= "<img class=\"label_tag\" width= \"30\" height= \"30\" src=" + chrome.extension.getURL('images/audio.png') + " />" + audio.innerHTML
            }
        // checks for label on button
        var buttons = document.getElementsByTagName('button');
        for (var i = 0; i < buttons.length; i++) {
            var button = buttons[i];
            console.log("inside for loop");
            console.log(button)
            console.log(button.getAttribute('label'))
            if (button.getAttribute('label') == null || button.getAttribute('label') == undefined) {
              console.log("no label exists");
              button.innerHTML= "<img class=\"label_tag\" width= \"30\" height= \"30\" src=" + chrome.extension.getURL('images/price-tag.png') + " />" + button.innerHTML

            }
            else {
              button.innerHTML= "<img class=\"label_tag\" width= \"30\" height= \"30\" src=" + chrome.extension.getURL('images/has-price-tag.png') + " />" + button.innerHTML
              console.log("label exists here!!!!")
            };
      };
      var label_image = document.getElementsByClassName('label_tag');
      // console.log("##########");
      console.log(label_image[0]);
      for (var i = 0; i < label_image.length; i++) {
        var label_img = label_image[i];
        // console.log("STILL WORKING");
        label_img.onclick = function() {
          // console.log("IS IT STILL WORKING???")
          var MyFullVar = "<img width= \"30\" height= \"30\" src=" + chrome.extension.getURL('images/labelmissing.png') + " />";
          this.innerHTML = MyFullVar;
          // var label_img = this;
          // setTimeout(function() {
          //    label_img.className = '';
          // }, 5000)
        }
      };

  };
};
