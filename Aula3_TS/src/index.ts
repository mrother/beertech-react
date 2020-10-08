import CustomPlayer from './components/CustomPlayer';

const video: CustomPlayer = new CustomPlayer(800, 600, "Your browser does not support the video tag.");

video.setSources([
  { src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4", type: "video/mp4" },
  { src: "http://techslides.com/demos/sample-videos/small.ogv", type: "video/ogg" }
]);

video.render("MyPlayerId");
