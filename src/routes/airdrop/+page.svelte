<script>
    import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
    import Input from "../../components/Input.svelte";
    import Swal from "sweetalert2";

    // Here it get's the public key from the user and creates a new PublicKey instance
    let publicKey = "";
    if (window.localStorage.getItem("publicKey"))
        publicKey = new PublicKey(window.localStorage.getItem("publicKey"));

    // And also it gets the amount to airdrop from the user
    let amount = null;

    // This Function is called when the Air Drop! button is pressed
    let airdrop = async () => {
        // I'm using the @solana/web3.js
        const connection = new Connection(
            "https://api.devnet.solana.com",
            "confirmed"
        );

        // This is the main part it now calls the requestAirdrop function to air drop to the user's wallet
        let txhash = await connection.requestAirdrop(
            publicKey,
            LAMPORTS_PER_SOL * amount
        );

        // If the response is good it calls the swal to let the user know that the airdropping was successful
        Swal.fire("Air Dropped SOL!", "Check your balance", "success");

        // Also logs the txhash if the user wants it
        console.log(`txhash: ${txhash}`);

        // Here it sets the publicKey to the localStorage so the user don't need to paste the publicKey next time they use the website
        window.localStorage.setItem("publicKey", publicKey.toString());
    };
</script>

<svelte:head>
    <title>Airdrop | Solana Projects</title>
    <meta
        name="description"
        content="Airdrop Solana to your devnet account now!"
    />
</svelte:head>

<h1>Solana Air Dropper</h1>
<form>
    <Input placeholder="Paste your public key here!" bind:value={publicKey} />

    <Input
        placeholder="How much SOL do you want?"
        bind:value={amount}
        type="number"
    />

    <div class="col-12">
        <button
            class="btn btn-dark"
            id="airdrop"
            type="button"
            disabled={!(
                publicKey &&
                publicKey.length >= 32 &&
                publicKey.length <= 44 &&
                Number.isInteger(parseFloat(amount))
            )}
            on:click={airdrop}
        >
            Air Drop!
        </button>
    </div>
</form>
