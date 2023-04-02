import { useMemo } from 'react'
import { useEffect, useState } from 'react'

const Footer = () => {
	const [n, setN] = useState(900000000)

	const sum = useMemo(() => {
		console.log('Hesablanir...')
		let s = 0
		for (let i = 0; i <= n; i++) s += i
		return s
	}, [n])

	const inc = () => setN(n + 1)

	const dec = () => setN(n - 1)

	useEffect(() => {
		console.log('Footer')
	})

	return (
		<footer style={{ backgroundColor: 'pink' }}>
			<h5>Footer</h5>
			<button onClick={dec}>-</button>
			1-den {n}-e qeder ededlerin cemi: {sum}
			<button onClick={inc}>+</button>
		</footer>
	)
}

export default Footer
