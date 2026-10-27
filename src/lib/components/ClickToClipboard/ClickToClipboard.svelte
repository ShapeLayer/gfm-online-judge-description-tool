<script lang="ts">
	import { Copy16 } from 'svelte-octicons';
	import { DescriptionType } from '#lib/commons/gfmdescBridge';
	import '#lib/commons/default_styles.scss';
	let {
		content = $bindable(''),
		contentType = $bindable(DescriptionType.none)
	}: {
		content: string;
		contentType: DescriptionType;
	} = $props();
	let mouseEntered: boolean = $state(false);

	const commonStyleClasses =
		'flex p-2.5 w-full h-full text-sm text-gray-900 rounded-lg border border-gray-300 cursor-pointer';

	const onMouseEnter = () => {
		mouseEntered = true;
	};
	const onMouseLeave = () => {
		mouseEntered = false;
	};
	const onClick = () => {
		navigator.clipboard.write([
			new ClipboardItem({
				'text/html': new Blob([content], { type: 'text/html' }),
				'text/plain': new Blob([content], { type: 'text/plain' })
			})
		]);
	};
</script>

<div
	class="flex-1,0,0 relative flex h-auto w-full flex-col"
	style="cursor: pointer !important;"
	on:click={onClick}
	on:mouseenter={onMouseEnter}
	on:mouseleave={onMouseLeave}
>
	<div
		class={[
			'pointer-events-none absolute inset-0 z-10 flex h-auto w-full cursor-pointer items-center justify-center align-middle transition duration-100 ease-in',
			mouseEntered ? 'block opacity-100' : 'hidden opacity-0'
		]}
	>
		<Copy16 />
	</div>

	{#if contentType === DescriptionType.polygon}
		<textarea
			class={[
				commonStyleClasses,
				'flex-1,0,0 resize-none overflow-y-scroll focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500',
				mouseEntered ? 'blur-sm' : ''
			]}
			bind:value={content}
			readonly></textarea>
	{:else if contentType === DescriptionType.bojStack}
		<div
			class={[
				commonStyleClasses,
				'flex-1,0,0 h-full w-full flex-col overflow-y-auto',
				mouseEntered ? 'blur-sm' : ''
			]}
		>
			<div>{@html content}</div>
		</div>
	{:else}
		<div
			class={[
				commonStyleClasses,
				'flex-1,0,0 h-full w-full flex-col overflow-y-auto',
				mouseEntered ? 'blur-sm' : '',
				'html-default-style'
			]}
		>
			<div>{@html content}</div>
		</div>
	{/if}
</div>
