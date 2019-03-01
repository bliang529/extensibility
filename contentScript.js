let child_list = [].slice.call(document.children);

while (child_list && child_list[0]){
  child_list[0].setAttribute('style', 'color:black !important; background-color:black !important; border-color:black !important');
  for (let child of child_list[0].children) {
    child_list.push(child);
  }
  child_list.shift()
}

let h1 = document.getElementsByTagName('h1');
let h2 = document.getElementsByTagName('h2');
let h3 = document.getElementsByTagName('h3');
let h4 = document.getElementsByTagName('h4');
let h5 = document.getElementsByTagName('h5');
let h6 = document.getElementsByTagName('h6');

h1_children = []
for (let h of h1) {
  h1_children.push(h)
  while (h1_children && h1_children[0]){
    h1_children[0].style.color = "white";
    for (let child of h1_children[0].children){
      h1_children.push(child)
    }
    h1_children.shift()
  }
}
h2_children = []
for (let h of h2) {
  h2_children.push(h)
  while (h2_children && h2_children[0]){
    h2_children[0].style.color = "white";
    for (let child of h2_children[0].children){
      h2_children.push(child)
    }
    h2_children.shift()
  }
}
h3_children = []
for (let h of h3) {
  h3_children.push(h)
  while (h3_children && h3_children[0]){
    h3_children[0].style.color = "white";
    for (let child of h3_children[0].children){
      h3_children.push(child)
    }
    h3_children.shift()
  }
}
h4_children = []
for (let h of h4) {
  h4_children.push(h)
  while (h4_children && h4_children[0]){
    h4_children[0].style.color = "white";
    for (let child of h4_children[0].children){
      h4_children.push(child)
    }
    h4_children.shift()
  }
}
h5_children = []
for (let h of h5) {
  h5_children.push(h)
  while (h5_children && h5_children[0]){
    h5_children[0].style.color = "white";
    for (let child of h5_children[0].children){
      h5_children.push(child)
    }
    h5_children.shift()
  }
}
h6_children = []
for (let h of h6) {
  h6_children.push(h)
  while (h6_children && h6_children[0]){
    h6_children[0].style.color = "white";
    for (let child of h6_children[0].children){
      h6_children.push(child)
    }
    h6_children.shift()
  }
}

let links = document.getElementsByTagName('a');

link_children = []
for (let link of links) {
  link_children.push(link)
  while (link_children && link_children[0]){
    link_children[0].style.color = "lightblue";

    for (let link_child of link_children[0].children){
      link_children.push(link_child)
    }
    link_children.shift()
  }
}

let images = document.querySelectorAll('img');

for (let image of images){
  let image_alt = image.getAttribute('alt');

  if (!image_alt) {
    image.src = chrome.extension.getURL('images/price-tag.png');
  }
  else {
    let image_replacement = document.createElement("div");
    image_replacement.appendChild(document.createTextNode(image_alt));
    image_replacement.style.color = "white"
    image.replaceWith(image_replacement);
  }
};

// checks for video tag
let videos = document.getElementsByTagName('video');

for (let video of videos) {
  video.innerHTML = "<img class=\"label_tag\" width= \"30\" height= \"30\" src=" + chrome.extension.getURL('images/movie.png') + " />" + video.innerHTML;
}

// checks for audio tag
let audios = document.getElementsByTagName('audio');

for (let audio of audios) {
  audio.innerHTML = "<img class=\"label_tag\" width= \"30\" height= \"30\" src=" + chrome.extension.getURL('images/audio.png') + " />" + audio.innerHTML
}

// checks for buttons without labels
let buttons = document.getElementsByTagName('button');

for (let button of buttons){
  let button_label = button.getAttribute('label');
  let button_aria_label = button.getAttribute('aria-label');

  if (!button_label && !button_aria_label) {
    button.innerHTML = "<img class=\"label_tag\" width= \"30\" height= \"30\" src=" + chrome.extension.getURL('images/price-tag.png') + " />" + button.innerHTML
  }
};

//checks for inputs without labels
let inputs = document.getElementsByTagName('input');

for (let input of inputs){
  let input_label = input.getAttribute('label');
  let input_aria_label = input.getAttribute('aria-label');

  if (!input_label && !input_aria_label) {
    input_parent = input.parentElement;
    if (!input_parent.getElementsByTagName('label')){
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