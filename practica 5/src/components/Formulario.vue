<template>
  <section class="form">
    <h1>Vuex Form - Example</h1>
    <form name="example" v-vuex-form="submit">
      <fieldset>
        <p>
          <label>Nombre Completo</label>
          <input
            name="nombreC"
            placeholder="nombre completo"
            v-vuex-form:input="{ nombreC: true }"
          />
          <span class="error" v-if="formErrors.has('alphabetic')">{{
            formErrors.first("alphabetic")
          }}</span>
        </p>

        <p>
          <label>Telefono</label>
          <input
            name="tel"
            placeholder="telefono"
            v-vuex-form:input="{ numeric: true }"
          />
          <span class="error" v-if="formErrors.has('numeric')">{{
            formErrors.first("numeric")
          }}</span>
        </p>

        <p>
          <label>Email</label>
          <input
            name="email"
            placeholder="email"
            v-vuex-form:input="{ email: true }"
          />
          <span class="error" v-if="formErrors.has('email')">{{
            formErrors.first("email")
          }}</span>
        </p>

        <button type="submit" :disabled="!formCanSubmit">Submit</button>
      </fieldset>
    </form>
  </section>
</template>

<script>
export default {
  name: "FormularioP",
};
</script>
