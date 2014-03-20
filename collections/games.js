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
      optional: false
    },
    text: {
      type: String,
      optional: false,
      autoValue: function () { 
        if (this.isInsert) {
        return ''; 
      }
    }
  }}) //SimpleSchema
});