<script>
	import Counter from "./Counter.svelte";
	import welcome from "$lib/images/svelte-welcome.webp";
	import welcome_fallback from "$lib/images/svelte-welcome.png";
</script>

<svelte:head>
	<title>Home | Solana Projects</title>
	<meta name="description" content="All my Solana projects" />
</svelte:head>

<h1>All My Solana Projects</h1>
<div class="row justify-content-center">
	<div class="col-md-4 col-12">
		<a href="./airdrop/" class="nav-link">
			<div class="card">
				<div class="card-body">
					<h5 class="card-title">Solana Airdrop</h5>
					<p class="card-text">
						Airdrop SOL to your wallet with your public key In
						Devnet
					</p>
				</div>
			</div>
		</a>
	</div>
	<div class="col-md-4 col-12">
		<a href="./transfer/" class="nav-link">
			<div class="card">
				<div class="card-body">
					<h5 class="card-title">Solana Transfer Tokens</h5>
					<p class="card-text">
						Send your tokens to another wallet with wallet
						extenstions In Devnet
					</p>
				</div>
			</div>
		</a>
	</div>
</div>
