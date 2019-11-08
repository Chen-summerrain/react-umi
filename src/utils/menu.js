const menuList = [
    {
        title: 'Home',
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
                to:'/user',
                children: [
                    {title:'form',to:'/user/form'},
                    {title:'userRef',to:'/user/user'},
                ]
            },
            { 
                title: 'createContext',
                to:'/context'
            },
            { 
                title: 'hook',
                to:'/hook',
                children: [
                    {title:'selfHook',to:'/hook/selfHook'},
                    {title:'useCallback',to:'/hook/useCallback'},
                    {title:'useImperativeHanldle',to:'/hook/useImperativeHandle'},
                    {title:'useMemo',to:'/hook/useMemo'},
                ]
            },
            { 
                title: 'route',
                to:'/route',
                children:[
                    {title:'动态路由',to:'/route/:id'}
                ]
            },
        ]
    }
]

export default menuList