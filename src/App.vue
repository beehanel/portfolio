<template>
  <div class="app-root">
    <header class="app-header">
      <div class="app-header-inner">
        <h1 class="site-title">B. Hanel</h1>
        <p class="site-subtitle">
          Web and software developer. They/Them
        </p>
      </div>
      <nav class="main-nav">
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <RouterLink to="/unity-safety" class="nav-link">Unity Safety Tools</RouterLink>
        <RouterLink to="/discourse-research" class="nav-link">Discourse Research</RouterLink>
        <RouterLink to="/lexiconcordia" class="nav-link">LexiConcordia</RouterLink>
        <RouterLink to="/about" class="nav-link">About</RouterLink>
      </nav>
    </header>

    <main class="app-main">
      <RouterView />
    </main>

    <footer class="app-footer">
      © 2025 B. Hanel. Built with Vue 3.
    </footer>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>
