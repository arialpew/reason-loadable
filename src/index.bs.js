'use strict';

var CreateBrowserHistory          = require("history/createBrowserHistory");
var Shell$ParcelReasonmlCodeSplit = require("./Renderer/Shell.bs.js");

require("./index.css");

var story = CreateBrowserHistory.default();

Shell$ParcelReasonmlCodeSplit.render(story.location, Shell$ParcelReasonmlCodeSplit.bootstrap(story));

exports.story = story;
/*  Not a pure module */
