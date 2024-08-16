<template>
  <div class="about">
    <h1 class="text-3xl font-bold underline">This is an about page</h1>
    <h2 class="text-2xl">Environment Variables</h2>
    <p class="">
      Backend URL: {{ backendUrl }}
    </p>
  </div>
</template>

<script>
// @ is an alias to /src

// Show Backend URL in About View
const backendUrl = process.env.VUE_APP_BACKEND_URL

export default {
  name: 'AboutView',
  data() {
    return {
      backendUrl
    }
  }
}
</script>
