<template>
  <div class="timeline">
    <div
      v-for="event in events"
      :key="event.year + event.title"
      class="timeline-item"
    >
      <div class="timeline-year">{{ event.year }}</div>
      <div class="timeline-content">
        <h3>{{ event.title }}</h3>
        <p>{{ event.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  events: {
    type: Array,
    required: true
  }
});
</script>
