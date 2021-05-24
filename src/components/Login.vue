<template>
    <div class="container">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="email"
            :rules="dataRules"
            label="Correo"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            :rules="dataRules"
            label="Contraseña"
            required
          ></v-text-field>
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="submit"
          >
            Ingresar
          </v-btn>
        </v-form>
    </div>
</template>
<script>
import axios from 'axios'

export default {
  data: () => ({
    valid: true,
    email: '',
    password: '',
    dataRules: [
      v => !!v || 'Campo requerido'
    ]
  }),
  methods: {
    submit () {
      var login = {
        email: this.email,
        password: this.password
      }
      return axios.post('http://localhost:3000/api/login', login).then((res) => {
        if (res && res.data.user) {
          localStorage.setItem('identity', JSON.stringify(res.data.user))
          this.identity = JSON.parse(localStorage.getItem('identity'))
          this.getToken()
        }
        this.$router.push({
          name: 'Home'
        })
      }).catch(err => {
        console.log(err)
      })
    },
    getToken () {
      var login = {
        email: this.email,
        password: this.password,
        gettoken: true
      }
      axios.post('http://localhost:3000/api/login', login).then((res) => {
        if (res && res.data.token) {
          localStorage.setItem('token', JSON.stringify(res.data.token))
        }
      })
    },
    reset () {
      this.$refs.form.reset()
    }
  }
}
</script>
