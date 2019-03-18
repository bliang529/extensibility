function pageParse() {

  // Parsing and finding headers
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
      h1_children[0].style.color = "white";
      h1_children[0].tabIndex = "-1";
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
      h2_children[0].style.color = "white";
      h2_children[0].tabIndex = "-1";
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
      h3_children[0].style.color = "white";
      h3_children[0].tabIndex = "-1";
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
      h4_children[0].style.color = "white";
      h4_children[0].tabIndex = "-1";
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
      h5_children[0].style.color = "white";
      h5_children[0].tabIndex = "-1";
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
      h6_children[0].style.color = "white";
      h6_children[0].tabIndex = "-1";
      for (let child of h6_children[0].children) {
        h6_children.push(child);
      }
      h6_children.shift();
    }
  }


  //Parsing and finding links
  let links = document.getElementsByTagName('a');
  let finalLinks = []

  link_children = [];
  for (let link of links) {
    if (link.innerText != "" && link.display != "none")
      finalLinks.push(link);

    link_children.push(link);
    while (link_children && link_children[0]) {
      link_children[0].style.color = "lightblue";

      for (let link_child of link_children[0].children) {
        link_children.push(link_child);
      }
      link_children.shift();
    }
  }
  links = finalLinks

  //Storing information to send to popup
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


  //Check to see if information already parsed / script run
  let shell = document.getElementsByTagName('html');

  let blackoutAlready = document.getElementById('overlay_filter_content');
  if (Boolean(blackoutAlready)) return html_information;

  let blackout = document.createElement("div");
  blackout.id = "overlay_filter_content";
  blackout.style.display = "none";

  shell[0].appendChild(blackout);

  let images = document.querySelectorAll('img');



  //Checks for images without alts
  for (let image of images) {
    let image_alt = image.getAttribute('alt');

    if (!image_alt) {
      image.src = chrome.extension.getURL('images/price-tag.png');

      parentContainer = image.parentElement;
      parentContainer.classList.add("tooltip");

      let tooltip = document.createElement("span");
      tooltip.appendChild(document.createTextNode("Missing alternative text"));
      tooltip.classList.add("tooltiptext");
      parentContainer.appendChild(tooltip);
    }
    else {
      let image_replacement = document.createElement("div");
      image_replacement.appendChild(document.createTextNode(image_alt));
      image_replacement.classList.add("tooltip");

      let tooltip = document.createElement("span");
      tooltip.appendChild(document.createTextNode("Alternative text"));
      tooltip.classList.add("tooltiptext");
      image_replacement.appendChild(tooltip);
      image_replacement.style.color = "orange";
      image.replaceWith(image_replacement);
    }
  };

  //Checks for video and audio without titles

  let videos = document.getElementsByTagName('video');

  for (let video of videos) {
    let title = video.getAttribute('title');
    if (!title) {
      parentContainer = video.parentElement;
      parentContainer.classList.add("tooltip");
      parentContainer.innerHTML = "<img class=\"label-tag\" width= \"30\" height= \"30\" src=" + chrome.extension.getURL('images/price-tag.png') + " />" + video.innerHTML;
      let tooltip = document.createElement("span");
      tooltip.appendChild(document.createTextNode("Missing title"));
      tooltip.classList.add("tooltiptext");
      parentContainer.appendChild(tooltip);
    }
  }

  let audios = document.getElementsByTagName('audio');

  for (let audio of audios) {
    let title = audio.getAttribute('title');
    if (!title) {
      parentContainer = audio.parentElement;
      parentContainer.classList.add("tooltip");
      parentContainer.innerHTML = "<img class=\"label-tag\" width= \"30\" height= \"30\" src=" + chrome.extension.getURL('images/price-tag.png') + " />" + audio.innerHTML;
      let tooltip = document.createElement("span");
      tooltip.appendChild(document.createTextNode("Missing title"));
      tooltip.classList.add("tooltiptext");
      parentContainer.appendChild(tooltip);
    }
  }

  //checks for buttons without labels
  let buttons = document.getElementsByTagName('button');

  for (let button of buttons) {
    let button_label = button.getAttribute('label');
    let button_aria_label = button.getAttribute('aria-label');

    if (!button_label && !button_aria_label) {
      button.innerHTML = "<img class=\"label-tag\" width= \"30\" height= \"30\" src=" + chrome.extension.getURL('images/price-tag.png') + " />" + button.innerHTML;
      button.classList.add("tooltip");
      let tooltip = document.createElement("span");
      tooltip.appendChild(document.createTextNode("Missing label"));
      tooltip.classList.add("tooltiptext");
      button.appendChild(tooltip);
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
        input.classList.add("tooltip");
        let tooltip = document.createElement("span");
        tooltip.appendChild(document.createTextNode("Missing label"));
        tooltip.classList.add("tooltiptext");
        input.appendChild(tooltip);
      }
    }
  };

  return html_information;
}

