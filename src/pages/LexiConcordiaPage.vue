<template>
  <div class="page lexiconcordia-page">
    <h2>LexiConcordia</h2>
    <p class="page-tagline">
      A bilingual technical vocabulary platform for engineering students.
    </p>

    <CollapsibleSection title="Overview" :initiallyOpen="true">
      <p>
        Brief description of LexiConcordia, target users, and main features. You can add architecture diagrams,
        screenshots, and implementation details here.
      </p>
    </CollapsibleSection>

    <CollapsibleSection title="Tech Stack">
      <p>
        Vue-based front end, backend stack, database design, and anything else you want to highlight (APIs, deployment,
        analytics).
      </p>
    </CollapsibleSection>
  </div>
</template>

<script setup>
import CollapsibleSection from '../components/CollapsibleSection.vue';
</script>
