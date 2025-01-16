<script lang="ts">
  import { onMount } from 'svelte'
  import { base } from '$app/paths'
  import Selector from '$lib/components/Selector/Selector.svelte'
  import ClickToClipboard from '$lib/components/ClickToClipboard/ClickToClipboard.svelte';
  import ChangeLanguage from '$lib/components/i18n/ChangeLanguage.svelte'
  import { toHtml, toBOJDesc, toPolygonStatement } from '$lib/gfmdesc/bridge'
	import { DescriptionType } from '$lib/commons/gfmdescBridge.d'
  import * as m from '$lib/paraglide/messages.js'
  import { MarkGithub16 } from 'svelte-octicons'
  const convertingFormats = [
    { id: 'polygon', name: m.codeforces_polygon(), image: `${base}/polygon-logo.png` },
    { id: 'html', name: m.html(), image: `${base}/html-logo.png` },
    { id: 'stack', name: m.boj_stack(), image: `${base}/stack-logo.png` }
  ]
  const voidConvertCallback = async (content: string): Promise<string> => { return '' }

  let textareaInput: string = ''
  let convertedResult: string = ''
  let contentType: DescriptionType = DescriptionType.none
  let selectedConvertingFormat: number = 0
  let convertCallback: (content: string) => Promise<string> = voidConvertCallback

  const handleSelectConvertingFormat = (i: number = -1) => {
    if (!convertingFormats[i].id) {
      convertCallback = voidConvertCallback
    }
    switch (convertingFormats[i].id) {
      case 'polygon':
        convertCallback = toPolygonStatement
        contentType = DescriptionType.polygon
        break
      case 'html':
        convertCallback = toHtml
        contentType = DescriptionType.html
        break
      case 'stack':
        convertCallback = toBOJDesc
        contentType = DescriptionType.bojStack
        break
      default:
        convertCallback = voidConvertCallback
        contentType = DescriptionType.none
        break
    }
  }

  const renderContent = () => {
    convertCallback(textareaInput).then((res: string) => {
      console.log(res)
      convertedResult = res
    })
  }
  const selectorOnChange = (i: number) => {
    handleSelectConvertingFormat(i)
    renderContent()
  }
  const textareaOnChange = () => {
    renderContent()
  }

  onMount(() => {
    handleSelectConvertingFormat(selectedConvertingFormat)
  })
</script>

<div class="absolute top-8 right-8 w-fit">
  <ChangeLanguage />
</div>

<div class="mb-4">
  <h1 class="text-3xl font-bold mb-2">{m.title()}</h1>
  <p class="text-lg text-gray-500">{m.subtitle()}</p>
</div>

<div class="flex mx-auto w-full max-w-xl mb-4">
  <div class="flex-4 relative">
    <div class="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-slate-600 sm:text-sm/6">
      <span class="col-start-1 row-start-1 flex items-center gap-3 pr-6">
        <img src={`${base}/markdown-logo.png`} alt="" class="size-5 shrink-0">
        <span class="block truncate">{m.github_flavored_markdown()}</span>
      </span>
    </div>
  </div>
  <div class="flex flex-1 text-center align-middle justify-center py-1.5"><span>→</span></div>
  <div class="flex-4">
    <Selector
      items={convertingFormats}
      bind:selected={selectedConvertingFormat}
      onChange={selectorOnChange}
    />
  </div>
</div>

<div class="grid grid-cols-none grid-rows-2 sm:grid-cols-2 sm:grid-rows-none h-full gap-4 mb-2">
  <div class="flex">
    <textarea
      class="flex flex-1,0,0 p-2.5 w-full h-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none overflow-y-scroll"
      placeholder={m.gfm_textarea_placeholder()}
      bind:value={textareaInput}
      on:change={textareaOnChange}
    ></textarea>
  </div>
  <div class="flex">
    <ClickToClipboard
      bind:content={convertedResult}
      bind:contentType={contentType}
    />
  </div>
</div>

<div class="flex align-middle align-center items-center gap-2">
  <MarkGithub16 /> <span>ShapeLayer/<a href="https://github.com/shapelayer/gfm-online-judge-description-tool" target="_blank">gfm-online-judge-description-tool</a></span>
</div>
