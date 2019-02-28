console.log("contentScript entered");

// checks for header tags
let h1 = document.getElementsByTagName('h1');
let h2 = document.getElementsByTagName('h2');
let h3 = document.getElementsByTagName('h3');
let h4 = document.getElementsByTagName('h4');
let h5 = document.getElementsByTagName('h5');
let h6 = document.getElementsByTagName('h6');

console.log("header 1", h1)
console.log("header 2", h2)
console.log("header 3", h3)
console.log("header 4", h4)
console.log("header 5", h5)
console.log("header 6", h6)

// checks for links
let links = document.getElementsByTagName('a');

console.log("links", links);

//checks for images without alternative text
let images = document.querySelectorAll('img');

console.log("images", images)
for (let image of images){
  console.log("image", image)
  let image_alt = image.getAttribute('alt');

  if (!image_alt) {
    console.log("no alternative text exists");
    image.innerHTML = "<img class=\"label_tag\" width= \"30\" height= \"30\" src=" + chrome.extension.getURL('images/price-tag.png') + " />" + image.innerHTML
  }
};

// checks for video tag
let videos = document.getElementsByTagName('video');

console.log("videos", videos)
for (let video of videos) {
  console.log("video", video)
  video.innerHTML = "<img class=\"label_tag\" width= \"30\" height= \"30\" src=" + chrome.extension.getURL('images/movie.png') + " />" + video.innerHTML;
}

// checks for audio tag
let audios = document.getElementsByTagName('audio');

console.log("audios", audios)
for (let audio of audios) {
  console.log("audio", audio)
  audio.innerHTML = "<img class=\"label_tag\" width= \"30\" height= \"30\" src=" + chrome.extension.getURL('images/audio.png') + " />" + audio.innerHTML
}

// checks for buttons without labels
let buttons = document.getElementsByTagName('button');

console.log("buttons", buttons)
for (let button of buttons){
  console.log("button", button)
  let button_label = button.getAttribute('label');
  let button_aria_label = button.getAttribute('aria-label');

  if (!button_label && !button_aria_label) {
    console.log("no label exists");
    button.innerHTML = "<img class=\"label_tag\" width= \"30\" height= \"30\" src=" + chrome.extension.getURL('images/price-tag.png') + " />" + button.innerHTML
  }
};

//checks for inputs without labels
let inputs = document.getElementsByTagName('input');

console.log(inputs)
for (let input of inputs){
  console.log("input", input)
  let input_label = input.getAttribute('label');
  let input_aria_label = input.getAttribute('aria-label');

  if (!input_label && !input_aria_label) {
    input_parent = input.parentElement;
    if (!input_parent.getElementsByTagName('label')){
      console.log("no input label exists");
      input.innerHTML = "<img class=\"label_tag\" width= \"30\" height= \"30\" src=" + chrome.extension.getURL('images/price-tag.png') + " />" + input.innerHTML
    }
  }
};

html_information = {}
h1_texts = []
for (let i = 0; i < h1.length; i++) {
  h1_texts.push(h1[i].innerText);
}
html_information['h1'] = h1_texts

h2_texts = []
for (let i = 0; i < h2.length; i++) {
  h2_texts.push(h2[i].innerText);
}
html_information['h2'] = h2_texts

h3_texts = []
for (let i = 0; i < h3.length; i++) {
  h3_texts.push(h3[i].innerText);
}
html_information['h3'] = h3_texts

h4_texts = []
for (let i = 0; i < h4.length; i++) {
  h4_texts.push(h4[i].innerText);
}
html_information['h4'] = h4_texts

h5_texts = []
for (let i = 0; i < h5.length; i++) {
  h5_texts.push(h5[i].innerText);
}
html_information['h5'] = h5_texts

h6_texts = []
for (let i = 0; i < h6.length; i++) {
  h6_texts.push(h6[i].innerText);
}
html_information['h6'] = h6_texts

chrome.runtime.sendMessage(html_information, function(response) {
  console.log(response.farewell);
});

/*
2. make headers and links more visible
3. add click to missing label items
*/





/*
let label_image = document.getElementsByClassName('label_tag');
// console.log("##########");
console.log(label_image[0]);
console.log(label_image);
for (let i = 0; i < label_image.length; i++) {
  let label_img = label_image[i];
  // console.log("STILL WORKING");
  label_img.onclick = function () {
    // console.log("IS IT STILL WORKING???")
    let MyFulllet = "<img width= \"30\" height= \"30\" src=" + chrome.extension.getURL('images/labelmissing.png') + " />";
    this.innerHTML = MyFulllet;
    // let label_img = this;
    // setTimeout(function() {
    //    label_img.className = '';
    // }, 5000)
  }
};
*/