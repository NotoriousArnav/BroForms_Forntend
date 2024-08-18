<template>
  <div class="p-4 rounded text-center">
    <h1 class="bounce text-5xl font-bold py-1">
      A <span class="hover:border-b-4 transition-all duration-100 border-black">FOSS</span> Solution for Every Form and Developer
    </h1>
    <h1 class="text-3xl italic inline-flex py-2">
      Build Forms for&nbsp;
      <VueTyped
        :strings="['Firms', 'Survey', 'Coders', 'Builders', 'Creators', 'Consumers', 'Thinkers']"
        :typeSpeed="50"
        :backSpeed="30"
        :showCursor="true"
        :loop="true"
        class=""
      >
      </VueTyped>
    </h1>
    <p class="py-2 italic">Your Page, Your CSS. <br>
    Forms Integrate with your webpage using CSS of your page!</p>

    <span class="w-auto py-2 inline-flex gap-2">
      <a href="#features" class="hero-btn group">Know More <i class="hover:animate-bounce group-hover:animate-bounce">👇</i> </a>
    <button class="gs-btn text-center items-center justify-center">
  <svg
    height="24"
    width="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path
      d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
      fill="currentColor"
    ></path>
  </svg>
      Get Started</button>
    </span>
    <div class="flex flex-wrap flex-row justify-center gap-2 h-full">
<div class="bg-black text-white p-6 rounded-lg shadow-lg font-mono text-left text-center items-center justify-center">
  <div class="flex justify-between items-center">
    <div class="flex space-x-2 text-red-500">
      <div class="w-3 h-3 rounded-full bg-red-500"></div>
      <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div class="w-3 h-3 rounded-full bg-green-500"></div>
    </div>
    <p class="text-sm">vim</p>
  </div>
  <VCodeBlock :code="code" highlightjs lang="html" theme="neon-bunny" />
  <p class="text-green-400 gap-2 flex flex-row w-full">
      <span class="bg-white inline-flex text-black m-0 p-0">NORMAL</span>
      <span>form.html</span>
      <span class="grow text-right">All</span>
  </p>
</div>
<div class="bg-gray-200 text-black p-6 rounded-lg shadow-lg font-mono text-left text-center items-center justify-center">
  <div class="flex justify-between items-center">
    <div class="flex space-x-2 text-red-500">
      <div class="w-3 h-3 rounded-full bg-red-500"></div>
      <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div class="w-3 h-3 rounded-full bg-green-500"></div>
    </div>
    <p class="text-sm">Preview</p>
  </div>

  <div class="items-left text-left">
<container class="">
<br>
<label for="name">Name:</label>
<input class="rounded p-2 text-black bg-white w-full border-2 border-blue-500" type="text" id="name" name="name"><br>
<label for="email">Email:</label>
<input type="email" class="rounded p-2 text-black bg-white w-full border-2 border-blue-500" id="email" name="email"><br>
<label for="phone">Phone Number:</label>
<input type="tel" class="rounded p-2 text-black bg-white w-full border-2 border-blue-500" id="phone" name="phone"><br>
<br>
<a class="rounded border-2 border-blue-500 hover:bg-blue-500 hover:text-white p-2 transition">Submit</a>
</container>
    
  </div>

</div>

    </div> 
  </div>
  
</template>

<script>
import { ref } from 'vue'

const backendUrl = process.env.VUE_APP_BACKEND_URL;

const code = ref(`
<form 
  action="${backendUrl}/forms/{id}"
  method="post"
  >
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  <label for="phone">Phone Number:</label>
  <input type="tel" id="phone" name="phone">
  <input type="submit" value="Submit">
</form>
`)

export default {
  name: 'HelloWorld', // Hero Component
  components: {
  },
  data() {
    return {
      code
    }
  }
}
</script>

<style>
/* From Uiverse.io by e-coders */ 
.hero-btn {
 appearance: none;
 background-color: #ced8ff;
 border: 0.125em solid #1A1A1A;
 border-radius: 0.9375em;
 box-sizing: border-box;
 color: #3B3B3B;
 cursor: pointer;
 display: inline-block;
 font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
 font-size: 16px;
 font-weight: 600;
 line-height: normal;
 margin: 0;
 min-height: 3.75em;
 min-width: 0;
 outline: none;
 padding: 1em 2.3em;
 text-align: center;
 text-decoration: none;
 transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
 user-select: none;
 -webkit-user-select: none;
 touch-action: manipulation;
 will-change: transform;
 animation-duration: 0.5s;
 animation-iteration-count: infinite;
}
 .hero-btn:disabled {
    pointer-events: none;
  }

 .hero-btn:hover {
  color: #fff;
  background-color: #0a3cff;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
  }
 .hero-btn:active {
  box-shadow: none;
  transform: translateY(0);
  }


/* From Uiverse.io by adamgiebl */ 
.gs-btn {
  display: flex;
  align-items: center;
  font-family: inherit;
  cursor: pointer;
  font-weight: 500;
  font-size: 17px;
  padding: 0.8em 1.3em 0.8em 0.9em;
  color: white;
  background: #ad5389;
  background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
  border: none;
  letter-spacing: 0.05em;
  border-radius: 16px;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
}

.gs-btn svg {
  margin-right: 3px;
  transform: rotate(30deg);
  transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
}

.gs-btn span {
  transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
}

.gs-btn:hover svg {
  transform: translateX(5px) rotate(90deg);
}

.gs-btn:hover span {
  transform: translateX(7px);
}

.gs-btn:hover {
  box-shadow: rgba(0,0,0,0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.gs-btn:active {
  transform: scale(0.95);
  transform: translateY(0);
  box-shadow: none;
}

</style>
