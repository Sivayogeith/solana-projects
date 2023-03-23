const connection = new solanaWeb3.Connection(
	"https://api.devnet.solana.com",
	"confirmed"
);

let airdrop = async () => {
	let publicKey = new solanaWeb3.PublicKey(
		document.getElementById("publicKey").value
	);
	let amount = document.getElementById("amount").value;
	let txhash = await connection.requestAirdrop(
		publicKey,
		solanaWeb3.LAMPORTS_PER_SOL * amount
	);
	Swal.fire("Air Dropped SOL!", "Check your balance", "success");
	console.log(`txhash: ${txhash}`);
	localStorage.setItem(
		"publicKey",
		document.getElementById("publicKey").value
	);
};

let main = async () => {
	let balance = await connection.getBalance(publicKey);
	console.log(`${balance / solanaWeb3.LAMPORTS_PER_SOL} SOL`);
};

document.getElementById("airdrop").addEventListener("click", airdrop);
document.getElementById("publicKey").value = localStorage.getItem("publicKey");
