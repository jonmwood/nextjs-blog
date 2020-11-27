import { parseISO, format } from 'date-fns'

export default function Date({ dateString }: { dateString: string }) {
	console.log(dateString)
	const date = parseISO(dateString)
	console.log(date)
	return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
	// return null
}
