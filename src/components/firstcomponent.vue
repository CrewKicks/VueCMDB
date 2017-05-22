<template>
  <div id="firstcomponent">
    <h1> i am first</h1>
    <a>written by {{ author }}</a>
  </div>
</template>
<script>
  export default {
      data() {
          return {
              author: 'crewkicks'
          }
      }
  }
</script>
<style>

</style>
