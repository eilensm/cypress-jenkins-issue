<template>
  <div id="app">
    <my-input-component v-model="firstName"/>
  </div>
</template>

<script>
import MyInputComponent from "./components/MyInputComponent";

export default {
  name: "App",
  components: {
    MyInputComponent
  },
  data(){
    return {
      firstName: "John"
    };
  }
};
</script>
