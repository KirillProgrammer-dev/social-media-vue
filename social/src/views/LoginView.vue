<template>
    <div class="d-flex justify-center">
        <v-card width="600px" class="mt-12 pa-10">
            <v-card-title>
                Войдите в аккаунт
            </v-card-title>

            <v-text-field
                label="Введите ваше имя"
                v-model="name"
                outlined
            ></v-text-field>

            <v-text-field
                label="Введите пароль"
                v-model="password"
                outlined
                type="password"
            ></v-text-field>

            <v-btn @click="authenticate(name, password)">
                Войти
            </v-btn>
        </v-card>
    </div>
</template>
<script>
export default {
    name: "Login",
    data: () => ({
        name: null,
        password: null,
    }),
    methods: {
        authenticate(name, password){
            this.axios.get("https://61f414d810f0f7001768c7e8.mockapi.io/api/social/users").then(response => {
                for(let i of response.data){
                    if (i.name == name){
                        if (i.password == password){
                            this.$emit("login", i)
                            this.$router.push("/");
                        }
                        else{
                            window.alert("Ваш пароль неверен")
                        }
                    }
                }
        });
        }
    }
}
</script>
