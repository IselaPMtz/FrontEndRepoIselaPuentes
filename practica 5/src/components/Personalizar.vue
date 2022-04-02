<template>
  <div class="container">

     <label for="nombre">Nombre Completo</label>
      <input
        type="text"
        id="fname"
        name="nombre"
        placeholder="Nombre Completo.."
        v-model="nombre"
      />

      <label for="tel">Telefono</label>
      <input
        type="text"
        id="tel"
        name="telefono"
        placeholder="Telefono.."
        v-model="telefono"
      />

      <label for="email">Email/CorreoElectronico</label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="ejemplo@mail.com.."
        v-model="email"
      />

      <label for="Tipo Pan">Tipo de Pan</label>
      <select id="tpan" name="tipo_pan" v-model="tipo_pan">
        <option value="vainilla">Vainilla</option>
        <option value="chocolate">Chocolate</option>
        <option value="zanahoria">Zanahoria</option>
      </select>

      <label for="Relleno">Relleno</label>
      <select id="rellenoPan" name="relleno_pan" v-model="relleno_pan">
        <option value="mermelada">Mermelada</option>
        <option value="quesoCrema">Queso Crema</option>
        <option value="cajeta">Cajeta</option>
        <option value="almendras">Almendras</option>
      </select>

      <label for="Adornos">Cubierta</label>
      <select id="adornoP" name="adorno_pastel" v-model="adorno_pastel">
        <option value="chantilly">Chantilly</option>
        <option value="merengue">Merengue</option>
        <option value="fondant">Fondant</option>
      </select>

      <label for="subject">Comentario sobre el pedido</label>
      <textarea
        id="subject"
        name="subject"
        placeholder="Comentarios.."
        style="height: 200px"
        v-model="comentarios"
      ></textarea>
     
     <button @click.prevent="enviarFrm" type="button" name="btn">Enviar</button>
  </div>
</template>

<script>
export default { 
  name: "PersonalizarP",
  methods: {
    enviarFrm: function () {
      this.nombre="";
      this.$router.push("/pastelero");
    },
  },
  computed: {
    //getFormsValues() {
    // this.$store.commit("setNombre", nombre);

    nombre: {
      get() {
        return this.$store.state.nombre;
      },
      set(value) {
        this.$store.commit("setNombre", value);
      },
    },

    telefono: {
      get() {
        return this.$store.state.telefono;
      },
      set(value) {
        this.$store.commit("setTelefono", value);
      },
    },
    email: {
      get() {
        return this.$store.state.email;
      },
      set(value) {
        this.$store.commit("setEmail", value);
      },
    },
    tipo_pan: {
      get() {
        return this.$store.state.tipo_pan;
      },
      set(value) {
        this.$store.commit("setTipoPan", value);
      },
    },
    relleno_pan: {
      get() {
        return this.$store.state.relleno_pan;
      },
      set(value) {
        this.$store.commit("setRellenoPan", value);
      },
    },
    adorno_pastel: {
      get() {
        return this.$store.state.adorno_pastel;
      },
      set(value) {
        this.$store.commit("setAdornoPastel", value);
      },
    },
    comentarios: {
      get() {
        return this.$store.state.comentarios;
      },
      set(value) {
        this.$store.commit("setComentarios", value);
      },
    },
  }, //computed
};
</script>

<style scoped>
.column {
  float: left;
  width: 50%;
  padding: 5px;
}

.column2 {
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

input[type="text"],
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type="submit"] {
  background-color: #04aa6d;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>
