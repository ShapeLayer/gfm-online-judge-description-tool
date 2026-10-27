<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="relative flex h-screen max-h-screen flex-col p-8">
	{@render children()}
</div>
