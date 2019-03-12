function pageParse() {
    
  let shell = document.getElementsByTagName('html');
  /*
  shell_children = [];
  for (let elem of shell) {
    shell_children.push(elem);
    while (shell_children && shell_children[0]) {
      shell_children[0].style.position = "relative";
      for (let child of shell_children[0].children) {
        shell_children.push(child);
      }
      shell_children.shift();
    }
  }
  */

  let blackout = document.createElement("div");
  blackout.id = "overlay_filter";
  blackout.style.position = "fixed";
  blackout.style.display = "none";
  blackout.style.width = "100%";
  blackout.style.height = "100%";
  blackout.style.top = "0";
  blackout.style.left = "0";
  blackout.style.right = "0";
  blackout.style.bottom = "0";
  blackout.style.backgroundColor = "rgba(0,0,0,1)";
  blackout.style.zIndex = "3";
  blackout.style.cursor = "pointer";

  shell[0].appendChild(blackout);
  console.log("Success")
  console.log(blackout);
  let h1 = document.getElementsByTagName('h1');
  let h2 = document.getElementsByTagName('h2');
  let h3 = document.getElementsByTagName('h3');
  let h4 = document.getElementsByTagName('h4');
  let h5 = document.getElementsByTagName('h5');
  let h6 = document.getElementsByTagName('h6');

  h1_children = [];
  for (let h of h1) {
    h1_children.push(h);
    while (h1_children && h1_children[0]) {
      h1_children[0].style.position = "relative";
      h1_children[0].style.zIndex = "4";
      h1_children[0].style.color = "white";
      for (let child of h1_children[0].children) {
        h1_children.push(child);
      }
      h1_children.shift();
    }
  }
  h2_children = [];
  for (let h of h2) {
    h2_children.push(h);
    while (h2_children && h2_children[0]) {
      h2_children[0].style.position = "relative";
      h2_children[0].style.zIndex = "4";
      h2_children[0].style.color = "white";
      for (let child of h2_children[0].children) {
        h2_children.push(child);
      }
      h2_children.shift();
    }
  }
  h3_children = [];
  for (let h of h3) {
    h3_children.push(h);
    while (h3_children && h3_children[0]) {
      h3_children[0].style.position = "relative";
      h3_children[0].style.zIndex = "4";
      h3_children[0].style.color = "white";
      for (let child of h3_children[0].children) {
        h3_children.push(child);
      }
      h3_children.shift();
    }
  }
  h4_children = [];
  for (let h of h4) {
    h4_children.push(h);
    while (h4_children && h4_children[0]) {
      h4_children[0].style.position = "relative";
      h4_children[0].style.zIndex = "4";
      h4_children[0].style.color = "white";
      for (let child of h4_children[0].children) {
        h4_children.push(child);
      }
      h4_children.shift();
    }
  }
  h5_children = [];
  for (let h of h5) {
    h5_children.push(h);
    while (h5_children && h5_children[0]) {
      h5_children[0].style.position = "relative";
      h5_children[0].style.zIndex = "4";
      h5_children[0].style.color = "white";
      for (let child of h5_children[0].children) {
        h5_children.push(child);
      }
      h5_children.shift();
    }
  }
  h6_children = [];
  for (let h of h6) {
    h6_children.push(h);
    while (h6_children && h6_children[0]) {
      h6_children[0].style.position = "relative";
      h6_children[0].style.zIndex = "4";
      h6_children[0].style.color = "white";
      for (let child of h6_children[0].children) {
        h6_children.push(child);
      }
      h6_children.shift();
    }
  }

  let links = document.getElementsByTagName('a');

  link_children = [];
  for (let link of links) {

    link_children.push(link);
    while (link_children && link_children[0]) {
      link_children[0].style.position = "relative";
      link_children[0].style.zIndex = "4";
      link_children[0].style.color = "lightblue";

      for (let link_child of link_children[0].children) {
        link_children.push(link_child);
      }
      link_children.shift();
    }
  }

  let images = document.querySelectorAll('img');

  //checks for images without alts
  for (let image of images) {
    let image_alt = image.getAttribute('alt');

    if (!image_alt) {
      image.src = chrome.extension.getURL('images/price-tag.png');
    }
    else {
      let image_replacement = document.createElement("div");
      image_replacement.appendChild(document.createTextNode(image_alt));
      image_replacement.style.color = "orange";
      image.replaceWith(image_replacement);
    }
  };

  let videos = document.getElementsByTagName('video');

  for (let video of videos) {
    console.log(video);
  }

  let audios = document.getElementsByTagName('audio');

  for (let audio of audios) {
    console.log(audio);
  }

  //checks for buttons without labels
  let buttons = document.getElementsByTagName('button');

  for (let button of buttons) {
    let button_label = button.getAttribute('label');
    let button_aria_label = button.getAttribute('aria-label');

    if (!button_label && !button_aria_label) {
      button.innerHTML = "<img class=\"label-tag\" width= \"30\" height= \"30\" src=" + chrome.extension.getURL('images/price-tag.png') + " />" + button.innerHTML;
    }
  };

  //checks for inputs without labels
  let inputs = document.getElementsByTagName('input');

  for (let input of inputs) {
    let input_label = input.getAttribute('label');
    let input_aria_label = input.getAttribute('aria-label');

    if (!input_label && !input_aria_label) {
      input_parent = input.parentElement;
      if (!input_parent.getElementsByTagName('label')) {
        input.innerHTML = "<img class=\"label-tag\" width= \"30\" height= \"30\" src=" + chrome.extension.getURL('images/price-tag.png') + " />" + input.innerHTML;
      }
    }
  };

  html_information = {};
  h1_texts = [];
  for (let i = 0; i < h1.length; i++) {
    h1_texts.push(h1[i].innerText);
  }
  html_information['h1'] = h1_texts;

  h2_texts = [];
  for (let i = 0; i < h2.length; i++) {
    h2_texts.push(h2[i].innerText);
  }
  html_information['h2'] = h2_texts;

  h3_texts = [];
  for (let i = 0; i < h3.length; i++) {
    h3_texts.push(h3[i].innerText);
  }
  html_information['h3'] = h3_texts;

  h4_texts = [];
  for (let i = 0; i < h4.length; i++) {
    h4_texts.push(h4[i].innerText);
  }
  html_information['h4'] = h4_texts;

  h5_texts = [];
  for (let i = 0; i < h5.length; i++) {
    h5_texts.push(h5[i].innerText);
  }
  html_information['h5'] = h5_texts;

  h6_texts = [];
  for (let i = 0; i < h6.length; i++) {
    h6_texts.push(h6[i].innerText);
  }
  html_information['h6'] = h6_texts;

  link_texts = [];
  for (let i = 0; i < links.length; i++) {
    link_texts.push(links[i].text);
  }
  html_information['links'] = link_texts;

  return html_information;
}


console.log("adding listener");

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    console.log(sender.tab ?
      "from a content script:" + sender.tab.url :
      "from the extension");

    if (request.pageInfo == "pageInfo") {
        chrome.runtime.sendMessage(pageParse(), function (response) {
          console.log("page info received");
        });
      sendResponse({ farewell: "goodbye" });
    }

    if (request.toggle == "toggle") {
      console.log("toggle received");
      let blackout = document.getElementById('overlay_filter');
      console.log(blackout);

      if (blackout.style.display === "block") {
        blackout.style.display = "none";
        console.log("FLIPPPED");
      }
      else {
        blackout.style.display = "block";
      }
      sendResponse({ farewell: "goodbye" });
    }
  });