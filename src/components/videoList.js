angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    video: '<'
  },

  controller: function() {
    this.currentVideo = window.exampleVideoData[0],
    this.videos = window.exampleVideoData
  },
  templateUrl: 'src/templates/videoList.html'
  });
