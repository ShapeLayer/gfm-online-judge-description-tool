import type { AvailableLanguageTag } from '$lib/paraglide/runtime'
import { i18n } from '$lib/i18n'
import { goto } from '$app/navigation'
import { page } from '$app/state'

export const switchLanguage = (language: AvailableLanguageTag) => {
  const canonicalPath = i18n.route(page.url.pathname)
  const localizedPath = i18n.resolveRoute(canonicalPath, language)
  goto(localizedPath)
}
