$(document).ready(function () {
  $('#verifyForm').submit(function () {
    $.ajax({
      url: 'http://localhost:3000/getStructureUrl/' + btoa(btoa($('#validUrl').val())),
      dataType: 'json',
      type: 'GET',
      crossDomain: true,
      beforeSend: function () {
        $('#output').hide()
        let index = ['protocol', 'hash', 'query', 'pathname', 'auth', 'host', 'port', 'hostname', 'password', 'username', 'origin', 'href']
        index.forEach(function (value) {
          $('#' + value).text('')
        })
      },
      success: function (data) {
        if (data.status == 1) {
          let url_map = data
          /**
                     * Display the div output and set all attributes of url_map
                     */
          $('#output').show()
          Object.keys(url_map).forEach(function (key) {
            $('#' + key).html('<b>' + key + '</b>' + ': ' + '<i>' + url_map[key] + '</i>')
          })
        } else {
          $('#output').show()
          $('#result').text(data.result)
        }
      },
      error: function (requestObject, error, errorThrow) {
        alert('Serviço indisponível. Tente novamente mais tarde!')
      }
    })

    return false
  })
})
