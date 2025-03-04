<script lang="ts">
  import { switchLanguage } from '$lib/commons/paraglide'
	import type { AvailableLanguageTag } from '$lib/paraglide/runtime';
  import { type LanguageButtonProvider } from './changeLanguageSupport'
  import Selector from '$lib/components/Selector/Selector.svelte'
  const languages: LanguageButtonProvider[] = [
    {id: 'en', display: '🇺🇸'},
    {id: 'ko-kr', display: '🇰🇷'}
  ]
  let now = 0

  const onSelect = (i: number) => {
    if (languages[i].id === '_') return
    switchLanguage(languages[i].id as AvailableLanguageTag)
    // now = i
  }
</script>

<Selector
  items={languages.map(({ id, display }) => ({ id: id, name: display }))}
  header={{id: '_', name: '🌐'}}
  selected={now}
  onChange={onSelect}
  indicateNowSelected={false}
/>
