const app = Vue.createApp({
    template: `<h2>{{app_name}} + {{first_name + " " + last_name}}</h2>
    <button @click="onChangeName">Change shorter</button>
    <div class="modal" v-if="is_modal">
        <h1>Content modal</h1>
    </div>`,
    data() {
        return {
            app_name: "Learn JS with",
            first_name: "ANH",
            last_name: "LE",
            is_modal: false
        }
    },
    methods: {
        onChangeName() {
            this.first_name = "Bi"
            this.last_name = "BiBi"
            this.is_modal = !this.is_modal
        }
    },
})

app.mount(".content")