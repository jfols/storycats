Games = new Meteor.Collection('games', 
{ schema: new SimpleSchema({
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
}) //SimpleSchema
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
        Router.go('gameRoom', { _id: result });
        alertMessage('Woot, such game', 'success');
      }
    }
  }
});
})
}