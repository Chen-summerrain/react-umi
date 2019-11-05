import mockJs from 'mockjs'

export default {
    'GET /api/user': mockJs.mock({
        'list|10': [
            {
                username:'@name',
                img:'@image',
                'value|0-10':0,
                city:'@city',
                email:'@EMAIL',
                url: '@url()',
                color:'@color',
                date:'@date(YYYY-MM-DD hh:mm:ss)',
                content: '@cparagraph()'
            }
        ]
    })
}