import JsonPlaceholderRepository from "../data/api/JsonPlaceholderRepository"
import MockJsonPlaceholderRepository from "../data/api/MockJsonPlaceholderRepository"

const todosItem = Object.freeze({
    id: -1,
    title: ''
});

export default {
    
    invoke: async (id) => {
        const response = await MockJsonPlaceholderRepository.getTodos(id)
        if (response) {
            const data = JSON.parse(JSON.stringify(response))
            if (data.id % 2 !== 0) {
                throw TypeError('the id is not even.');
            }

            const _todoItem = { ...todosItem }
            _todoItem.id = data.id
            _todoItem.title = data.title
            return _todoItem
        } else {
            return response
        }
    }
}