<template>
  <!--
  <nav>
    <router-link to="/">
      Home
    </router-link> |
    <router-link to="/about">
      About
    </router-link>
  </nav>
  <router-view/>
  -->
  <header class="p-2">
  <nav class="p-2 border-2 w-full border-blue-100 rounded shadow-lg flex gap-4">
    <strong class="text-2xl px-4">
      <router-link to="/">
&lt;/&gt;
        BroForms
      </router-link>
    </strong>
    <button class="sm:hidden" @click="showMenu = !showMenu">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>

    <ul :class="{ 'hidden': !showMenu }" class="sm:flex items-center text-center gap-4 px-3">
      <li class="hover:border-b-2 border-blue-500 transition-all">
        <router-link to="/">
          Docs
        </router-link>
      </li>
      <li class="hover:border-b-2 border-blue-500 transition-all">
        <router-link to="/">
          Resources
        </router-link>
      </li>
      <li class="hover:border-b-2 border-blue-500 transition-all">
        <router-link to="/">
          Support
        </router-link>
      </li>
    </ul>
    <ul :class='{ "hidden": !showMenu }' class="sm:flex text-center gap-4 items-center ml-auto px-3">
      <li class="py-1">
        <router-link to="/login">
          Login
        </router-link>
      </li>
      <li class="py-1">
        <router-link class="rounded-lg hover:bg-blue-500 hover:text-white border-2 border-slate-500 transition p-2"  to="/register">
          Register
        </router-link>
      </li>
    </ul>
  </nav>
  </header>
  <main class="p-2">
    <router-view/>
  </main>
  <footer>
    <p>

    </p>
  </footer>
</template>

<style>
html {
  scroll-behavior: smooth;
}

nav {
  background: #ced8ef;
}
</style>

<script>
export default {
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    }
  }
}
</script>
