var ffmpegPath = require('@ffmpeg-installer/ffmpeg').path
var ffprobePath = require('@ffprobe-installer/ffprobe').path
var ffmpeg = require('fluent-ffmpeg')
var Videoshow = require('./videoshow')
var pkg = require('../package.json')

ffmpeg.setFfmpegPath(ffmpegPath)
ffmpeg.setFfprobePath(ffprobePath)

module.exports = videoshow

function videoshow(images, options) {
  return new Videoshow(images, options)
}

videoshow.VERSION = pkg.version
videoshow.ffmpeg = ffmpeg
