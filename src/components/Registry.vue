<template>
    <div class="container">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name"
            :rules="dataRules"
            label="Nombre"
            required
          ></v-text-field>
          <v-text-field
            v-model="surname"
            :rules="dataRules"
            label="Apellido"
            required
          ></v-text-field>
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
          <v-text-field
            v-model="password_confirm"
            :rules="dataRules"
            label="Confirmar contraseña"
            required
          ></v-text-field>
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="submit"
          >
            Guardar
          </v-btn>
          <v-btn color="error" class="mr-4" @click="reset"> Reiniciar entrada </v-btn>
        </v-form>
    </div>
</template>
<script>
import axios from 'axios'

export default {
  data: () => ({
    valid: true,
    name: '',
    surname: '',
    email: '',
    password: '',
    password_confirm: '',
    dataRules: [
      v => !!v || 'Campo requerido'
    ]
  }),
  methods: {
    submit () {
      if (this.password === this.password_confirm) {
        var newUser = {
          name: this.name,
          surname: this.surname,
          email: this.email,
          password: this.password
        }
        return axios.post('http://localhost:3000/api/register', newUser).then((res) => {
          this.$swal('¡Grandioso!', '¡Te has registrado con éxito!', 'success')
          this.$router.push({
            name: 'Home'
          })
        }).catch(err => {
          console.log(err)
        })
      }
    },
    reset () {
      this.$refs.form.reset()
    }
  }
}
</script>
