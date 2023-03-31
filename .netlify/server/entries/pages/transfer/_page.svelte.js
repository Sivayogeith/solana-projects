import { c as create_ssr_component } from "../../../chunks/index.js";
import Swal from "sweetalert2";
import { Connection, clusterApiUrl } from "@solana/web3.js";
import * as buffer from "buffer";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  window.Buffer = buffer.Buffer;
  Swal.mixin({
    toast: true,
    position: "bottom-right",
    iconColor: "white",
    customClass: { popup: "colored-toast" },
    showConfirmButton: false,
    timerProgressBar: true
  });
  new Connection(clusterApiUrl("devnet"), "confirmed");
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-mj76vg_START -->${$$result.title = `<title>Transfer Tokens | Solana Projects</title>`, ""}<meta name="description" content="Transfer tokens from your wallet to another one in devnet!"><!-- HEAD_svelte-mj76vg_END -->`, ""}

<h1>Solana Transfer Tokens</h1>

${`<button class="btn btn-dark" id="connect-button">Connect To Wallet
	</button>`}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
