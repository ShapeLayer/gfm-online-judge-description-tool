<script lang="ts">
	import { page } from '$app/state';
	import { getLanguageTag } from '#lib/i18n';
	import '../app.css';
	let { children } = $props();

	$effect(() => {
		document.documentElement.lang = getLanguageTag(page.params.lang);
	});
</script>

<div class="relative flex h-screen max-h-screen flex-col p-8">
	{@render children()}
</div>
