const BASE_DOMAIN = 'https://jsonplaceholder.typicode.com'
const TODOS_API = '/todos'
const PHOTO_API = '/photos'

export default {

    fetchTodos: (id) => fetch(`${BASE_DOMAIN}${TODOS_API}/${id}`),
    fetchPhotos: (id) => fetch(`${BASE_DOMAIN}${$PHOTOS_API}/${id}`)
}