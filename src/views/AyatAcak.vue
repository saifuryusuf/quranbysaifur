<script setup>
import Navbar from "../components/navbar.vue";

</script>
<template>
  <Navbar/>
  <section class="hero is-small">
  </section>
  <section class="content">
    <div>
      <h2 v-if="chapter" class="text-center mt-5">Surah {{chapter.name_complex}} ({{chapter.name_arabic}})</h2>
      <p v-if="audio" class="has-text-right">
        <audio controls>
          <source :src=audio type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
      </p>
      <h3 v-if="quran" class="has-text-end quran">{{quran.text_uthmani}} {'{{quran.verse_key}}'}</h3>
      <p v-if="translation">{{translation.text}}</p>
    </div>
    <div class="has-text-centered" v-if="isLoading">
      <i class="fa-solid fa-spinner fa-pulse"></i>
    </div>
  </section>
</template>

<script>
export default {
  name: "RandomView",
  data() {
    return {
      isLoading: false,
      verse: null,
      quran: null,
      chapter: null,
      translation: null,
      tafsir: null,
      audio: null,
    }
  },
  methods:{
    async getRandomAyat(){
      const random = Math.floor(Math.random() * 100);
      this.fetchQuran("verses/random?language=id&words=false&translations=id&audio=3&fields="+random)
        .then(res => {
          const verse = res.verse;
          this.verse = verse;
          this.audio = this.getAudioPath(verse.audio.url);
          /**
           * Get verse key
           */
          const verseKey = verse.verse_key;
          this.getQuran(verseKey);
          /**
           * Get chapter number
           */
          const chapterNumber = verseKey.split(':')[0];
          this.getChapter(chapterNumber);
          /**
           * Get translate
           */
          this.getTranslate(verseKey);
        })
    },

    async getQuran(verseKey){
      this.fetchQuran('quran/verses/uthmani?verse_key='+verseKey)
        .then(res => {
          this.quran = res.verses[0]
        })
    },

    getAudioPath(path){
      return 'https://verses.quran.com/'+path;
    },

    async getChapter(id){
      this.fetchQuran('chapters/'+id+'?language=id')
        .then(res => {
          this.chapter = res.chapter
        })
    },

    async getTranslate(verseKey){
      this.fetchQuran('quran/translations/33?verse_key='+verseKey)
        .then(res => {
          this.translation = res.translations[0]
        })
    },



    async fetchQuran(path){
      this.isLoading = true;
      const url = "https://api.quran.com/api/v4/"+path;
      return fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          if (!res.ok) {
            const error = new Error(res.statusText);
            error.json = res.json();
            throw error;
          }
          return res.json();
        })
        .catch(err => {
          alert(err.toString())
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  },
  mounted() {
    this.getRandomAyat()
  }
}
</script>
<style>
.content{
  font-family: fontArab;
}

</style>
