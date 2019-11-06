import api from '@/utils/request.js'

export const GetUser = _ => {
    return api('api/user')
}
