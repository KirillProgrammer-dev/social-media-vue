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
          <v-list-item two-line>
            <v-list-item-avatar>
              <img src="https://pixabay.com/get/ge26080380786fee529d289673c2470926cf70639430a5a94c262d0748a830e68779650c3b2c0d790c09ca3f773e22132_1280.jpg">
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="font-weight-black">Кенигсберг Кирилл</v-list-item-title>
              <v-list-item-subtitle>14 лет</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
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
        <router-view/>
      </v-container>
    </v-main>

  </v-app>
</template>

<style>

</style>
