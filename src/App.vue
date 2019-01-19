<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
/* Import custom fonts. */
@import url('https://rsms.me/inter/inter-ui.css');
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500');
@supports (font-variation-settings: normal) {
  body { font-family: 'Inter UI var alt', sans-serif; }
}

body {
  padding: 0;
  margin: 0;
  font-family: 'Inter UI', sans-serif;
}

p, h1, h2, h3, h4, h5, h6 {
  padding: 0;
  margin: 0;
}
</style>
