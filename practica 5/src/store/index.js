import { createStore } from 'vuex'

export default createStore({
  state: {

    nombre: "",
    telefono: "",
    email: "",
    tipo_pan: "",
    relleno_pan: "",
    adorno_pastel: "",
    comentarios: ""
  },
  getters: {

  },
  mutations: {
    
    //metodos 
    setNombre(state, value){
      state.nombre=value
    },
    setTelefono(state, value){
      state.telefono=value
    },
    setEmail(state, value){
      state.email=value
    },
    setTipoPan(state, value){
      state.tipo_pan=value
    },
    setRellenoPan(state, value){
      state.relleno_pan=value
    },
    setAdornoPastel(state, value){
      state.adorno_pastel=value
    },
    setComentarios(state, value){
      state.comentarios=value
    },

  },
  actions: {
  },
  modules: {
  }
})
