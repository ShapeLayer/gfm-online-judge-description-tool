declare const Module: () => Promise<{
	cmark_markdown_to_html: (content: string) => string;
	cmark_render_boj_stack: (content: string) => string;
	cmark_render_pstatement: (content: string) => string;
}>;

export default Module;
