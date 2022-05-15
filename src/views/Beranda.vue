<script setup>
import Navbar from "../components/navbar.vue";
import { onMounted } from "vue";

onMounted(() => {
  document.getElementsByTagName("body")[0].style.backgroundColor =" #87cefa";
  document.getElementsByTagName("body")[0].style.backgroundSize ="cover";
});
</script>

<template>
  <navbar />
  <section class="judul">
    <div class="container py-5">
      <div class="row">
        <div class="">
          <div class="col-lg-12">
            <h2>
              Website ini merupakan tugas UTS mata kuliah Pemrograman Web<br>
              Prodi Informatika di Universitas Islam Negeri Sultan Syarif Kasim Riau<br>
            </h2>
            <hr>
            <h4>
              Website ini menggunakan API dari <a href="https://quran.api-docs.io/v4/getting-started/introduction">Quran.com</a><br>
            </h4>
            <hr>
            <h5>
              Untuk memulai pilihlah tab diatas sesuai yang anda inginkan,<br>
              berdasarkan juz, surah, pencarian berdasarkan nomor surat, atau ayat acak.
            </h5>
            <!--<button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-html="true" title="Github"> <i class="bi bi-heart-fill text-danger"></i>  <i class="bi text-danger"></i>  <a href="https://github.com/ranafatrika/pemprograman-web-uts-RanaFatrika.git" class="text-white" >View Code</a>
            </button>-->
          </div>
        </div>
      </div>
    </div>
  </section>


</template>
