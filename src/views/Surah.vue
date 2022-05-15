<script>
import { ref } from "vue";
import axios from "axios";
import NavBar from "../components/navbar.vue";

export default {
  components: { NavBar },
  data() {
    return {
      error: false,
      loading: true,
      info: '',
      surah: ref([]),
      ayat: ref([]),
      infosurah: ref([]),
      translation: ref([]),
    }
  },
  watch: {
    $route() {
      this.getSurah();
      this.getInfoSurah();
      this.getAyat();
      this.getTranslate();
    }
  },

  mounted() {
    this.getSurah()
    this.getInfoSurah()
    this.getAyat()
    this.getTranslate()
  },

  methods: {
    getSurah() {
      axios.get('https://api.quran.com/api/v4/chapters/' + this.$route.params.id)
        .then(response => {
          this.surah = response.data.chapter
        })
        .catch(error => {
          console.log(error)
          this.error = true
        })
        .finally(() => this.loading = false)
    },
    getInfoSurah() {
      axios.get('https://api.quran.com/api/v4/chapters/' + this.$route.params.id + '/info?language=id')
        .then(response => {
          this.infosurah = response.data.chapter_info
          this.info = this.infosurah.text
        })
        .catch(error => {
          console.log(error)
          this.error = true
        })
        .finally(() => this.loading = false)
    },
    getTranslate() {
      axios.get('https://api.quran.com/api/v4/quran/translations/134?chapter_number=' + this.$route.params.id)
        .then(response => {
          this.translation = response.data.translations
        })
        .catch(error => {
          console.log(error)
          this.error = true
        })
        .finally(() => this.loading = false)
    },
    getAyat()
    {
      axios.get("https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=" + this.$route.params.id)
        .then(response =>
        {
          this.ayat = response.data.verses;
        })
        .catch(error =>
        {
          console.log(error);
        });
    },
  }
}
</script>

<template>
  <NavBar />
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Surah {{ surah.name_complex }}
          </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body"><div v-html="info"></div></div>
        </div>
      </div>
  <h4 v-for="(ayatnya,index) in ayat">
    <div class="text-lg-end mt-5">{{ ayatnya.text_uthmani}} {'{{ayatnya.verse_key}}'}</div>
    <div class="text-lg-start mt-5">{{translation[index].text}}</div>
    <hr>
  </h4>
</template>

<style scoped>
.accordion-body{
  background: #edc479;
}
</style>
