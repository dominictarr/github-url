
var http = /(https?):\/\/github.com\/([^\/]+)\/([^\/]+).git$/
var git  = /(git):\/\/github.com\/([^\/]+)\/([^\/]+).git$/
var ssh  = /(git@)github.com:([^\/]+)\/([^\/]+).git$/

module.exports = function (repo) {
  if('object' === typeof repo)
    repo = repo.url
  var m
  if((m = http.exec(repo)) || (m = git.exec(repo)) || (m = ssh.exec(repo)))
    return {
      user: m[2], project: m[3], protocol: m[1] == 'git@' ? 'ssh' : m[1]
    }
}

module.exports.toUrl = function (repo) {
  repo =  module.exports(repo)
  return 'https://github.com/' + repo.user + '/' + repo.project
}

