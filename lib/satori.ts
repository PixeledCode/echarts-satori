import satori from 'satori'
import { createIntlSegmenterPolyfill } from 'intl-segmenter-polyfill'

export const reactToSVG = async (
	Component: React.ReactElement,
	props: { width: number; height?: number }
) => {
	const fonts: any = await initFonts()
	const svg = await satori(Component, {
		width: props.width,
		height: props.height,
		fonts,
	})
	return svg
}

export async function initFonts() {
	if (typeof window === 'undefined') return []

	const [font, Segmenter] =
		window.__resource ||
		(window.__resource = await Promise.all([
			fetch('/Inter-Bold.ttf').then((res) => res.arrayBuffer()),
			!globalThis.Intl || !globalThis.Intl.Segmenter
				? createIntlSegmenterPolyfill(
						fetch(
							new URL(
								'intl-segmenter-polyfill/dist/break_iterator.wasm',
								import.meta.url
							)
						)
				  )
				: null,
		]))

	if (Segmenter) {
		globalThis.Intl = globalThis.Intl || {}
		//@ts-expect-error
		globalThis.Intl.Segmenter = Segmenter
	}

	return [
		{
			name: 'Inter',
			data: font,
			style: 'normal',
			weight: 700,
		},
	]
}
