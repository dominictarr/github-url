var test = require("tape")
var parse = require('../')

test ('github repo -> object', function (t) {
    t.deepEqual(
      parse('https://github.com/dominictarr/rumours.git')
      , {user: 'dominictarr', project: 'rumours', protocol: 'https'})
    t.deepEqual(
      parse('git://github.com/dominictarr/rumours.git')
      , {user: 'dominictarr', project: 'rumours', protocol: 'git'})
    t.deepEqual(
      parse('git@github.com:dominictarr/rumours.git')
      , {user: 'dominictarr', project: 'rumours', protocol: 'ssh'})

    t.deepEqual(
      parse('https://github.com/dominictarr/rumours')
      , {user: 'dominictarr', project: 'rumours', protocol: 'https'})
    t.deepEqual(
      parse('git://github.com/dominictarr/rumours')
      , {user: 'dominictarr', project: 'rumours', protocol: 'git'})
    t.deepEqual(
      parse('git@github.com:dominictarr/rumours')
      , {user: 'dominictarr', project: 'rumours', protocol: 'ssh'})

    t.end()
  })


test ('github repo -> url', function (t) {
    t.equal(
      parse.toUrl('https://github.com/dominictarr/rumours.git')
      , 'https://github.com/dominictarr/rumours')
    t.equal(
      parse.toUrl('git://github.com/dominictarr/rumours.git')
      , 'https://github.com/dominictarr/rumours')
    t.equal(
      parse.toUrl('git@github.com:dominictarr/rumours.git')
      , 'https://github.com/dominictarr/rumours')
    t.end()
  })

test ('custom github address', function (t) {
    t.deepEqual(
      parse('https://gh.example.com/dominictarr/rumours.git', 'gh.example.com')
      , {user: 'dominictarr', project: 'rumours', protocol: 'https'})
    t.deepEqual(
      parse('git://gh.example.com/dominictarr/rumours.git', 'gh.example.com')
      , {user: 'dominictarr', project: 'rumours', protocol: 'git'})
    t.deepEqual(
      parse('git@gh.example.com:dominictarr/rumours.git', 'gh.example.com')
      , {user: 'dominictarr', project: 'rumours', protocol: 'ssh'})

    t.equal(
      parse.toUrl('https://gh.example.com/dominictarr/rumours.git', 'gh.example.com')
      , 'https://gh.example.com/dominictarr/rumours')
    t.equal(
      parse.toUrl('git://gh.example.com/dominictarr/rumours.git', 'gh.example.com')
      , 'https://gh.example.com/dominictarr/rumours')
    t.equal(
      parse.toUrl('git@gh.example.com:dominictarr/rumours.git', 'gh.example.com')
      , 'https://gh.example.com/dominictarr/rumours')

    t.end()
  })
