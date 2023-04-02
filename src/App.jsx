import { useEffect } from 'react'
import Body from './Body'
import Footer from './Footer'

const App = () => {
	useEffect(() => {
		console.log('App')
	})

	return (
		<section style={{ textAlign: 'center', padding: 20, backgroundColor: 'green' }}>
			<h5>App</h5>
			<Body />
			<Footer />
		</section>
	)
}

export default App
