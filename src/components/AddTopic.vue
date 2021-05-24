<template>
  <div class="container">
    <div class="row">
      <div class="mx-auto w-75">
        <h1 class="text-center">Agregar un nuevo tema a la Wiki</h1>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="title"
            :rules="titleRules"
            label="Titulo"
            required
          ></v-text-field>
          <v-textarea
          name="input-7-1"
          v-model="text"
          label="Texto"
          :rules="textRules"
          hint="Texto del tema que desea agregar"
          required
          ></v-textarea>
          <v-file-input
            accept="image/*"
            @change="getImage($event)"
            label="File input"
            :rules="fileRules"
            required
            ></v-file-input>
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
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    valid: true,
    title: '',
    text: '',
    file: '',
    titleRules: [
      v => !!v || 'El título es requerido'
    ],
    textRules: [
      v => !!v || 'El texto es requerido'
    ],
    fileRules: [
      v => !!v || 'La imagen es requerida'
    ]
  }),
  methods: {
    getImage (e) {
      let imagen = e
      this.file = imagen
    },
    submit () {
      // console.log(this.file)
      if (this.$refs.form.validate()) {
        const formData = new FormData()
        formData.append('image', this.file)
        formData.append('title', this.title)
        formData.append('text', this.text)
        return axios.post('http://localhost:3000/api/add-investigation', formData).then(() => {
          this.$swal('¡Grandioso!', '¡Tu texto ha sido agregado exitosamente!', 'success')
          this.$router.push({
            name: 'Home'
          })
        }).catch((err) => {
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
