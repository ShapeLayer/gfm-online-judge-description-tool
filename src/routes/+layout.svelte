<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex relative h-screen max-h-screen flex-col p-8">
	<ParaglideJS {i18n}>
		{@render children()}
	</ParaglideJS>
</div>
