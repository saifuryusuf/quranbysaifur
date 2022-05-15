<script >
import { ref } from "vue";
import axios from "axios";
import NavBar from "../components/navbar.vue";

export default {
  components: { NavBar },
  data() {
    return {
      cari: "",
      surah: ref([]),
      judul: ref([]),
      name: [],
      audio: "",
      translations: ref([]),
    };
  },

  watch: {
    cari()
    {
      this.getSurah();
      this.getJudul();
      this.getAudio();
      this.getTranslate();
    }
  },

  mounted()
  {
    this.getSurah();
    this.getJudul();
    this.getAudio();
    this.getTranslate();
  },

  methods: {
    getSurah()
    {
      axios.get("https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=" + this.cari)
        .then(response =>
        {
          this.surah = response.data.verses;
        })
        .catch(error =>
        {
          console.log(error);
        });
    },
    getJudul()
    {
      axios.get("https://api.quran.com/api/v4/chapters/" + this.cari + "?language=id")
        .then(response =>
        {
          this.judul = response.data.chapter;
          this.name = this.judul?.translated_name;
        })
        .catch(error =>
        {
          console.log(error);
        });
    },
    getAudio()
    {
      axios.get('https://api.quran.com/api/v4/chapter_recitations/4/' + this.cari)
        .then(response =>
        {
          this.audio = response.data.audio_file;
        })
        .catch(error =>
        {
          console.log(error);
        });
    },
    getTranslate()
    {
      axios.get('https://api.quran.com/api/v4/quran/translations/39?chapter_number=' + this.cari)
        .then(response =>
        {
          this.translations = response.data.translations;
        })
        .catch(error =>
        {
          console.log(error);
        });
    },
  }
};
</script>

<template>
  <NavBar/>
  <div class="text-lg-center mt-5">
    <h1 class="cari text-lg-center">Tuliskan nomor urut surat untuk mencari :</h1>
    <input v-model="cari" class="form-control me-2" type="search" placeholder="Pencarian" aria-label="Search">
    <div v-if="cari">
      <div class="mt-5 text-lg-start">
        <h1>Surah {{ judul?.name_complex }} ({{ judul?.name_arabic }})</h1><br>
        <h3>Artinya {{name.name}}</h3><br>
        <h4>Diturunkan di {{ judul?.revelation_place }}</h4><br>
        <h5>Terdiri dari {{judul?.verses_count}} ayat</h5>
      </div>

        <p v-if="audio" class="text-lg-center mt-4">
          <audio v-bind:src="audio.audio_url" controls>
          </audio>
        </p>

    </div>
    <div v-if="cari" v-for="(ayat,index) in surah" :key="index">

        <h5 class="card-title text-end  mt-3">{{ ayat?.text_uthmani}} {'{{ayat?.verse_key}}'}</h5>
        <p class="card-title text-start mt-3" v-html="translations[index]?.text"></p>
      <hr>
    </div>
  </div>
</template>


<style>
.cari{
  font-family: poppins;
  font-size: 2rem;
}
</style>