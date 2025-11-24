<template>
  <div class="page home-page">
    <section class="intro-section">
      <h2>Overview</h2>
      <p>
        I build interactive safety training in Unity, research discourse in learner writing,
        and develop web tools like LexiConcordia. This site collects a few of those projects
        in a more structured, interactive way.
      </p>
    </section>

    <section class="projects-section">
      <header class="section-header">
        <h2>Projects</h2>

        <div class="projects-header-right">
          <ProjectFilterBar
            v-model="activeTech"
            :tech-options="techOptions"
          />

          <!-- View mode toggle -->
          <div class="view-toggle">
            <button
              type="button"
              class="view-toggle-btn"
              :class="{ active: viewMode === 'cards' }"
              @click="viewMode = 'cards'"
            >
              Cards view
            </button>

            <button
              type="button"
              class="view-toggle-btn"
              :class="{
                active: viewMode === 'ducks' && canUseDucks,
                disabled: !canUseDucks
              }"
              :disabled="!canUseDucks"
              @click="canUseDucks && (viewMode = 'ducks')"
            >
              Ducks view
            </button>
          </div>
        </div>
      </header>

      <!-- Ducks view (only if allowed and selected) -->
      <DuckTank
        v-if="viewMode === 'ducks' && canUseDucks"
        :projects="filteredProjects"
      />

      <!-- Normal grid view -->
      <div v-else class="projects-grid">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
        />
      </div>
    </section>

    <section class="timeline-section">
      <h2>Timeline</h2>
      <Timeline :events="timelineEvents" />
    </section>

    <section class="tasks-section">
      <TaskMatrixDemo />
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { projects } from '../data/projects';
import { timelineEvents } from '../data/timeline';

import ProjectCard from '../components/ProjectCard.vue';
import ProjectFilterBar from '../components/ProjectFilterBar.vue';
import Timeline from '../components/Timeline.vue';
import TaskMatrixDemo from '../components/TaskMatrixDemo.vue';
import DuckTank from '../components/DuckTank.vue';

const activeTech = ref('');
const viewMode = ref('ducks');   // 'ducks' | 'cards'
const isNarrow = ref(false);     // viewport < 1000px

const techOptions = Array.from(
  new Set(projects.flatMap(p => p.tech))
).sort();

const filteredProjects = computed(() => {
  if (!activeTech.value) return projects;
  return projects.filter(p => p.tech.includes(activeTech.value));
});

const canUseDucks = computed(() => !isNarrow.value);

function updateViewport() {
  if (typeof window === 'undefined') return;
  isNarrow.value = window.innerWidth < 1200;

  // If too narrow, force cards view
  if (isNarrow.value && viewMode.value === 'ducks') {
    viewMode.value = 'cards';
  }
}

onMounted(() => {
  updateViewport();
  window.addEventListener('resize', updateViewport);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateViewport);
});
</script>
