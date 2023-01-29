import API from '@/services/API'
export default{
    getProducts(){
        return API().get('/')
    }
}