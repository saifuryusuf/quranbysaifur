<script>
import { RouterView } from 'vue-router'
import { ref } from "vue";
import axios from "axios";

export default {
  data()
  {
    return {
      error: false,
      loading: true,
      juzs: ref([]),
      surahs: ref([])
    }
  },

  components: {
    RouterView
  },

  mounted()
  {
    this.getJuz()
    this.getSurah()
  },

  methods: {
    getJuz()
    {
      axios.get('https://api.quran.com/api/v4/juzs')
        .then(response =>
        {
          this.juzs = response.data.juzs
        })
        .catch(error =>
        {
          console.log(error)
          this.error = true
        })
        .finally(() => this.loading = false)
    },
    getSurah()
    {
      axios.get('https://api.quran.com/api/v4/chapters')
        .then(response =>
        {
          this.surahs = response.data.chapters
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
  <body>
  <section v-if="error">
    <div class="container">
      <h1 class="text-center">KODINGAN ERROR!</h1>
    </div>
  </section>

  <section v-else>
    <div v-if="loading" class="container">
      <h1 class="text-center">Wait...</h1>
    </div>

    <div v-else class="container">
      <ul class="nav nav-pills justify-content-center">
        <li class="nav-item">
          <router-link :to="{ name: 'pencarian' }" class="nav-link"><div class="pilihan">Pencarian</div></router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
             aria-expanded="false"><div class="pilihan">Surah</div></a>
          <ul class="dropdown-menu">
            <li v-for="surah in surahs" :key="surah.id">
              <router-link :to="{ name: 'surahs', params: { id: surah.id } }" class="dropdown-item">{{surah.name_complex}}</router-link>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
             aria-expanded="false"><div class="pilihan">Juz</div></a>
          <ul class="dropdown-menu">
            <li v-for="juz in juzs" :key="juz.id">
              <router-link :to="{ name: 'juzs', params: { id: juz.id } }" class="dropdown-item">{{ juz.juz_number }}
              </router-link>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'acak' }" class="nav-link"><div class="pilihan">Ayat Acak</div></router-link>
        </li>
      </ul>
      <RouterView />
    </div>

  </section>
  </body>
</template>

<style>
.container {
  margin-top: 3rem;
  font-size: 20px;
}
.nav-item{
  background: rgb(180, 133, 14, 0.2);
  border-style: double;
  border-width: 4px;
  margin-right: 20px;
}
.nav-link{
  margin-left: 10px;
  margin-right: 10px;
}
ul{
  padding: 20px;
}
.pilihan{
  color: black;
  font-weight: bold;
}
body{
  background-image: url("assets/images.jpg");
}
</style>