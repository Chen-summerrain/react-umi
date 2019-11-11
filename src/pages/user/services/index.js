import api from '@/utils/request.js'

export const GetUser = _ => {
    // return api('api/user')
    return api('http://127.0.0.1:3005/user','post')
}
