const app = new Vue({
    el: '#root',
    data: {
        newDo: '',
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
            this.todos[index].isDone = !this.todos[index].isDone;
        },
        removeItem(index) {
            this.todos.splice(index, 1);
        },
        addItem() {
            if (!this.newDo.trim() == '') {
                this.todos.unshift({text:this.newDo.trim(), isDone: false});
            }
            this.newDo = '';
        }
    },
})