console.log("running contentScript");

if (!Boolean(document.getElementById('sent_already'))) {

  console.log("adding listener");
  chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {

      if (request.pageInfo == "pageInfo") {
        let sentAlready = document.getElementById('sent_already');

        if (!Boolean(sentAlready)) {
          chrome.runtime.sendMessage(pageParse(), function (response) {
            console.log("page info received");
          });
        }

        let nowSent = document.createElement("div");
        nowSent.id = "sent_already";
        nowSent.style.display = "none";

        let shell = document.getElementsByTagName('html');
        shell[0].appendChild(nowSent);

        sendResponse({ farewell: "goodbye" });
      }

      if (request.toggle == "toggle") {
        console.log("toggle received");

        let blackoutAlready = document.getElementById('overlay_filter');
        if (Boolean(blackoutAlready)) {
          console.log("entered");
          if (blackoutAlready.style.display == "none") {
            blackoutAlready.style.display = "block";
            console.log("none");
          }
          else {
            blackoutAlready.style.display = "none";
            console.log("block");
          }
        }
        else {
          let shell = document.getElementsByTagName('html');

          let blackout = document.createElement("div");
          blackout.id = "overlay_filter";
          blackout.style.display = "block";

          shell[0].appendChild(blackout);
        }


        /*
        let shell = document.getElementsByTagName('html');
  
        shell_children = [];
        for (let elem of shell) {
          shell_children.push(elem);
          while (shell_children && shell_children[0]) {
            shell_children[0].style.backgroundColor = "black";
            shell_children[0].style.borderColor = "black";
            for (let child of shell_children[0].children) {
              shell_children.push(child);
            }
            shell_children.shift();
          }
        }
        */

        sendResponse({ farewell: "goodbye" });
      }
    });


  let links = document.getElementsByTagName('a');
  let finalLinks = []

  link_children = [];
  for (let link of links) {
    if (link.innerText != "" && link.display != "none")
      finalLinks.push(link);
  }
  links = finalLinks

  function speak(text) {
    // Create a new instance of SpeechSynthesisUtterance.
    var msg = new SpeechSynthesisUtterance();

    msg.text = text;
    msg.volume = .5;
    msg.rate = 1;
    msg.pitch = 1;

    var firstVoice = speechSynthesis.getVoices()[0];

    msg.voice = speechSynthesis.getVoices().filter(function (voice) { return voice.name == firstVoice; })[0];

    // Queue this utterance.
    window.speechSynthesis.speak(msg);
  }

  document.addEventListener('keyup', function (event) {
    if (event.defaultPrevented) {
      return;
    }


    let h1 = document.getElementsByTagName('h1');
    let h2 = document.getElementsByTagName('h2');
    let h3 = document.getElementsByTagName('h3');
    let h4 = document.getElementsByTagName('h4');
    let h5 = document.getElementsByTagName('h5');
    let h6 = document.getElementsByTagName('h6');

    h1_children = [];

    for (let h of h1) {
      h.tabIndex = "-1";
    }
    for (let h of h2) {
      h.tabIndex = "-1";
    }
    for (let h of h3) {
      h.tabIndex = "-1";
    }
    for (let h of h4) {
      h.tabIndex = "-1";
    }
    for (let h of h5) {
      h.tabIndex = "-1";
    }
    for (let h of h6) {
      h.tabIndex = "-1";
    }

    let key = event.key;

    console.log(key);
    console.log(h1);

    if (key === '1' || key === 49) {
      if (document.activeElement.tagName == "H1") {
        h1_index = 0;
        for (let header of h1) {
          if (document.activeElement.isSameNode(header))
            break;
          else
            h1_index++;
        }
        if (h1_index - 1 >= h1.length) {
          console.log("header now focus", document.activeElement);
          h1[0].focus();
          console.log(document.activeElement);
        }
        else {
          console.log("next now focus", document.activeElement);
          h1[h1_index + 1].focus();
          console.log(document.activeElement);
        }
      }
      else if(Boolean(h1)) {
        console.log("else", document.activeElement);
        h1[0].focus();
        console.log(document.activeElement);

      }
      if (document.activeElement.tagName == "H1") {
        speak(document.activeElement.innerText);
      }
    }

    else if (key === '2' || key === 50) {
      if (document.activeElement.tagName == "H2") {
        h2_index = 0;
        for (let header of h2) {
          if (document.activeElement.isSameNode(header))
            break;
          else
            h2_index++;
        }
        if (h2_index - 1 >= h2.length)
          h2[0].focus();
        else
          h2[h2_index + 1].focus();
      }
      else if(Boolean(h2)) {
        h2[0].focus();
      }
      if (document.activeElement.tagName == "H2")
        speak(document.activeElement.innerText);
    }

    else if (key === '3' || key === 51) {
      if (document.activeElement.tagName == "H3") {
        h3_index = 0;
        for (let header of h3) {
          if (document.activeElement.isSameNode(header))
            break;
          else
            h3_index++;
        }
        if (h3_index - 1 >= h3.length)
          h3[0].focus();
        else
          h3[h3_index + 1].focus();
      }
      else if(Boolean(h3)) 
        h3[0].focus();
      if (document.activeElement.tagName == "H3")
        speak(document.activeElement.innerText);
    }

    else if (key === '4' || key === 52) {
      if (document.activeElement.tagName == "H4") {
        h4_index = 0;
        for (let header of h4) {
          if (document.activeElement.isSameNode(header))
            break;
          else
            h4_index++;
        }
        if (h4_index - 1 >= h4.length)
          h4[0].focus();
        else
          h4[h4_index + 1].focus();
      }
      else if(Boolean(h4))
        h4[0].focus();
      if (document.activeElement.tagName == "H4")
        speak(document.activeElement.innerText);
    }

    else if (key === '5' || key === 53) {
      if (document.activeElement.tagName == "H5") {
        h5_index = 0;
        for (let header of h5) {
          if (document.activeElement.isSameNode(header))
            break;
          else
            h5_index++;
        }
        if (h5_index - 1 >= h5.length)
          h5[0].focus();
        else
          h5[h5_index + 1].focus();
      }
      else if(Boolean(h5))
        h5[0].focus();
      if (document.activeElement.tagName == "H5")
        speak(document.activeElement.innerText);
    }

    if (key === '6' || key === 54) {
      if (document.activeElement.tagName == "H6") {
        h6_index = 0;
        for (let header of h6) {
          if (document.activeElement.isSameNode(header))
            break;
          else
            h6_index++;
        }
        if (h6_index - 1 >= h6.length)
          h6[0].focus();
        else
          h6[h6_index + 1].focus();
      }
      else if(Boolean(h6))
        h6[0].focus();
      if (document.activeElement.tagName == "H6")
        speak(document.activeElement.innerText);
    }
  });

  document.addEventListener('keyup', function (event) {
    if (event.defaultPrevented) {
      return;
    }

    let key = event.key || event.keyCode;

    if (key === 'R' || key === 'r' || key === 82) {
      speak(document.activeElement.innerText);
    }
  });

  document.addEventListener('keyup', function (event) {
    if (event.defaultPrevented) {
      return;
    }

    let key = event.key || event.keyCode;

    if (key === 'L' || key === 'l' || key === 76) {
      if (document.activeElement.tagName == "A") {
        link_index = 0;
        for (let link of links) {
          if (document.activeElement.isSameNode(link)) {
            console.log(link_index);
            break;
          }
          else {
            link_index++;
          }
        }
        if (link_index - 1 >= links.length) {
          links[0].focus();
        }
        else {
          console.log(links[link_index + 1]);
          links[link_index + 1].focus();
        }
      }
      else {
        console.log(links[0]);
        links[0].focus();
      }

      if (document.activeElement.tagName == "A")
        speak(document.activeElement.innerText);
    }

  });
}