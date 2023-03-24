// This Function is called when the Air Drop! button is pressed
let airdrop = async () => {
	// I'm using the @solana/web3.js
	const connection = new solanaWeb3.Connection(
		"https://api.devnet.solana.com",
		"confirmed"
	);
	// Here it get's the public key from the user and creates a new PublicKey instance
	let publicKey = new solanaWeb3.PublicKey(
		document.getElementById("publicKey").value
	);
	// And also it gets the amount to airdrop from the user
	let amount = document.getElementById("amount").value;
	// This is the main part it now calls the requestAirdrop function to air drop to the user's wallet
	let txhash = await connection.requestAirdrop(
		publicKey,
		solanaWeb3.LAMPORTS_PER_SOL * amount
	);
	// If the response is good it calls the swal to let the user know that the airdropping was successful
	Swal.fire("Air Dropped SOL!", "Check your balance", "success");
	// Also logs the txhash if the user wants it
	console.log(`txhash: ${txhash}`);
	// Here it sets the publicKey to the localStorage so the user don't need to paste the publicKey next time they use the website
	localStorage.setItem(
		"publicKey",
		document.getElementById("publicKey").value
	);
};

// Here I set a event listener for the click event
document.getElementById("airdrop").addEventListener("click", airdrop);
// Also set the publicKey input value if there is one in the localStorage
document.getElementById("publicKey").value = localStorage.getItem("publicKey");
