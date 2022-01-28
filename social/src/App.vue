<template>
    <v-app id="app">
      <v-navigation-drawer
        color="green"
        dark
        expand-on-hover
        hide-overlay
        permanent
        right
        absolute
      >
        <v-list
            nav 
            shaped
            dense
        >
          <v-list-item two-line v-if="getName">
            <v-list-item-avatar>
              <img src="https://pixabay.com/get/ge26080380786fee529d289673c2470926cf70639430a5a94c262d0748a830e68779650c3b2c0d790c09ca3f773e22132_1280.jpg">
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="font-weight-black">{{ getName }}</v-list-item-title>
              <v-list-item-subtitle>14 лет</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-if="getName" @click="logOut()">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-left">Выйти</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <div v-else-if="!getName">
            <v-list-item two-line class="d-flex" link to="/login">
              <v-list-item-icon>
                <v-icon>mdi-login</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="text-left">Войти</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/registration">
              <v-list-item-icon>
                <v-icon>mdi-account-plus</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="text-left">Регистрация</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
          <v-divider class="my-3" />
          <v-list-item :to="'/'">
            <v-list-item-icon>
              <v-icon> mdi-home-outline </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-left">Главная</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
           <v-list-item :to="'/profile/2'">
            <v-list-item-icon>
              <v-icon> mdi-account-outline </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-left">Мой профиль</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
           <v-list-item :to="'/search'">
            <v-list-item-icon>
              <v-icon> mdi-account-multiple-plus-outline </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-left">Найти друзей</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    
    <v-main class="px-12 py-3">
      <v-container fluid>
        <router-view @login="login" />
      </v-container>
    </v-main>

  </v-app>
</template>
<script>
export default {
  methods:{
    login(login){ //временно на клиенте, потом сделаю на сервере с сесиями 
      localStorage.setItem('name', login.name);
      localStorage.setItem('lastname', login.lastname);
      localStorage.setItem('site', login.website);
      localStorage.setItem('phone', login.tel);
      localStorage.setItem('email', login.email);
      localStorage.setItem('username', login.username);
      localStorage.setItem('date', login.date);
    },
    logOut(){
      localStorage.removeItem('name');
      localStorage.removeItem('lastname');
      window.location.reload();
    }
  },
    computed:{
        getName(){
            if (localStorage.getItem("lastname") == undefined){
              return 0;
            }
            return localStorage.getItem("lastname") + " " + localStorage.getItem("name");
        }
    }
}
</script>

<style>

</style>
