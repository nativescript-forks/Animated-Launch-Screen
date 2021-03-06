'use strict';
var helpers = require('../utils/widgets/helper'),
    navigationViewModel = require('./navigation-view-model');

function pageLoaded(args) {
  console.log("navigation pageLoaded");
    var page = args.object;

    helpers.platformInit(page);
    page.bindingContext = navigationViewModel;
    navigationViewModel.set('pageTitle', 'nativeScriptApp');
}

function menuItemTap(args) {
    helpers.navigate(navigationViewModel.menuItems[args.index].modulePath);
}

exports.pageLoaded = pageLoaded;
exports.menuItemTap = menuItemTap;
