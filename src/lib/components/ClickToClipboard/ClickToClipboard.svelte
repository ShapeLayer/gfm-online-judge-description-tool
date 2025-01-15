<script lang="ts">
  import { Copy16 } from 'svelte-octicons'
  import { DescriptionType } from '$lib/commons/gfmdescBridge.d'
  let {
    content = $bindable(''),
    contentType = $bindable(DescriptionType.none)
  }: {
    content: string,
    contentType: DescriptionType
  } = $props()
  let mouseEntered: boolean = $state(false)

  const commonStyleClasses = 'flex p-2.5 w-full h-auto text-sm text-gray-900 rounded-lg border border-gray-300 cursor-pointer'

  const onMouseEnter = () => { mouseEntered = true }
  const onMouseLeave = () => { mouseEntered = false }
  const onClick = () => {
    navigator.clipboard.write([
      new ClipboardItem({
        'text/html': new Blob([content], { type: 'text/html' }),
        'text/plain': new Blob([content], { type: 'text/plain' }),
      }),
    ])
  }
</script>

<div
  class="flex flex-1,0,0 flex-col relative w-full h-auto"
  style="cursor: pointer !important;"
  on:click={onClick}
  on:mouseenter={onMouseEnter}
  on:mouseleave={onMouseLeave}
>
  <div
    class={[
      'z-10 flex w-full h-auto justify-center align-middle items-center absolute inset-0 transition ease-in duration-100 pointer-events-none cursor-pointer',
      mouseEntered ? 'opacity-100 block' : 'opacity-0 hidden',
    ]}
  >
    <Copy16 />
  </div>

  {#if contentType === DescriptionType.polygon}
  <textarea
    class={[
      commonStyleClasses,
      "flex-1,0,0 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none overflow-y-scroll",
      mouseEntered ? 'blur-sm' : '',
    ]}
    bind:value={content}
    readonly
  ></textarea>
  {:else if contentType === DescriptionType.bojStack}
  <div
    class={[
      commonStyleClasses,
      "flex-1,0,0 flex-col w-full h-full overflow-y-auto",
      mouseEntered ? 'blur-sm' : '',
    ]}
  >
    <div>{@html content}</div>
  </div>
  {:else}
  <div
    class={[
      commonStyleClasses,
      "flex-1,0,0 flex-col w-full h-full overflow-y-auto",
      mouseEntered ? 'blur-sm' : '',
    ]}
  >
    <div>{@html content}</div>
  </div>
  {/if}
</div>
