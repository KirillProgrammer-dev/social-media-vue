<template>
  <v-app>
    <v-row>
      <v-card
      v-for="user in users"
      :key="user"
      elevation="2"
      style="margin:1em"
      outlined
      width="250"
      shaped
      :to="'/profile/' + user.id">
          <v-img
            height="250"
            :src="'https://randomuser.me/api/portraits/' + (getRandomInt(0, 2) ? 'men' : 'women') + '/' + getRandomInt(0, 100) + '.jpg'"
          ></v-img>

          <v-card-title>
              {{ user.name }}
          </v-card-title>
          <v-card-subtitle>
              {{ user.email }} | {{ user.phone }}| {{ user.website }}
          </v-card-subtitle>
      </v-card>
    </v-row>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    users: {}
  }),
  methods: {
    loadUser() {
      this.axios
        .get(`http://jsonplaceholder.typicode.com/users/`)
        .then(response => {
          this.users = response.data;
      console.log(this.users)
        });
    },
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; 
    }
  },
  watch: {
    $route() {
      this.loadUser();
    }
  },
  mounted() {
    this.loadUser();
  }
};
</script>
