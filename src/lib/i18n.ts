import en from '../../messages/en.json';
import koKr from '../../messages/ko-kr.json';

export const availableLanguageTags = ['en', 'ko-kr'] as const;
export type AvailableLanguageTag = (typeof availableLanguageTags)[number];

type MessageValues = Omit<typeof koKr, '$schema'>;
export type Messages = {
	[K in keyof MessageValues]: () => string;
};

const messageCatalog: Record<AvailableLanguageTag, MessageValues> = {
	en,
	'ko-kr': koKr
};

export const getLanguageTag = (value: string | undefined): AvailableLanguageTag =>
	availableLanguageTags.includes(value as AvailableLanguageTag)
		? (value as AvailableLanguageTag)
		: 'ko-kr';

export const getMessages = (languageTag: AvailableLanguageTag): Messages => {
	const messages = messageCatalog[languageTag];
	return Object.fromEntries(
		Object.entries(messages)
			.filter(([key]) => key !== '$schema')
			.map(([key, value]) => [key, () => value])
	) as Messages;
};
