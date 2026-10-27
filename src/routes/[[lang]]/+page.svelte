<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { asset } from '$app/paths';
	import Selector from '#lib/components/Selector/Selector.svelte';
	import ClickToClipboard from '#lib/components/ClickToClipboard/ClickToClipboard.svelte';
	import ChangeLanguage from '#lib/components/i18n/ChangeLanguage.svelte';
	import { toHtml, toBOJDesc, toPolygonStatement } from '#lib/gfmdesc/bridge';
	import { DescriptionType } from '#lib/commons/gfmdescBridge';
	import { getLanguageTag, getMessages } from '#lib/i18n';
	import { MarkGithub16 } from 'svelte-octicons';
	const language = $derived(getLanguageTag(page.params.lang));
	const m = $derived(getMessages(language));
	const convertingFormats = $derived([
		{ id: 'polygon', name: m.codeforces_polygon(), image: asset('polygon-logo.png') },
		{ id: 'html', name: m.html(), image: asset('html-logo.png') },
		{ id: 'stack', name: m.boj_stack(), image: asset('stack-logo.png') }
	]);
	const voidConvertCallback = async (content: string): Promise<string> => {
		return '';
	};

	let textareaInput = $state('');
	let convertedResult = $state('');
	let contentType = $state(DescriptionType.none);
	let selectedConvertingFormat = $state(0);
	let convertCallback = $state<(content: string) => Promise<string>>(voidConvertCallback);

	const handleSelectConvertingFormat = (i: number = -1) => {
		if (!convertingFormats[i].id) {
			convertCallback = voidConvertCallback;
		}
		switch (convertingFormats[i].id) {
			case 'polygon':
				convertCallback = toPolygonStatement;
				contentType = DescriptionType.polygon;
				break;
			case 'html':
				convertCallback = toHtml;
				contentType = DescriptionType.html;
				break;
			case 'stack':
				convertCallback = toBOJDesc;
				contentType = DescriptionType.bojStack;
				break;
			default:
				convertCallback = voidConvertCallback;
				contentType = DescriptionType.none;
				break;
		}
	};

	const renderContent = () => {
		convertCallback(textareaInput).then((res: string) => {
			convertedResult = res;
		});

		// Wait a tick for the DOM to update
		setTimeout(() => {
			notifyRequiresRerenderMathjax();
		}, 0);
	};
	const selectorOnChange = (i: number) => {
		handleSelectConvertingFormat(i);
		renderContent();
	};
	const textareaOnChange = () => {
		renderContent();
	};

	const notifyRequiresRerenderMathjax = () => {
		const event = new CustomEvent('rerenderMathjax', {
			bubbles: true,
			composed: true
		});

		document.dispatchEvent(event);
	};

	onMount(() => {
		handleSelectConvertingFormat(selectedConvertingFormat);
	});
</script>

<svelte:head>
	<!--{#if contentType === DescriptionType.bojStack}-->
	<!-- MathJax -->
	<script>
		MathJax = {
			tex: {
				inlineMath: [
					['$', '$'],
					['\\(', '\\)']
				]
			},
			svg: {
				fontCache: 'global'
			}
		};

		const requestMathJaxRender = () => {
			MathJax.typeset();
		};

		document.addEventListener('rerenderMathjax', (event) => requestMathJaxRender());
	</script>
	<script
		id="MathJax-script"
		async
		src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
	></script>
	<!--{/if}-->
</svelte:head>

<div class="absolute top-8 right-8 w-fit">
	<ChangeLanguage />
</div>

<div class="mb-4">
	<h1 class="mb-2 text-3xl font-bold">{m.title()}</h1>
	<p class="text-lg text-gray-500">{m.subtitle()}</p>
</div>

<div class="mx-auto mb-4 flex w-full max-w-xl">
	<div class="relative flex-4">
		<div
			class="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-slate-600 sm:text-sm/6"
		>
			<span class="col-start-1 row-start-1 flex items-center gap-3 pr-6">
				<img src={asset('markdown-logo.png')} alt="" class="size-5 shrink-0" />
				<span class="block truncate">{m.github_flavored_markdown()}</span>
			</span>
		</div>
	</div>
	<div class="flex flex-1 justify-center py-1.5 text-center align-middle"><span>→</span></div>
	<div class="flex-4">
		<Selector
			items={convertingFormats}
			header={undefined}
			indicateNowSelected={false}
			bind:selected={selectedConvertingFormat}
			onChange={selectorOnChange}
		/>
	</div>
</div>

<div
	class="mb-2 grid h-full grid-cols-none grid-rows-2 gap-4 overflow-auto sm:grid-cols-2 sm:grid-rows-none"
>
	<div class="flex">
		<textarea
			class="flex-1,0,0 flex h-auto w-full resize-none overflow-y-scroll rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
			placeholder={m.gfm_textarea_placeholder()}
			bind:value={textareaInput}
			onchange={textareaOnChange}></textarea>
	</div>
	<div class="flex">
		<ClickToClipboard bind:content={convertedResult} bind:contentType />
	</div>
</div>

<div class="align-center flex items-center gap-2 align-middle">
	<MarkGithub16 />
	<span
		>ShapeLayer/<a
			href="https://github.com/shapelayer/gfm-online-judge-description-tool"
			target="_blank">gfm-online-judge-description-tool</a
		></span
	>
</div>
