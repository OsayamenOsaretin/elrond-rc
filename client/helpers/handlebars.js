Handlebars.registerHelper('pluralize', function(n, thing) {
  // fairly stupid pluralizer
  if (n === 1) {
    return '1 ' + thing;
  } else {
    return n + ' ' + thing + 's';
  }
});

Handlebars.registerHelper('fname', function(){
        var name = Meteor.user().profile.name.split(' ');
        var fname = name[0];
        return fname;
});