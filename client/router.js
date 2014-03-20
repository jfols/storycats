/* client routing */
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

// Filters
var filters = {

  isLoggedIn: function() {
    if (!(Meteor.loggingIn() || Meteor.user())) {
      alert('Please Log In First.')
      this.stop(); 
    }
  }

}

Router.before(filters.myFilter, {only: ['items']});

// Routes

Router.map(function() {

  this.route('home', {
    path: '/'
  });

  this.route('gameCreate');

  this.route('game', {
    path: 'game/:_id',
     waitOn: function () {
      return Meteor.subscribe('singleGame', this.params._id);
    },
    data: function () {
      return Games.findOne();
    }
  });
  
  this.route('games', {
    waitOn: function () {
      return Meteor.subscribe('games');
    },
    data: function () {
      return {
        games: Games.find({})
      }
    }
  });
  
  this.route('notFound', {
    path: '*'
  });

});

Router.before(function() { incrementMessagesRouteCount(); });