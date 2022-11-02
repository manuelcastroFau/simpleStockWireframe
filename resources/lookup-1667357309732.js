(function(window, undefined) {
  var dictionary = {
    "90b20a0e-067c-467e-ade1-aa28fa8ae546": "List",
    "b1cfbffe-b2d8-4a1e-8d55-bb5e91a8324e": "UserProfile",
    "43882360-31a5-43a2-ac5f-d53bf46ae390": "News",
    "e6eaed24-b750-4c39-8f38-c76c2d79fae4": "IndividualStock",
    "a64ea37e-2ba0-4260-8606-7dead54b4fc8": "Journal Trades",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "LoginPage",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);