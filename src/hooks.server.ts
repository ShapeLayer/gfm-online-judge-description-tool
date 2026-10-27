import type { Handle } from '@sveltejs/kit/hooks';
import { getLanguageTag } from '#lib/i18n';

export const handle: Handle = ({ event, resolve }) =>
	resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%app.lang%', getLanguageTag(event.params.lang))
	});
