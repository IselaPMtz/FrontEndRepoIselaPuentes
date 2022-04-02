<template>
  <div class="header">
    <img alt="Pasteleria Delicias" src="../assets/reposteria-logo.png" />

    <div class="navbar">
      <router-link to="/" class="center">{{ mLink1 }}</router-link>
      <router-link to="/pasteles">{{ mLink2 }}</router-link>
      <router-link to="/personalizar">{{ mLink3 }}</router-link>
      <router-link to="/pedidos">{{ mLink4 }}</router-link>
      <router-link to="/contactanos">{{ mLink5 }}</router-link>
      <router-link to="/pastelero">{{ mLink6 }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderP",
  data() {
    return {
      imgLogo: "../assets/reposteria-logo.png",
      //imgLogo: "./img/reposteria-logo.png",
      mLink1: "Inicio",
      mLink2: "Pasteles",
      mLink3: "Personalizar Pastel",
      mLink4: "Pedidos",
      mLink5: "Contactanos",
      mLink6: "Pastelero",
    };
  },
  //props: {
  // imgLogo: String,
  // mLink1: String,
  // mLink2: String,
  // mLink3: String,
  // mLink4: String,
  // mLink5: String,
  //},
};
</script>

<style scoped>
.header {
  padding: 10px;
  /* some padding */
  text-align: center;
  /* center the text */
  background: white;
  /* green background */
  color: white;
  /* white text color */
}

/* Increase the font size of the h1 element */
.header h1 {
  font-size: 30px;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
}

/* Style the top navigation bar */
.navbar {
  overflow: hidden;
  background-color: #efbeaf;
}

/* Style the navigation bar links */
.navbar a {
  float: left;
  display: block;
  color: #6a492c;
  text-align: center;
  padding: 14px 20px;
  text-decoration: none;
}

/* Right-aligned link */
.navbar a.right {
  float: right;
}

/* Change color on hover */
.navbar a:hover {
  background-color: #ddd;
  color: black;
}
</style>
