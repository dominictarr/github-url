# github-url

parse the username, repo and protocol from a github clone url.

## Example


``` js
var parse = require('github-url')

console.log(parse('https://github.com/dominictarr/rumours.git'))

// ==> {user: 'dominictarr', project: 'rumours', protocol: 'https'}
```

if you want to parse a url from a service other than github,
you may pass in the expected host as the second argument to `parse`.
`parse(url, "gitlab.com")` for example.

## License

MIT
