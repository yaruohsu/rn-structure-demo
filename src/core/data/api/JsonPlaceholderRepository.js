import JsonPlaceholderService from "./JsonPlaceholderService"

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
    getTodos: (id) => 
        JsonPlaceholderService.fetchTodos(id)
            .then(response => response.json())
            .catch(error => {
                // ErrorHandler.handle(error)
                console.log(error)
                error
            })
}