var randMeowInt = function(size) { 
  size = size || 200;
  return Math.floor((Math.random() * size)) + 40; 
}

Template.footer.helpers({
  randMeowWidth: function() { 
    return randMeowInt(600); 
  },
  randMeowHeight: function() { 
    return randMeowInt(200); 
  },
});