const menuList = [
    {
        title: 'menu0',
        icon:'zhihu',
        to: '/',
        key:'key0',
    },
    {
        title: 'menu1',
        icon:'read',
        to: null,
        key:'key1',
        children: [
            { 
                title: 'user',
                to:'/user'
            },
            { 
                title: 'createContext',
                to:'/context'
            },
            { 
                title: 'hook',
                to:'/hook'
            },
            { 
                title: 'item-4',
                to:'user'
            },
        ]
    },
    {
        title: 'menu2',
        icon:'shopping',
        to: null,
        key:'key2',
        children: [
            { 
                title: 'item-1',
                to:'user'
            },
            { 
                title: 'item-2',
                to:'user'
            },
            { 
                title: 'item-3',
                to:'user'
            },
            { 
                title: 'item-4',
                to:'user'
            },
        ]
    },
    {
        title: 'menu3',
        icon:'shopping',
        to: null,
        key:'key3',
        children: [
            { 
                title: 'item-1',
                to:'user'
            },
            { 
                title: 'item-2',
                to:'user'
            },
            { 
                title: 'item-3',
                to:'user'
            },
            { 
                title: 'item-4',
                to:'user'
            },
        ]
    }
]

export default menuList