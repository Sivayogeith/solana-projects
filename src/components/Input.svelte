<script>
    export let inputType = "input";
    export let type = "text";
    export let placeholder;
    export let step = "";
    export let value;
    export let divOuterClass = "row justify-content-center";
    export let divInnerClass = "col-md-4";
    export let inputClass = "form-control";
    export let dropDownList = [];
    let handleDropDownClick = (i) => {
        let name = dropDownList[i].name;
        placeholder = name;
        value = name;
    };
    let typeAction = (node) => {
        node.type = type;
    };
</script>

{#if inputType == "input"}
    <div class={divOuterClass}>
        <div class={divInnerClass}>
            <input
                use:typeAction
                {step}
                class={inputClass}
                {placeholder}
                bind:value
            />
        </div>
    </div>
{:else if inputType == "dropDown"}
    <div class={divOuterClass}>
        <div class={divInnerClass}>
            <div class="dropdown">
                <button
                    class="btn dropdown-toggle w-100"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    {placeholder}
                </button>
                <ul class="dropdown-menu w-100">
                    {#each dropDownList as dropDown, i}
                        <li>
                            <button
                                class="dropdown-item"
                                on:click={() => handleDropDownClick(i)}
                                >{dropDown.name}</button
                            >
                            <hr />
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
{/if}
