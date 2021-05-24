<template>
  <div class="container-fluid">
    <div class="form-inline w-100 mb-5">
      <div class="w-75 mx-auto">
          <input class="form-control mr-sm-2 w-100" v-model="search" type="search" placeholder="Search" aria-label="Search">
      </div>
    </div>
    <div class="row">
       <div class="d-flex col-6" v-for="investigation in investigations" :key="investigation._id">
        <div class="mx-auto card w-100" style="min-width: 200px">
          <img
            :src="'http://localhost:3000/api/get-image/'+investigation.image"
            class="card-img-top"
          />
          <div class="card-body">
            <h5 class="card-title">{{ investigation.title }}</h5>
            <p class="card-text">
              {{ investigation.text}}
            </p>
            <div class="text-center">
              <v-btn v-bind:to="`/investigation/${investigation._id}`" text>Ver más</v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      investigations: [],
      search: ''
    }
  },
  mounted () {
    this.initWiki()
  },
  methods: {
    async initWiki () {
      return axios.get('http://localhost:3000/api/get-investigations').then((response) => {
        this.investigations = response.data.response
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  computed: {
    filterInvest: function () {
      return this.investigations.filter((investigation) => {
        return investigation.title.toLowerCase().match(this.search.toLowerCase())
      })
    }
  }
}
</script>
