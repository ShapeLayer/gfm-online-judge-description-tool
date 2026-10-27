// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare module '#include/gfmdesc' {
	const Module: () => Promise<{
		cmark_markdown_to_html: (content: string) => string;
		cmark_render_boj_stack: (content: string) => string;
		cmark_render_pstatement: (content: string) => string;
	}>;

	export default Module;
}

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
