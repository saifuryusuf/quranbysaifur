<script>
export default{
  name: "NavBar",
};
</script>

<template>
  <nav class="navbar navbar-dark bg-primary fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <a class="navbar-brand" href="#">AL-QUR'AN<sub>(bySaifur)</sub></a>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Router-link class="nav-link" aria-current="page" to="/"><div class="pilihan">Beranda</div></Router-link>
          </li>
          <li class="nav-item">
            <Router-link class="nav-link" to="/masukan"><div class="pilihan">Kirim Masukan</div></Router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style>
.navbar-brand {
  text-align: center;
  font-family: "Comic Sans MS";
}
.navbar{
  background: linear-gradient(darkgoldenrod, #edc479);
}
</style>

