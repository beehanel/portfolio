<template>
  <div class="page unity-safety-page">
    <h2>Unity-Based Virtual Safety Labs</h2>
    <p class="page-tagline">
      Modular, data-driven lab safety training for multiple engineering departments, using Unity and VR/desktop builds.
    </p>

	  <nav>
		  <a href="#editor-modularity">Editor Modularity Demo</a>
		  <a href="#human-authoring">Human-Centered Authoring</a>
		  <a href="#editor-tools-packages">Editor Tools & Packages</a>
		  <a href="#case-study">Technical Case Study</a>
		  <a href="#editor-tooling-overview">Editor Tooling Overview</a>
		  <a href="#workflow-video">Editor Workflow Video</a>
		  <a href="#ai-readiness">AI Readiness</a>
	  </nav>

	  <main>

		  <section id="video-demo">
				  <div>
					  <div class="placeholder">
						  <iframe width="100%" height="500" src="https://www.youtube.com/embed/fGo_18oat3Q?si=AP4gM579muZafafx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe>
					  </div>
				  </div>
		  </section>

		  <!-- 6. Technical Case Study -->
		  <section id="case-study">
			  <h2>Technical Case Study: Bioengineering Lab Safety Module</h2>
			  <p class="tagline">
				  End-to-end feature ownership: from lab visit to editor tooling to shipping a training module.
			  </p>

			  <div class="two-col">
				  <div>
					  <div class="subheading">Problem</div>
					  <p>
						  The bioengineering teaching lab needed consistent, engaging safety training that went beyond static
						  manuals and slide decks. New students struggled to remember step-by-step procedures and lab-specific
						  hazards.
					  </p>

					  <div class="subheading">Solution</div>
					  <ul>
						  <li>Interactive 3D VR/desktop module for lab safety procedures.</li>
						  <li>Modular step system covering preparation, PPE, equipment use, cleanup, and emergency response.</li>
						  <li>Custom editors that allow staff to update procedures without modifying scripts.</li>
					  </ul>

					  <div class="subheading">Editor Tooling</div>
					  <ul>
						  <li>Step authoring inspectors with text, audio, and action configuration.</li>
						  <li>Reusable “station” prefabs wired into a central sequence controller.</li>
						  <li>Editor-time validation to catch missing assets or unassigned references.</li>
					  </ul>

					  <div class="subheading">Outcome</div>
					  <ul>
						  <li>Positive feedback from grad students and lab assistants on usability and clarity.</li>
						  <li>Reusable tooling now applied to multiple labs with minimal code changes.</li>
						  <li>Foundation for analytics and SCORM integration to track completion and performance.</li>
					  </ul>
				  </div>

				  <div>
					  <div class="placeholder">
						  <strong>IMAGE PLACEHOLDER</strong>
						  <!-- Replace with <img src="images/bio-case-study-collage.png" alt="Bioengineering lab safety case study screenshots"> -->
					  </div>
				  </div>
			  </div>
		  </section>

		  <!-- 1. Modularity / Editor Tool Demo -->
		  <section id="editor-modularity">
			  <h2>Modular Unity Editor Workflow: Custom Inspectors in Action</h2>
			  <p class="tagline">
				  A data-driven step system with custom inspectors that allows non-programmers to configure VR safety training.
			  </p>

			  <div class="two-col">
				  <div>
					  <p>
						  In my lab safety projects, each training sequence is built from modular "steps" and "stations".
						  Professors and lab assistants can configure:
					  </p>
					  <ul>
						  <li>Step name and description (e.g., “Clear broken glass safely”).</li>
						  <li>Associated narration audio (mp3 selection in the inspector).</li>
						  <li>On-screen instructional text and prompts.</li>
						  <li>Required player action (pick up, dispose, lock object in place, etc.).</li>
						  <li>Post-actions in the 3D scene (enable/disable objects, spawn effects, update UI).</li>
					  </ul>

					  <p>
						  All of these are exposed through custom Unity Editor inspectors. The underlying C# remains stable,
						  while content and logic can be modified quickly through data definitions. This reduces maintenance
						  cost and makes the project easy to extend across multiple labs and departments.
					  </p>
				  </div>

				  <div>
					  <div class="placeholder">
						  <!--<img src="assets/customeditor.gif"
							  alt="Editor tool demonstration"
							  style="width:100%; border-radius:12px;"> -->
						  </div>
				  </div>
			  </div>
		  </section>

		  <!-- 2. Human-Centered / AI-Friendly Authoring -->
		  <section id="human-authoring">
			  <h2>Human-Centered Authoring Workflows (AI-Friendly by Design)</h2>
			  <p class="tagline">
				  Designed for professors and lab assistants first, with structures that an AI agent could also drive.
			  </p>

			  <p>
				  A core goal of my work is to ensure that subject-matter experts can own their content without learning C#.
				  Professors and lab assistants use editor tools to:
			  </p>
			  <ul>
				  <li>Reorder or add new safety steps in a sequence.</li>
				  <li>Swap out panoramas to match their specific lab layout.</li>
				  <li>Attach new images or videos to context-sensitive hotspots.</li>
				  <li>Configure scoring rules or completion conditions for training modules.</li>
			  </ul>

			  <p>
				  Because these workflows are declarative and data-driven, they are also ideal for future AI integration.
				  An AI assistant could:
			  </p>
			  <ul>
				  <li>Propose additional steps for a given hazard scenario.</li>
				  <li>Generate draft narration or on-screen text for each training step.</li>
				  <li>Suggest optimal hotspot placement in a 360° panorama based on equipment locations.</li>
				  <li>Automatically adapt difficulty or detail level based on learner performance.</li>
			  </ul>
		  </section>

	  </main>
  </div>
</template>

<script setup>
import CollapsibleSection from '../components/CollapsibleSection.vue';
</script>
