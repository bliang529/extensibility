let search = document.getElementById('search');

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    console.log(sender.tab ?
      "from a content script:" + sender.tab.url :
      "from the extension");
    if (request) {
      console.log(request);

      let h1_list = document.createElement("h1");
      let heading_1 = document.createTextNode("All Header 1");
      h1_list.appendChild(heading_1);
      for (let h of request['h1']) {
        let br = document.createElement("br");
        h1_list.appendChild(br);
        let h1 = document.createTextNode(h);
        h1_list.appendChild(h1);
      }
      document.body.appendChild(h1_list);

      let h2_list = document.createElement("h2");
      let heading_2 = document.createTextNode("All Header 2");
      h2_list.appendChild(heading_2);
      for (let h of request['h2']) {
        let br = document.createElement("br");
        h2_list.appendChild(br);
        let h2 = document.createTextNode(h);
        h2_list.appendChild(h2);

      }
      document.body.appendChild(h2_list);

      let h3_list = document.createElement("h3");
      let heading_3 = document.createTextNode("All Header 3");
      h3_list.appendChild(heading_3);
      for (let h of request['h3']) {
        let br = document.createElement("br");
        h3_list.appendChild(br);
        let h3 = document.createTextNode(h);
        h3_list.appendChild(h3);
      }
      document.body.appendChild(h3_list);

      let h4_list = document.createElement("h4");
      let heading_4 = document.createTextNode("All Header 4");
      h4_list.appendChild(heading_4);
      for (let h of request['h4']) {
        let br = document.createElement("br");
        h4_list.appendChild(br);
        let h4 = document.createTextNode(h);
        h4_list.appendChild(h4);
      }
      document.body.appendChild(h4_list);

      let h5_list = document.createElement("h5");
      let heading_5 = document.createTextNode("All Header 5");
      h5_list.appendChild(heading_5);
      for (let h of request['h5']) {
        let br = document.createElement("br");
        h5_list.appendChild(br);
        let h5 = document.createTextNode(h);
        h5_list.appendChild(h5);
      }
      document.body.appendChild(h5_list);

      let h6_list = document.createElement("h6");
      let heading_6 = document.createTextNode("All Header 6");
      h6_list.appendChild(heading_6);
      for (let h of request['h6']) {
        let br = document.createElement("br");
        h6_list.appendChild(br);
        let h6 = document.createTextNode(h);
        h6_list.appendChild(h6);
      }
      document.body.appendChild(h6_list);
    }
  });

search.onclick = function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(
      { file: 'contentScript.js' });
  });

};


//
// function colorLinks()
// {
//     var links = document.getElementsByTagName("a");
//     for(var i=0;i<links.length;i++)
//     {
//         if(links[i].href)
//         {
//             links[i].style.color = "#000000";
//         }
//     }
// }
/*
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    console.log(sender.tab ?
      "from a content script:" + sender.tab.url :
      "from the extension");
    if (request.greeting == "hello")
      sendResponse({ farewell: "goodbye" });
  });


chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  chrome.tabs.sendMessage(tabs[0].id, { greeting: "hello" }, function (response) {
    console.log(response.farewell);
  });
});

*/