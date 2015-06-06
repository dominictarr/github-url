
module.exports = function (repo, githubHost) {
  githubHost = githubHost || 'github.com'

  var http = new RegExp('(https?):\/\/' + githubHost + '\/([^\/]+)\/([^\/]+?)(\.git)?$')
  var git  = new RegExp('(git):\/\/' + githubHost + '\/([^\/]+)\/([^\/]+?)(\.git)?$')
  var ssh  = new RegExp('(git@)' + githubHost + ':([^\/]+)\/([^\/]+?)(\.git)?$')

  if('object' === typeof repo)
    repo = repo.url
  var m
  if((m = http.exec(repo)) || (m = git.exec(repo)) || (m = ssh.exec(repo)))
    return {
      user: m[2], project: m[3], protocol: m[1] == 'git@' ? 'ssh' : m[1]
    }
}

module.exports.toUrl = function (repo, githubHost) {
  githubHost = githubHost || 'github.com'

  repo =  module.exports(repo, githubHost)
  return 'https://' + githubHost + '/' + repo.user + '/' + repo.project
}

