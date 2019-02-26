let changeColor = document.getElementById('changeColor');

  chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
  });

changeColor.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "#000000"; document.body.style.color = "#000000"; document.body.style.color = "#000000";'}

      );
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
