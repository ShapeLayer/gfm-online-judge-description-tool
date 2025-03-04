<script lang="ts">
  import { type SelectorItemProps } from './selector'
	import SelectorItem from './SelectorItem.svelte'
  let {
    items = [],
    header = undefined,
    selected = $bindable(0),
    onChange = (_: number) => {},
    indicateNowSelected = true
  }: {
    items: SelectorItemProps[],
    header: SelectorItemProps | undefined,
    selected: any,
    onChange: (i: number) => void
    indicateNowSelected: boolean | undefined
  } = $props()
  let displayContentNowSelected: SelectorItemProps = header ?? items[selected]
  let expanded: boolean = $state(false)

  const onClick = () => {
    expanded = !expanded
  }
  const onSelect = (i: number) => {
    selected = i
    expanded = false
    onChange(i)
    if (indicateNowSelected) {
      displayContentNowSelected = items[i]
    }
  }
</script>
<div>
  <div class="relative">
    <button
      type="button"
      class="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-slate-600 sm:text-sm/6"
      aria-haspopup="listbox"
      aria-expanded={ expanded }
      aria-labelledby="listbox-label"
      on:click={onClick}
    >
      <span class="col-start-1 row-start-1 flex items-center gap-3 pr-6">
        {#if displayContentNowSelected.image && displayContentNowSelected.image !== ''}
        <img src="{displayContentNowSelected.image}" alt="" class="size-5 shrink-0 rounded-full">
        {/if}
        <span class="block truncate">{displayContentNowSelected.name}</span>
      </span>
      <svg class="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
        <path fill-rule="evenodd" d="M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
      </svg>
    </button>
    <!--
      Select popover, show/hide based on select state.

      Entering: ""
        From: ""
        To: ""
      Leaving: "transition ease-in duration-100"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <ul
      class={[
        "absolute z-50 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm",
        expanded ? ['opacity-100', 'block'] : ['opacity-0 transition ease-in duration-100', 'hidden']
      ]}
      tabindex="-1"
      role="listbox"
      aria-labelledby="listbox-label"
      aria-activedescendant="listbox-option-3"
    >
      {#each items as item, i}
      <div on:click={() => {onSelect(i)}}>
        <SelectorItem 
          props={item}
          isSelected={i === selected}
          indicateNowSelected={indicateNowSelected}
        />
      </div>
      {/each}
      <!-- More items... -->
    </ul>
  </div>
</div>
