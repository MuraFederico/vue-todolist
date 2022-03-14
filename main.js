const app = new Vue({
    el: '#root',
    data: {
        todos: [
            {
                text: 'fare la spesa',
                isDone: false,
            },
            {
                text: 'lavare i piatti',
                isDone: true,
            },
            {
                text: 'allenarsi',
                isDone: false,
            },
        ],
    },
    methods: {
        toggleDone(index) {
            this.todos[index].isDone = !this.todos[index].isDone
        }
    },
})