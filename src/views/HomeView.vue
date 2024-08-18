<template>
  <div class="home">
    <HelloWorld />
    <hr class="py-2">
    <FeaturesComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import FeaturesComponent from '@/components/features.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    FeaturesComponent
  }
}
</script>
