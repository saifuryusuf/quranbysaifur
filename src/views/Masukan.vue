<script setup>
import Navbar from "../components/navbar.vue";

</script>

<template>
  <navbar />
  <div class="pesan text-center">Kirimkan Masukan</div>
  <form action="forms/contact.php" method="post" role="form" class="php-email-form mt-4">
    <div class="row">
      <div class="col-md-6 form-group">
        <input type="text" name="name" class="form-control" id="name" placeholder="Nama Anda" required>
      </div>
      <div class="col-md-6 form-group mt-3 mt-md-0">
        <input type="email" class="form-control" name="email" id="email" placeholder="Email Anda" required>
      </div>
    </div>
    <div class="form-group mt-3">
      <input type="text" class="form-control" name="subject" id="subject" placeholder="Subjek" required>
    </div>
    <div class="form-group mt-3">
      <textarea class="form-control" name="message" rows="5" placeholder="Pesan" required></textarea>
    </div>
    <div class="my-3">
      <button type="submit" class="btn btn-primary text-center">Kirim</button>
      <div class="error-message"></div>
      <div class="sent-message text-center">Pesan Anda Akan Dikirim. Terimakasih!</div>
    </div>
  </form>
    <section class="page-section" id="team">
        <div class="text-center">
          <div class="sent-message text-center">Anda juga bisa menghubungi kami melalui whatsapp di bawah ini!</div>
          <div class="team-member">
            <h4 class="media"><a target="_blank" href="https://wa.me/6282288320909">
              <div class="pilihan">Whatsapp</div>
            </a></h4>
          </div>
        </div>
    </section>
</template>



<style scoped>
.pesan{
  font-family: poppins;
  font-size: 25px;
}
.team-member {
  margin-bottom: 3rem;
  text-align: center;
}
.team-member img {
  width: 14rem;
  height: 14rem;
  border: 0.5rem solid rgba(0, 0, 0, 0.1);
}
.team-member h4, .team-member .h4 {
  margin-top: 1.5rem;
  margin-bottom: 0;
}

.page-section {
  background-size: cover;
  background-repeat: no-repeat;
}
.media{
  font-family: "Segoe UI";
  font-size: 25px;
  color: white;
}
</style>

