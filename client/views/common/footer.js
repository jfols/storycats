var randMeowInt = function(max) { 
  return Math.floor((Math.random() * max));
}

var randMeowSize = function(size) { 
  return randMeowInt(size || 200) + 40; 
}

Template.footer.helpers({
  randMeowWidth: function() { 
    return randMeowSize(600); 
  },
  randMeowHeight: function() { 
    return randMeowSize(200); 
  },
  randMeowMessage: function() {
    var messages = ["Tell me a story. Meow.",
                    "Feed me words. Meow.",
                    "Bake me a word salad. Meow.",
                    "Storify me right meow",
                    "Stop clicking refresh. Meow.",
                    "Feed me. Meow.",
                    "Is it finished yet? Meow.",
                    "Sir are tou aware tou are a cat?",
                    "Mew",
                    "Sit down, let me tell you a story, I ate your hamster this morning"];
    var size = randMeowInt(messages.length);
    var msg = messages[size];
    return msg;
  }
});