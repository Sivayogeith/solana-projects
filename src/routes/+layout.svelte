<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>
<svelte:head>
	<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
	crossorigin="anonymous"
/>
<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js"
	integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N"
	crossorigin="anonymous"
></script>
</svelte:head>

<div class="app container text-center">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p class="credits">
			by Sivayogeith Umamaheswaran, CTO
			<a href="https://ulagellam.com" target="_blank">Ulagellam</a>
		</p>
	</footer>
</div>

