import { c as create_ssr_component, b as subscribe, d as add_attribute, v as validate_component } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const logo = "/_app/immutable/assets/favicon.1ff7f47b.png";
const github = "/_app/immutable/assets/github.1ea8d62e.svg";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `

<nav class="navbar navbar-expand-lg"><div class="container"><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav me-auto mb-2 mb-lg-0"><li class="nav-item"${add_attribute("aria-current", $page.url.pathname.startsWith("/") ? "page" : void 0, 0)}><a class="nav-link" href="./"><img${add_attribute("src", logo, 0)} alt="Logo" height="30px" width="30px" class="logo">
						Solana Projects
					</a></li></ul>
			<ul class="navbar-nav ms-auto mb-2 mb-lg-0"><li class="nav-item"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/transfer") ? "page" : void 0,
    0
  )}><a class="nav-link" href="./transfer/">Solana Transfer Tokens</a></li>
				<li class="nav-item"${add_attribute(
    "aria-current",
    $page.url.pathname.startsWith("/airdrop") ? "page" : void 0,
    0
  )}><a class="nav-link" href="./airdrop/">Solana Airdrop</a></li>
				<li class="nav-item"><a class="nav-link" href="https://github.com/Sivayogeith/solana-projects"><img${add_attribute("src", github, 0)} alt="Github Logo" height="30px" width="30px" class="logo"></a></li></ul></div></div></nav>`;
});
const styles = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-o7wm9m_START --><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js" integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N" crossorigin="anonymous"><\/script><!-- HEAD_svelte-o7wm9m_END -->`, ""}

<div class="app container text-center">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<main>${slots.default ? slots.default({}) : ``}</main>

	<footer><p class="credits">by Sivayogeith Umamaheswaran, CTO
			<a href="https://ulagellam.com" target="_blank">Ulagellam</a></p></footer></div>`;
});
export {
  Layout as default
};
