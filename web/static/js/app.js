// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

import { socket, joinChannels } from "./socket"
import MainApp from "../templates/main-app";
import Vue from 'vue'

Vue.component('main-app', MainApp)

let channelsObjects = {}
let channelsInfo = {}
channelsInfo["profile"] = false
channelsInfo["orders"] = false


joinChannels((channel_type, channel, params) => {
  channelsInfo[channel_type] = true
  channelsObjects[channel_type] = channel
  var fullyJoined = true
  for (var data in channelsInfo) {
    fullyJoined = fullyJoined & channelsInfo[data]
  }
  if (fullyJoined) {
    initVueApp(channelsObjects["orders"], channelsObjects["profile"])
  }
});


let initVueApp = (orders, profile) => {
  window.vueApp = new Vue({
    el: '#app',
    ready() {
      self.ordersChannel = orders
      self.profileChannel = profile
    },
  });
}
