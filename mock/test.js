import mockJs from 'mockjs'

export default {
    'GET /api/img': mockJs.mock({
        'list|10': [{img:'@image'}]
    })
}