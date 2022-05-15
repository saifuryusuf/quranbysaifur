<script>
import { ref } from "vue";
import axios from "axios";
import NavBar from "../components/navbar.vue";

export default {
  components: { NavBar },
  data()
  {
    return {
      error: false,
      loading: true,
      juz: ref([]),
      isijuz: ref([]),
      artijuz: ref([]),
    }
  },
  watch:{
    $route(){
      this.getJuz();
      this.getIsiJuz();
      this.getArtiJuz();
    }
  },

  mounted()
  {
    this.getJuz()
    this.getIsiJuz()
    this.getArtiJuz()
  },

  methods: {
    getJuz()
    {
      axios.get('https://api.quran.com/api/v4/juzs/' + this.$route.params.id)
        .then(response =>
        {
          this.juz = response.data.juz;

        })
        .catch(error =>
        {
          console.log(error)
          this.error = true
        })
        .finally(() => this.loading = false)
    },
    getIsiJuz()
    {
      axios.get('https://api.quran.com/api/v4/quran/verses/uthmani?juz_number=' + this.$route.params.id)
        .then(response =>
        {
          this.isijuz = response.data.verses;
        })
        .catch(error =>
        {
          console.log(error)
          this.error = true
        })
        .finally(() => this.loading = false)
    },
    getArtiJuz()
    {
      axios.get('https://api.quran.com/api/v4/quran/translations/33?juz_number=' + this.$route.params.id)
        .then(response =>
        {
          this.artijuz = response.data.translations;
        })
        .catch(error =>
        {
          console.log(error)
          this.error = true
        })
        .finally(() => this.loading = false)
    },
  }
}
</script>

<template>
  <NavBar/>
  <div class="text-center mt-5">
    <h2>Juz {{ $route.params.id }}</h2>
    <h4 v-for="(quran,index) in isijuz" :key="index">
      <div class="text-lg-end mt-5">{{ quran.text_uthmani }} {'{{quran.verse_key}}'}</div>
      <div class="text-lg-start mt-5">{{artijuz[index].text}}</div>
      <hr>
    </h4>
  </div>
</template>
<style>
.text-center{
  font-family: fontArab;
}
</style>