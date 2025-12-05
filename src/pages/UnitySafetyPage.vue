<template>
  <div class="page unity-safety-page">
    <h2>Unity-Based Virtual Safety Labs</h2>
    <p class="page-tagline">
      Modular, data-driven lab safety training for multiple engineering departments, using Unity and VR/desktop builds.
    </p>

	<nav>
		<a href="#case-study">Technical Case Study</a>
		<a href="#editor-modularity">Editor Modularity Demo</a>
		<a href="#human-authoring">Human-Centered Authoring</a>
		<a href="#editor-tools-packages">Editor Tools & Packages</a>
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
					<div class="subheading">Problem</div>
					<p>
						The bioengineering teaching lab and environmental lab in the Civil Engineering department needed consistent, noticed static
						manuals and slide decks were not engaging enough to "digital native" learners of today, and many safety mistakes were seen
						in lab safety procedures. New students struggled to remember step-by-step procedures and lab-specific hazards.
					</p>

					<div class="subheading">Solution</div>
					<ul>
						<li>Interactive 3D VR/desktop module for lab safety procedures.</li>
						<li>Modular step system covering preparation, PPE, equipment use, cleanup, and emergency response.</li>
						<li>Custom editors that allow staff to update procedures without modifying scripts.</li>
					</ul>

					<div class="subheading">Creation Process</div>
					<ul>
						<li>Visited the real lab, took pictures, read existing safety manuals, and interviewed lab assistants to pinpoint the most common safety issues.</li>
						<li>Created virtual versions of lab assets using Autodesk Maya or pre-existing libraries (GrabCAD, Turbosquid, Google Sketchup Database) that are compatiblee with Unity FBX or OBJ format.</li>
						<li>Imported First Person Controller for navigation around virtual lab.</li>
					</ul>

					<div class="subheading">Editor Tooling</div>
					<ul>
						<li>Created a custom "instruction box" capable of being changed in-editor.</li>
						<li>Step authoring inspectors with text, audio, and action configuration.</li>
						<li>Reusable “station” prefabs wired into a central sequence controller.</li>
					</ul>

					<div class="subheading">Outcome</div>
					<ul>
						<li>Positive feedback from grad students and lab assistants on usability and clarity.</li>
						<li>Reusable tooling now applied to multiple labs with minimal code changes.</li>
						<li>Foundation for analytics and integration with MyCourses to track completion and performance.</li>
					</ul>
				</div>

				<div>
					<div class="placeholder">
						<img src="../assets/bio-case-study-collage.png" alt="Bioengineering lab safety case study screenshots" style="width:100%; border-radius:12px;">
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
						<img src="../assets/bio-custom-menus.gif" alt="Showcasing of custom editor menus" style="width:100%; border-radius:12px;">
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

		<!-- 3. Editor Tools & Packages, Asset Store-style -->
		<!-- <section id="editor-tools-packages">
			<h2>Editor Tools & Packages (Asset-Store-Style Tooling)</h2>
			<p class="tagline">
				Modular editor extensions structured like reusable Unity packages.
			</p>

			<p>
				Several of my systems are built as if they were standalone editor tools, ready to be shared across projects
				or published as packages:
			</p>

			<div class="subheading">Safety Step Authoring System</div>
			<ul>
				<li>ScriptableObject-based step definitions with custom inspectors.</li>
				<li>Configurable preconditions, actions, and post-actions.</li>
				<li>Supports narration, text, and scene events without code changes.</li>
			</ul>

			<div class="subheading">Reusable Interaction Framework</div>
			<ul>
				<li>Generic pickup, drop, and “lock-in-place” behaviours.</li>
				<li>Validation hooks for safety logic (e.g., correct disposal of broken glass).</li>
				<li>Designed to plug into multiple lab scenes with minimal setup.</li>
			</ul>

			<div class="two-col">
				<div>
					<div class="highlight">
						These tools are engineered as reusable components with clean public APIs, mirroring how Unity plugins
						are distributed and consumed by game teams.
					</div>
					<p class="meta">
						Planned distribution: convert internal tools into packages and publish them to a registry or Asset
						Store for broader use in educational and training projects.
					</p>
				</div>
				<div>
					<div class="placeholder">
						<strong>ASSET STORE / PACKAGE LINK PLACEHOLDER</strong>
						Future link to a Unity Asset Store page or Git repository for the “Safety Step Authoring System”.
						<br>
						<br>
						Example:
					<a href="https://assetstore.unity.com/placeholder-your-tool" class="link">View on Unity Asset Store</a>

			Once published, add the real URL above.
	</div>
					</div>
				</div>
			</section> -->
		<!-- 8. Unity Editor Tooling Overview -->
		<!-- <section id="editor-tooling-overview">
			<h2>Unity Editor Tooling Overview</h2>
			<p class="tagline">
				A snapshot of the editor features, APIs, and workflows I have built to support large-scale safety training content.
			</p>

			<div class="two-col">
				<div>
					<div class="subheading">Custom Inspector Panels</div>
					<ul>
						<li>Step and station inspectors for configuring training flows.</li>
						<li>Custom drawers for audio clips, localized text, and actions.</li>
					</ul>

					<div class="subheading">Editor-Time Scene Configuration</div>
					<ul>
						<li>Station registration tools to wire scenes into the central step system.</li>
						<li>Automatic assignment helpers for common components.</li>
					</ul>

					<div class="subheading">360° Hotspot Authoring</div>
					<ul>
						<li>Hotspot placement and editing UI for panoramic images.</li>
						<li>Per-hotspot metadata configuration for videos, images, and explanations.</li>
					</ul>

					<div class="subheading">Reusable Interaction APIs</div>
					<ul>
						<li>Interfaces and base classes for interactable objects.</li>
						<li>Events for “object locked in place”, “object disposed”, and similar safety actions.</li>
					</ul>
				</div>

				<div>
					<div class="placeholder">
						<strong>IMAGE PLACEHOLDER</strong>
						A single “Editor Tooling” overview screenshot: Unity Editor showing hierarchy, inspector, and a
						custom window or panel relevant to the tooling.
						 Replace with <img src="images/editor-tooling-overview.png" alt="Unity editor tooling overview">
	</div>
					</div>
				</div>
			</section> -->
		<!-- 9. Editor Workflow Video Walkthrough -->
		<!-- <section id="workflow-video">
			<h2>Editor Workflow Demo: From Step Definition to Deployed Training</h2>
			<p class="tagline">
				A single video showing the complete path a professor would follow to update a training module.
			</p>

			<p>
				This walkthrough is designed to mirror the type of creator-focused workflows Unity aims to enhance with AI.
				In this video, I:
			</p>
			<ul>
				<li>Open the project and navigate to the relevant lab scene.</li>
				<li>Edit an existing step via custom inspector fields.</li>
				<li>Add a new step with narration, text, and a required player action.</li>
				<li>Adjust a 360° hotspot in the panorama editor to match equipment placement.</li>
				<li>Run the scene to show how changes appear in play mode.</li>
				<li>Prepare a build to share with students via the learning management system.</li>
			</ul>

			<div class="placeholder">
				<strong>VIDEO PLACEHOLDER</strong>
				Embed a narrated screen capture walking through the full editing workflow in the Unity Editor.
				Replace with actual embed, e.g.:
			<iframe src="YOUR_VIDEO_URL" title="Editor workflow demo" frameborder="0" allowfullscreen></iframe>

	</div>
			</section> -->
		<!-- 10. AI Readiness Section -->
		<section id="ai-readiness">
			<h2>AI Readiness: Why These Tools Are Built for AI-Assisted Authoring</h2>
			<p class="tagline">
				My Unity tools are already structured so AI agents can generate, modify, and reason about content.
			</p>

			<p>
				Although the current safety training workflows are driven by humans, the underlying architecture is AI-ready:
			</p>
			<ul>
				<li>
					<strong>Declarative configuration:</strong> Steps, stations, and hotspots are defined as data, not
					hard-coded logic. An AI system could construct or modify these assets programmatically.
				</li>
				<li>
					<strong>Structured public APIs:</strong> Clear methods exist to add steps, configure actions, and link
					assets, making it straightforward for an AI agent or backend service to integrate.
				</li>
				<li>
					<strong>Composable editor tooling:</strong> The editor tools operate on stable data structures that
					could be populated or suggested by AI (for example, proposing a new safety checklist).
				</li>
				<li>
					<strong>Human review loop:</strong> Professors remain the final decision-makers, reviewing and adjusting
					AI-generated content via the editor UI before it goes live.
				</li>
			</ul>

			<p>
				In a Unity AI Authoring context, these same patterns can be extended so that:
			</p>
			<ul>
				<li>AI proposes full training sequences for a given lab profile.</li>
				<li>AI refactors step flows based on student performance data.</li>
				<li>AI automatically generates localized text and narration drafts.</li>
				<li>AI configures interaction logic templates for new equipment.</li>
			</ul>

			<div class="placeholder">
				<img src="../assets/ai-authoring-flow.svg" alt="Showcasing of custom editor menus" style="width:100%; border-radius:12px;">
			</div>
		</section>

	</main>
  </div>
</template>

<script setup>
import CollapsibleSection from '../components/CollapsibleSection.vue';
</script>
