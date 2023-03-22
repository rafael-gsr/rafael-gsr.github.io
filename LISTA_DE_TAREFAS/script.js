const Main = {
    tasks: [],

    init: function(){
        this.cacheSelectors()
        this.bindEvents()
        this.getStoraged()
        this.buildTask()
    },

    cacheSelectors: function(){
        this.$checkButtons = document.querySelectorAll('.check')
        this.$inputTask = document.querySelector('#inputTask')
        this.$list = document.querySelector('#list')
        this.$removeButtons = document.querySelectorAll('.remove')
    },

    bindEvents: function(){
        const self = this

        this.$checkButtons.forEach(function(button){
            button.onclick= self.Events.checkButton_click.bind(self)
        })

        this.$inputTask.onkeypress = self.Events.inputTask_keypress.bind(this)

        this.$removeButtons.forEach(function(button){
            button.onclick = self.Events.removeButtons_click.bind(self)
        })

    },

    getTaskHtml: function(task, done){
        return `<li class="${done ? 'done' : ''}" data-task="${task}">
            <div class="check" ></div>
            <label class="task">
                ${task}
            </label>
            <button class="remove" "></button>
        </li>
    `
    },


    getStoraged: function(){
        const textStoraged = JSON.parse(localStorage.getItem('tasks'))
        
        if(textStoraged){
            this.tasks = textStoraged
        } else{
            localStorage.setItem('tasks', JSON.stringify([]))
        }
    },

    buildTask: function(){
        let html = ''
    
        console.log(this.tasks)

        this.tasks.forEach(item => { 
            html+= this.getTaskHtml(item.task,item.done)

    })

    this.$list.innerHTML = html

    this.cacheSelectors()
    this.bindEvents()

    },


    Events:{
        checkButton_click: function(e){
            const li = e.target.parentElement
            const value = li.dataset['task']
            const isDone = li.classList.contains('done')

            const taskState = this.tasks.map(item => {
                if(item.task === value){
                    item.done = !isDone
                }

                return item
            })

            localStorage.setItem('tasks',JSON.stringify(taskState))


            if(!isDone){
                li.classList.add('done')
                return
            }

            li.classList.remove('done')
        },


        inputTask_keypress: function(e){
            const key = e.key
            const value = e.target.value

            if(key == 'Enter'){
                this.$list.innerHTML += this.getTaskHtml(value,false)

            e.target.value = ''

            this.cacheSelectors()
            this.bindEvents()

            const savedTasks = localStorage.getItem('tasks')
            const savedTasksArr = JSON.parse(savedTasks)


            var obj = [
                {task:value, done: false},
                ...savedTasksArr,
            ]

            const jsonTasks = JSON.stringify(obj)

            this.tasks = obj
            console.log(obj)
            localStorage.setItem('tasks',jsonTasks)

            }
        },

        removeButtons_click: function(e){
            const li = e.target.parentElement
            const value = li.dataset['task']

            const newTasksState = this.tasks.filter(item => item.task !== value)

            localStorage.setItem('tasks',JSON.stringify(newTasksState))
            this.tasks = newTasksState

            li.classList.toggle('removed')

            setTimeout(function() {
                li.classList.add('hidden')                
            }, 200);
        }


    }
}

Main.init()