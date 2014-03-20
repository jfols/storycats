/* publications */

// Publish all items

Meteor.publish('games', function() {
  return Games.find();
});

// Publish a single item

Meteor.publish('singleGame', function(id) {
  return Games.find(id);
});