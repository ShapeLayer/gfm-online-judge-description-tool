<script lang="ts">
  import { type SelectorItemProps } from './selector'
  export let props: SelectorItemProps
  export let isSelected: boolean = false
  const mouseHoverClass = 'bg-slate-600 text-white outline-none'
  const mouseLeaveClass = 'text-gray-900'
  const mouseHoverCheckmarkClass = 'text-white'
  const mouseLeaveCheckmarkClass = 'text-slate-600'
  let highlightClass = mouseLeaveClass
  let highlightCheckmarkClass = mouseLeaveCheckmarkClass

  const onMouseEnter = () => {
    highlightClass = mouseHoverClass
    highlightCheckmarkClass = mouseHoverCheckmarkClass
  }
  const onMouseLeave = () => {
    highlightClass = mouseLeaveClass
    highlightCheckmarkClass = mouseLeaveCheckmarkClass
  }
</script>

<li
  class={[
    "relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900",
    highlightClass
  ]}
  role="option"
  aria-selected={isSelected}
  on:mouseenter={onMouseEnter}
  on:mouseleave={onMouseLeave}
>
  <div class="flex items-center">
    <img src="{ props.image }" alt="" class="size-5 shrink-0 rounded-full">
    <span class={[
      "ml-3 block truncate font-normal",
      isSelected ? 'font-semibold' : 'font-normal',
    ]}>{ props.name }</span>
  </div>

  {#if isSelected}
  <span class={[
      "absolute inset-y-0 right-0 flex items-center pr-4",
      highlightCheckmarkClass
    ]}>
    <svg class="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
    </svg>
  </span>
  {/if}
</li>
