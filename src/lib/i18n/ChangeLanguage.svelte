<script lang="ts">
  import { switchLanguage } from '$lib/commons/paraglide'
	import type { AvailableLanguageTag } from '$lib/paraglide/runtime';
  import { type LanguageButtonProvider } from './changeLanguageSupport'
  const languages: LanguageButtonProvider[] = [
    {id: 'en', display: '🇺🇸'},
    {id: 'ko-kr', display: '🇰🇷'}
  ]
  let now = 1
  let next = 0
  const onClick = () => {
    switchLanguage(languages[next].id as AvailableLanguageTag)
    now = next
    next = (next + 1) % languages.length
  }
</script>

<button type="button" on:click={onClick}>
  <span>{languages[now].display} → {languages[next].display}</span>
</button>
