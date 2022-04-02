<template>
  <div class="home">
    <!--<h1>{{ nameStore }}</h1>-->
    <!-- <HeaderP imgLogo ="./img/reposteria-logo.png" mLink1="Inicio" mLink2="Pasteles " 
     mLink3="Personaliza tu Pastel" mLink4="Pedidos" mLink5="Contactanos"/> -->
    <div class="row">
      <div class="column">
        <img src="../assets/pastel_banner.png" alt="pastel1" style="width: 100%" />
      </div>
    </div>

    <div class="text">
      <p>
        Horario de atencion: 8am -8pm<br />
        Encuentranos en : Calle Loma Bonita #531<br />
        Telefono: 811-xx-xx-xx<br />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeP",
  //props: {
  //  nameStore: String,
  //},
};
</script>

<style scoped>
.column {
  float: left;
  width: 99%;
  padding: 5px;
}

/* Clearfix (clear floats) */
.row::after {
  content: "";
  clear: both;
  display: table;
}

.text {
  padding: 10px;
  /* some padding */
  text-align: center;
  /* center the text */
  background: white;
  /* green background */
  color: #6a492c;
  /* white text color */
}
</style>
