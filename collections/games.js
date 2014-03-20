Games = new Meteor.Collection('games', { 
  schema: {
    name: {
      type: String,
      min: 5,
      max: 100
    },
    players: {
      type: [String],
      max: 24,
      optional: true
    },
    isActive: {
      type: Boolean,
      optional: true
    },
    prompt: {
      type: String,
      label: 'The prompt to start the story'
    },
    text: {
      type: String,
      optional: true,
      autoValue: function () { 
        if (this.isInsert) {
          return ''; 
        }
      }
    }
  }
});
Games.allow({
  insert: function(userId, doc){
    return true; //can.createGame(userId);
  },
  update:  function(userId, doc, fieldNames, modifier){
    return true; //can.editGame(userId, doc);
  },
  remove:  function(userId, doc){
    return true //can.removeGame(userId, doc);
  }
});

if (Meteor.isClient) {
  GameForm = new AutoForm(Games);
  Meteor.startup(function () {
    GameForm.hooks({
      after: {
        insert: function (error, result, template) {
          if (error) {
            console.log(error);
            alertMessage('Oh shit:'+error.details, 'danger');
          }
          else {
            Router.go('game', { _id: result });
            alertMessage('Woot, such game', 'success');
          }
        }
      }
    });
  });
}