<template>
  <div class="container">
    <div class="card w-100">
      <img :src="'http://localhost:3000/api/get-image/' + this.investigation.image" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ this.investigation.title }}</h5>
        <p class="card-text">
          {{ this.investigation.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      investigation: []
    }
  },
  mounted () {
    this.showInvestigation()
  },
  methods: {
    async showInvestigation () {
      return axios.get('http://localhost:3000/api/get-investigation/' + this.$route.params.id).then(response => {
        this.investigation = response.data.investigation
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
