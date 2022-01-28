<template>
    <div class="d-flex justify-center">
        <v-card max-width="50%" class="mt-12 pa-10">
            <v-card-title>
                Регистрация
            </v-card-title>
            <v-stepper v-model="e1">
                <v-stepper-header>
                <v-stepper-step
                    :complete="e1 > 1"
                    step="1"
                >
                    Основная информация
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step
                    :complete="e1 > 2"
                    step="2"
                >
                    Контакты
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step step="3">
                    Регистрационая информация
                </v-stepper-step>
                </v-stepper-header>

                <v-stepper-items>
                <v-stepper-content step="1">
                    <v-text-field
                        label="Введите ваше имя"
                        v-model="name"
                        outlined
                    ></v-text-field>
                    <v-text-field
                        label="Введите вашу фамилию"
                        v-model="lastname"
                        outlined
                    ></v-text-field>
                    <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="auto"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="dateFormatted"
                                label="Ваша дата рождения"
                                hint="MM/DD/YYYY format"
                                persistent-hint
                                prepend-icon="mdi-calendar"
                                v-bind="attrs"
                                @blur="date = parseDate(dateFormatted)"
                                v-on="on"
                                outlined
                            ></v-text-field>
                        </template>
                        <v-date-picker
                            v-model="date"
                            no-title
                            @input="menu = false"
                        ></v-date-picker>
                    </v-menu>

                    <v-btn
                    color="primary"
                    @click="e1 = 2"
                    >
                    Continue
                    </v-btn>
                </v-stepper-content>

                <v-stepper-content step="2">
                    <v-otp-input
                        v-model="phone"
                        length="11"
                        type="number"
                    ></v-otp-input>
                    <v-text-field
                        label="Введите почту"
                        v-model="email"
                        outlined
                    ></v-text-field>

                    <v-btn
                    color="primary"
                    @click="e1 = 3"
                    >
                        Continue
                    </v-btn>
                </v-stepper-content>

                <v-stepper-content step="3">
                    <v-text-field
                        label="Введите имя пользователя"
                        v-model="user"
                        outlined
                    ></v-text-field>
                    <v-text-field
                        label="Введите пароль"
                        v-model="password"
                        outlined
                    ></v-text-field>

                    <v-btn
                    color="primary"
                    @click="e1 = 1"
                    >
                        Continue
                    </v-btn>


                    <v-btn @click="registrate(name, lastname, password)">
                        Регистрация
                    </v-btn>
                </v-stepper-content>
                </v-stepper-items>
            </v-stepper>
        </v-card>
    </div>
</template>
<script>
export default {
    name: "Registration",
    data: () => ({
        name: null,
        lastname: null,
        password: null,
        e1: 1,
    }),
    methods: {
        registrate(name, lastname, password){
            this.axios.post("https://61f414d810f0f7001768c7e8.mockapi.io/api/social/users", {
                name: name,
                lastname: lastname,
                password: password,
            }).then(r => {
                this.$router.push("/");
                r
            });
        }
    }
}
</script>
