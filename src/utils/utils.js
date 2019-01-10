function urlUtils () {
  /*
    * URL structure: https://pt.wikipedia.org/wiki/URL
    * Based RFC 3986, RFC 3966, RFC 4694, RFC 4759, RFC 4904
    * Reference: https://cran.r-project.org/web/packages/rex/vignettes/url_parsing.html
    */
  this.is_valid = function (value) {
    expression = '^(?:(?:http(?:s)?|ftp|ssh)://)(?:\\S+(?::(?:\\S)*)?@)?' // Sheme Check
    expression += '(?:(?:[a-z0-9\u00a1-\uffff](?:-)*)*' // User and Pass Check
    expression += '(?:[a-z0-9\u00a1-\uffff])+)' // Host or IP Check
    expression += '(?:\\.(?:[a-z0-9\u00a1-\uffff](?:-)*)*?' // Port Check
    expression += '(?:[a-z0-9\u00a1-\uffff])+)*' // Path Check
    expression += '(?:\\.(?:[a-z0-9\u00a1-\uffff]){2,})' // GET Query String Check
    expression += '(?::(?:\\d){2,5})?(?:/(?:\\S)*)?$' // Anchor Check

    var regexp = new RegExp(expression)
    return regexp.test(value)
  }

  this.has_protocol = function (url) {
    console.log(url)
    let protocols = ['http://', 'https://', 'ftp://', 'ssh://']
    let is_true = false
    protocols.forEach(function (value) {
      if (url.includes(value)) {
        is_true = true
      }
    })

    return is_true
  }
}

module.exports = urlUtils
