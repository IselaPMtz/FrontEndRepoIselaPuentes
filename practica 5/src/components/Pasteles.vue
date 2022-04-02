<template>
  <h1>Pasteles Tradicionales</h1>

  <div class="row">
    <div class="column">
      <img src="../assets/pastel1.png" alt="pastel1" style="width: 50%" />
    </div>
    <div class="column">
      <img src="../assets/pastel2.png" alt="Forest" style="width: 60%" />
    </div>
    <div class="column">
      <img src="../assets/pastel3.png" alt="Mountains" style="width: 60%" />
    </div>
  </div>

  <div class="row">
    <div class="column">
      <img src="../assets/pastel4.png" alt="pastel1" style="width: 50%" />
    </div>
    <div class="column">
      <img src="../assets/pastel5.png" alt="Forest" style="width: 55%" />
    </div>
    <div class="column">
      <img src="../assets/pastel6.png" alt="Mountains" style="width: 55%" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PastelesP",
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.column {
  float: left;
  width: 33.33%;
  padding: 5px;
}

/* Clearfix (clear floats) */
.row::after {
  content: "";
  clear: both;
  display: table;
}
</style>