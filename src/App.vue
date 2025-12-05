<template>
  <div class="app-root">
    <header class="app-header">
      <div class="app-header-inner">
        <h1 class="site-title">B. Hanel</h1>
        <p class="site-subtitle">
          Web and software developer
        </p>
      </div>
		<nav class="main-nav">
			<RouterLink to="/" class="nav-link">Home</RouterLink>
			<RouterLink to="/unity-safety" class="nav-link">Unity Safety Tools</RouterLink>
			<RouterLink to="/discourse-research" class="nav-link">Discourse Research</RouterLink>
			<RouterLink to="/lexiconcordia" class="nav-link">LexiConcordia</RouterLink>
			<RouterLink to="/imminent" class="nav-link">Imminent</RouterLink>
			<RouterLink to="/about" class="nav-link">About</RouterLink>

			<!-- 90s theme toggle -->
			<button class="nineties-toggle" @click="toggle90s">
				{{ is90s ? "back to the 2020s please" : "it’s the 90s" }}
			</button>
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

<script setup="">
	import { ref } from 'vue';

	const is90s = ref(localStorage.getItem("selected-theme") === "90s");

	function toggle90s() {
	const root = document.documentElement;

	if (is90s.value) {
	// turn OFF 90s mode
	root.classList.remove("theme-90s");
	localStorage.setItem("selected-theme", "2020s");
	resetColors();
	removeGhostCursor();
	is90s.value = false;
	} else {
	// turn ON 90s mode
	root.classList.add("theme-90s");
	localStorage.setItem("selected-theme", "90s");
	apply90sColors();
	initGhostCursor();
	is90s.value = true;
	}
	}

	// --- rainbow text for 90s mode ---
	function apply90sColors() {
	const colors = ["red", "orange", "green", "blue", "purple"];
	document.querySelectorAll("body *").forEach(el => {
	el.style.color = colors[Math.floor(Math.random() * colors.length)];
	});
	}

	function resetColors() {
	document.querySelectorAll("body *").forEach(el => {
	el.style.color = null;
	});
	}

	// --- ghost cursor setup ---
	function initGhostCursor() {
	document.addEventListener("mousemove", ghostTrailHandler);
	}

	function removeGhostCursor() {
	document.removeEventListener("mousemove", ghostTrailHandler);
	}

	function ghostTrailHandler(e) {
	const ghost = document.createElement("img");
	ghost.src = "src/assets/duck.png"; // replace with your ghost or cursor icon
	ghost.className = "cursor-ghost";
	ghost.style.left = `${e.pageX}px`;
	ghost.style.top = `${e.pageY}px`;

	document.body.appendChild(ghost);

	// fade out + remove after animation
	setTimeout(() => ghost.remove(), 400);
	}

	// activate on load if needed
	if (is90s.value) {
	apply90sColors();
	initGhostCursor();
	}
</script>


