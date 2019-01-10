var btoa = require('btoa')

module.exports = (request, test) => {

  test('Check: valid url', async t => {
    
    let data = btoa(btoa('http://www.google.com'))
    //console.log(data)
    const response = await request.get(`/getStructureURL/${data}`)

    t.is(response.status, 200)
    t.is(response.data.status, 1)
  })

  test('Check: invalid url', async t => {
    let data = btoa(btoa('http://www.&&&google.com'))
    
    const response = await request.get(`/getStructureURL/${data}`)
    
    t.is(response.status, 200)
    t.is(response.data.status, 0)
  })

  test('Check: url without protocol', async t => {
    let data = btoa(btoa('www.google.com'))
    
    const response = await request.get(`/getStructureURL/${data}`)
    
    t.is(response.status, 200)
    t.is(response.data.status, 2)
  })
}
