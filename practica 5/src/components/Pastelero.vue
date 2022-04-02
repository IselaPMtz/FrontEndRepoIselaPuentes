<template>
  <div>
    <h1>Pedidos Clientes</h1>

    <table id="customers">
      <tr>
        <th>Orden</th>
        <th>Cliente</th>
        <th>Datos Cliente</th>
        <th>Tipo Pastel</th>
      </tr>
      <tr>
        <td>{{ this.numberOrder }}</td>
        <td>{{ $store.state.nombre }}</td>
        <td>{{ $store.state.email }} {{ $store.state.telefono }}</td>
        <td>
          {{ $store.state.tipo_pan }} {{ $store.state.relleno_pan }}
          {{ $store.state.adorno_pastel }}
          {{ $store.state.comentarios }}
        </td>
      </tr>
    </table>

    <table id="cantidades">
        <th>Cantidades Sobrantes </th>
      <tr>
        <th>Sabores </th>
        <th>Adornos</th>
      </tr>
      <tr>
        <td>{{ this.cantSabor }}</td>
        <td>{{ this.cantAdornos }}</td>
      </tr>
    </table>
  </div>
</template>


<script>
export default {
  name: "PasteleroP",
  data() {
    return {
      cantSabor: " 10",
      cantAdornos: "20",
      numberOrder: "# 1",
      nombre: "",
      telefono: "",
      email: "",
      tipo_pan: "",
      relleno_pan: "",
      adorno_pastel: "",
      comentarios: "",
    };
  },
};
</script>


<style scoped>
/* Clearfix (clear floats) */
.row::after {
  content: "";
  clear: both;
  display: table;
}

#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #81bdee;
  color: white;
}
</style>