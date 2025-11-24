<template>
  <article class="project-card">
    <h3 class="project-title">{{ project.title }}</h3>
    <p class="project-description">
      {{ project.shortDescription }}
    </p>

    <div class="project-meta">
      <span class="project-role">{{ project.role }}</span>
    </div>

    <div class="project-tags">
      <span
        v-for="tag in project.tags"
        :key="tag"
        class="tag-pill"
      >
        {{ tag }},
      </span>
    </div>

    <RouterLink
      v-if="project.link"
      :to="project.link"
      class="project-link"
    >
      View details
    </RouterLink>
  </article>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
});
</script>
