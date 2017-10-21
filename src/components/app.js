angular.module('video-player')

.component('app', {
  controller: function() {
    this.currentVideo = window.exampleVideoData[0],
    this.videos = window.exampleVideoData,
    this.selectVideo = function() {
    }
    this.searchResults = function() {
    }
  },
  templateUrl: 'src/templates/app.html'
});
