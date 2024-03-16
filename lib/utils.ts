import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}
export const downloadFile = async (uri: string, name: string = 'File') => {
	try {
		const a = document.createElement('a')
		a.href = uri
		a.download = name
		document.body.appendChild(a)
		a.click()
		document.body.removeChild(a)
	} catch (error) {
		console.error('unable to download. Error:')
		console.log(error)
	} finally {
		URL.revokeObjectURL(uri)
	}
}

export const domToURI = async (
	element: string,
	format: 'svg' | 'png' = 'png'
) => {
	if (format === 'svg') {
		const dataSvgURL = svgToURI(element)
		return dataSvgURL
	}

	const dataImgURL = await svgToPngURI(element)
	return dataImgURL
}

const svgToURI = (svg: string) => {
	const uri = `data:image/svg+xml;base64,${btoa(svg)}`
	return uri
}

const svgToPngURI = (svg: string) =>
	new Promise<string>((resolve, reject) => {
		const img = new Image()

		img.onload = () => {
			const canvas = document.createElement('canvas')
			canvas.width = img.naturalWidth
			canvas.height = img.naturalHeight
			const ctx = canvas.getContext('2d')
			ctx!.drawImage(img, 0, 0)
			resolve(canvas.toDataURL('image/png'))
			URL.revokeObjectURL(img.src)
		}
		img.onerror = (e) => {
			reject(e)
			URL.revokeObjectURL(img.src)
		}
		img.src = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }))
	})
