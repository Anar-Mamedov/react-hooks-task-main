import Header from './Header'
import Content from './Content'
import { useRef } from 'react'
import { useReducer } from 'react'
import ItemContext, { _items, _setItems } from './Context'

const Body = () => {
	const [items, setItems] = useReducer(_setItems, _items)
	const ref = useRef()

	const add = () => {
		const { value } = ref.current
		setItems({ name: 'ADD', value })
		ref.current.value = ''
	}

	return (
		<ItemContext.Provider value={{ value: [items, setItems] }}>
			<Header />
			<input ref={ref} />
			<button onClick={add}>add</button>
			<hr />
			<Content />
			<hr />
		</ItemContext.Provider>
	)
}

export default Body
