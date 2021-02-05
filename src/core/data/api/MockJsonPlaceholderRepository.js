export default {
    
    /**
     * Returns todos response
     * 
     * {
     *   userId: 1,
     *   id: 1
     *   title: 'title',
     *   completed: true
     * }
     * 
     * @param String id 
     */
    getTodos: (id) => new Promise((resolve, rejcted) => resolve({
        userId: 1,
        id: 2,
        title: 'Yaruo Best',
        completed: true
    }))
}