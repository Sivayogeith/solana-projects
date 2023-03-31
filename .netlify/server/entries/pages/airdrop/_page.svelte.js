import { c as create_ssr_component, d as add_attribute, e as escape, f as each, v as validate_component } from "../../../chunks/index.js";
import { PublicKey } from "@solana/web3.js";
import "sweetalert2";
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { inputType = "input" } = $$props;
  let { type = "text" } = $$props;
  let { placeholder } = $$props;
  let { step = "" } = $$props;
  let { value } = $$props;
  let { divOuterClass = "row justify-content-center" } = $$props;
  let { divInnerClass = "col-md-4" } = $$props;
  let { inputClass = "form-control" } = $$props;
  let { dropDownList = [] } = $$props;
  if ($$props.inputType === void 0 && $$bindings.inputType && inputType !== void 0)
    $$bindings.inputType(inputType);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.divOuterClass === void 0 && $$bindings.divOuterClass && divOuterClass !== void 0)
    $$bindings.divOuterClass(divOuterClass);
  if ($$props.divInnerClass === void 0 && $$bindings.divInnerClass && divInnerClass !== void 0)
    $$bindings.divInnerClass(divInnerClass);
  if ($$props.inputClass === void 0 && $$bindings.inputClass && inputClass !== void 0)
    $$bindings.inputClass(inputClass);
  if ($$props.dropDownList === void 0 && $$bindings.dropDownList && dropDownList !== void 0)
    $$bindings.dropDownList(dropDownList);
  return `${inputType == "input" ? `<div${add_attribute("class", divOuterClass, 0)}><div${add_attribute("class", divInnerClass, 0)}><input${add_attribute("step", step, 0)}${add_attribute("class", inputClass, 0)}${add_attribute("placeholder", placeholder, 0)}${add_attribute("value", value, 0)}></div></div>` : `${inputType == "dropDown" ? `<div${add_attribute("class", divOuterClass, 0)}><div${add_attribute("class", divInnerClass, 0)}><div class="dropdown"><button class="btn dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">${escape(placeholder)}</button>
                <ul class="dropdown-menu w-100">${each(dropDownList, (dropDown, i) => {
    return `<li><button class="dropdown-item">${escape(dropDown.name)}</button>
                            <hr>
                        </li>`;
  })}</ul></div></div></div>` : ``}`}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let publicKey = "";
  if (window.localStorage.getItem("publicKey"))
    publicKey = new PublicKey(window.localStorage.getItem("publicKey"));
  let amount = null;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-na0vw3_START -->${$$result.title = `<title>Airdrop | Solana Projects</title>`, ""}<meta name="description" content="Airdrop Solana to your devnet account now!"><!-- HEAD_svelte-na0vw3_END -->`, ""}

<h1>Solana Air Dropper</h1>
<form>${validate_component(Input, "Input").$$render(
      $$result,
      {
        placeholder: "Paste your public key here!",
        value: publicKey
      },
      {
        value: ($$value) => {
          publicKey = $$value;
          $$settled = false;
        }
      },
      {}
    )}

    ${validate_component(Input, "Input").$$render(
      $$result,
      {
        placeholder: "How much SOL do you want?",
        type: "number",
        value: amount
      },
      {
        value: ($$value) => {
          amount = $$value;
          $$settled = false;
        }
      },
      {}
    )}

    <div class="col-12"><button class="btn btn-dark" id="airdrop" type="button" ${!(publicKey && publicKey.length >= 32 && publicKey.length <= 44 && Number.isInteger(parseFloat(amount))) ? "disabled" : ""}>Air Drop!
        </button></div></form>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
