<script>
	import { page } from "$app/stores";
	import logo from "$lib/images/favicon.png";
	import github from "$lib/images/github.svg";
</script>

<!-- <header>
	<div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">Sverdle</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<a href="https://github.com/sveltejs/kit" target="_blank">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header> -->

<nav class="navbar navbar-expand-lg">
	<div class="container">
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li
					class="nav-item"
					aria-current={$page.url.pathname.startsWith("/")
						? "page"
						: undefined}
				>
					<a class="nav-link" href="./">
						<img
							src={logo}
							alt="Logo"
							height="30px"
							width="30px"
							class="logo"
						/>
						Solana Projects
					</a>
				</li>
			</ul>
			<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
				<li
					class="nav-item"
					aria-current={$page.url.pathname.startsWith("/transfer")
						? "page"
						: undefined}
				>
					<a class="nav-link" href="./transfer/"
						>Solana Transfer Tokens</a
					>
				</li>
				<li
					class="nav-item"
					aria-current={$page.url.pathname.startsWith("/airdrop")
						? "page"
						: undefined}
				>
					<a class="nav-link" href="./airdrop/">Solana Airdrop</a>
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="https://github.com/Sivayogeith/solana-projects"
						><img
							src={github}
							alt="Github Logo"
							height="30px"
							width="30px"
							class="logo"
						/></a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>
