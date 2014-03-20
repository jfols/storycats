/* Permission checks

Usage:

if (can.editItem(myItem)){
  // do something  
}
*/

can = {
  createGame: function () {
    return !!Meteor.userId();
  },
  editGame: function (item) {
    return Meteor.userId() === item.userId;
  },
  removeGame: function (item) {
    return Meteor.userId() === item.userId;
  }
}