import React from 'react'
import Layout from '@/components/Layout'
import api from '@/utils/request.js'

api('api/user').then(res=>{
    console.log(res,'res')
})

export default Index => (
    <Layout>
        <div>layout index</div>
    </Layout>
)