<template>
    <div class="page home-page">
        <section class="intro-section">
            <h2>Overview</h2>
            <p>
                Instructional and curriculum designer with a strong background in educational technology, interactive learning, and software development. Give me a training manual, technical procedure, or concept to be taught, and I can transform it into a structured, engaging learning experience. I specialize in translating complex information into clear learning objectives, activities, and interactive training, while my experience with Unity, Articulate Storyline, and software development allows me to build the technical solutions that bring those experiences to life. 
            </p>
        </section>

        <section class="projects-section">
            <header class="section-header">
                <h2>Projects</h2>

                <div class="projects-header-right">
                    <ProjectFilterBar v-model="activeTech"
                                      :tech-options="techOptions" />
                </div>
            </header>

            <div class="projects-grid">
                <ProjectCard v-for="project in filteredProjects"
                             :key="project.id"
                             :project="project" />
            </div>
        </section>

        <section class="timeline-section">
            <h2>Timeline</h2>
            <Timeline :events="timelineEvents" />
        </section>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import { projects } from '../data/projects';
    import { timelineEvents } from '../data/timeline';

    import ProjectCard from '../components/ProjectCard.vue';
    import ProjectFilterBar from '../components/ProjectFilterBar.vue';
    import Timeline from '../components/Timeline.vue';

    const activeTech = ref('');

    const techOptions = Array.from(
        new Set(projects.flatMap(p => p.tech))
    ).sort();

    const filteredProjects = computed(() => {
        if (!activeTech.value) return projects;
        return projects.filter(p => p.tech.includes(activeTech.value));
    });
</script>
