<template>
    <v-app>
        <div>
        <v-row class="text-left">
            <v-col cols="10">
                <h1 class="green--text text--darken-2">
                    <v-icon large color="green darken-2">mdi-account-outline</v-icon>
                    {{ user.name }}
                </h1>
            </v-col>
        </v-row>
        <v-row class="text-left">
            <v-col cols="2">
                <img src="https://randomuser.me/api/portraits/men/7.jpg" style="max-width: 100%">
            </v-col>
            <v-col cols="10" class="text-left">
                <p>
                    Веб-сайт: <a :href="user.website" target="_blank">
                        {{ user.website }}
                    </a>
                </p>
                <p>
                    E-mail: 
                    <a :href="'mailto:' + user.email">
                        {{ user.email }}
                    </a>
                </p>
                <p>
                    Город: {{ user.address.city }}
                </p>
                <p>
                    Место работы: {{ user.company.name }}
                </p>
            </v-col>
        </v-row>
        <div class="posts">
            <v-card
            v-for="post in posts"
            style="margin:1em"
            :key="post"
            elevation="2"
            outlined
            shaped>
                <v-card-title>
                    {{ post.title }}
                </v-card-title>
                <v-card-subtitle>
                    {{ post.body }}
                </v-card-subtitle>
            </v-card>
        </div>
    </div>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        currentId: 0,
        user: {},
        posts: {}
    }),
    methods:{
        loadUser(){
            this.axios
                .get(`http://jsonplaceholder.typicode.com/users/${this.currentId}`)
                .then((response) => {
                this.user = response.data;
            });
            this.axios
                .get(`http://jsonplaceholder.typicode.com/posts?userId=${this.currentId}`)
                .then((response) => {
                this.posts = response.data;
            });
        }
    },
    watch: {
        $route(){
            this.currentId = this.$route.params.id;
            this.loadUser();
        }
    }, 
    mounted(){
        this.currentId = this.$route.params.id;
        this.loadUser();
    }
     
}
</script>
