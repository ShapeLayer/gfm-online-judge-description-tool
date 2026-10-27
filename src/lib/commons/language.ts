import { goto } from '$app/navigation'
import { page } from '$app/state'
import type { AvailableLanguageTag } from '#lib/i18n'

export const switchLanguage = (language: AvailableLanguageTag) => {
	const path = page.url.pathname.split('/').filter(Boolean)
	if (path[0] === 'en' || path[0] === 'ko-kr') path.shift()
	goto(`/${language}${path.length ? `/${path.join('/')}` : ''}`)
}
