<script>
	import Input from "../../components/Input.svelte";
	import Swal from "sweetalert2";
	import {
		clusterApiUrl,
		Connection,
		PublicKey,
		LAMPORTS_PER_SOL,
		Keypair,
		Transaction,
	} from "@solana/web3.js";
	import {
		TOKEN_PROGRAM_ID,
		AccountLayout,
		getOrCreateAssociatedTokenAccount,
		createTransferInstruction,
	} from "@solana/spl-token";
	import * as buffer from "buffer";
	window.Buffer = buffer.Buffer;

	const Toast = Swal.mixin({
		toast: true,
		position: "bottom-right",
		iconColor: "white",
		customClass: {
			popup: "colored-toast",
		},
		showConfirmButton: false,
		timerProgressBar: true,
	});

	let formHide = true;
	let connectedMessage = "";
	let tokenAccounts = [];
	let recipient;
	let amount;
	let selectedToken;
	let publicKey;
	const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
	let checkFloat = (x) => {
		// check if the passed value is a number
		if (typeof x == "number" && !isNaN(x))
			if (Number.isInteger(x))
				// check if it is integer
				return true;
			else return true;
		else return false;
	};
	let connectToWallet = async () => {
		if (!window.solana) {
			Swal.fire({
				icon: "error",
				title: "No Solana Wallets Available!",
				text: "Please install an extenstion to continue!",
				footer: '<a href="https://solana.com/ecosystem/explore?categories=wallet" target="_blank">Choose and Download an Extenstion</a>',
			});
		}
		Toast.fire({
			icon: "info",
			title: "Connecting to your wallet",
		});
		window.solana
			.connect()
			.then(async () => {
				console.log("Connected to Solana wallet");
				publicKey = window.solana.publicKey.toString();
				console.log("Current wallet:", publicKey);
				connectedMessage = `Connected to ${publicKey}`;
				let res = await connection.getTokenAccountsByOwner(
					window.solana.publicKey, // owner here
					{
						programId: TOKEN_PROGRAM_ID,
					}
				);
				Toast.close();
				Toast.fire({
					icon: "info",
					title: "Getting all your Tokens",
				});
				res.value.forEach((tokenAccount) => {
					const accountData = AccountLayout.decode(
						tokenAccount.account.data
					);
					console.log(
						`${new PublicKey(accountData.mint)}   ${
							parseFloat(accountData.amount) / LAMPORTS_PER_SOL
						}`
					);
					tokenAccounts.push({
						name: accountData.mint.toString(),
						onClick: "",
					});
				});
				Toast.close();
				formHide = false;
			})
			.catch((err) => {
				console.error("Error connecting to Solana wallet:", err);
				Toast.fire({
					icon: "error",
					title: "Something went wrong!",
					text: "Please report to @thecodingsage#8758 on Discord",
				});
			});
		console.log(tokenAccounts);
	};
	let transact = async (
		connection,
		selectedToken,
		recipient,
		amount,
		publicKey
	) => {
		try {
			let fromTokenAccount = await getOrCreateAssociatedTokenAccount(
				connection,
				Keypair.generate(),
				new PublicKey(selectedToken),
				new PublicKey(publicKey)
			);
			console.log(
				`From Token Account: ${fromTokenAccount.address.toString()}`
			);

			let toTokenAccount = await getOrCreateAssociatedTokenAccount(
				connection,
				Keypair.generate(),
				new PublicKey(selectedToken),
				new PublicKey(recipient)
			);
			console.log(
				`To Token Account: ${toTokenAccount.address.toString()}`
			);

			const transaction = new Transaction();
			transaction.add(
				createTransferInstruction(
					fromTokenAccount.address,
					toTokenAccount.address,
					new PublicKey(publicKey),
					parseFloat(amount) * LAMPORTS_PER_SOL
				)
			);
			let blockhash = (await connection.getLatestBlockhash("finalized"))
				.blockhash;
			transaction.recentBlockhash = blockhash;
			transaction.feePayer = new PublicKey(publicKey);
			await solana.signAndSendTransaction(transaction);
			await Swal.fire({
				icon: "success",
				title: "Successfully send your token to the recipient",
				text: `${selectedToken} to ${recipient}`,
				footer: "If you want, take a screenshot and send this to @thecodingsage#8758 on Discord",
			});
		} catch {
			Toast.fire({
				icon: "error",
				title: "Something went wrong!",
				text: "Please report to @thecodingsage#8758 on Discord",
			});
		}
	};
</script>

<svelte:head>
	<title>Transfer Tokens | Solana Projects</title>
	<meta
		name="description"
		content="Transfer tokens from your wallet to another one in devnet!"
	/>
</svelte:head>

<h1>Solana Transfer Tokens</h1>

{#if formHide}
	<button class="btn btn-dark" id="connect-button" on:click={connectToWallet}>
		Connect To Wallet
	</button>
{:else if !formHide}
	<p id="connected-message">{connectedMessage}</p>
	<form>
		<Input
			placeholder="Paste your recipient's public key here!"
			bind:value={recipient}
		/>

		<Input
			placeholder="How much amount of your token do you want to send?"
			bind:value={amount}
		/>

		<Input
			placeholder="Which Token to send?"
			inputType="dropDown"
			dropDownList={tokenAccounts}
			bind:value={selectedToken}
		/>

		<div class="col-12">
			<button
				class="btn btn-dark"
				type="button"
				disabled={!(
					recipient &&
					recipient.length >= 32 &&
					recipient.length <= 44 &&
					checkFloat(parseFloat(amount)) &&
					selectedToken
				)}
				on:click={() =>
					transact(
						connection,
						selectedToken,
						recipient,
						amount,
						publicKey
					)}
			>
				Send Token!
			</button>
		</div>
	</form>
{/if}
