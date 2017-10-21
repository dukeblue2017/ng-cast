angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    video: '<'
  },

  templateUrl: 'src/templates/videoList.html'
  });
