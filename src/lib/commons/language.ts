import { goto } from '$app/navigation';
import { resolve } from '$app/paths';
import { page } from '$app/state';
import type { AvailableLanguageTag } from '#lib/i18n';

export const switchLanguage = (language: AvailableLanguageTag) => {
	return goto(resolve(`${language}${page.url.search}${page.url.hash}`));
};
