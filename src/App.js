import {useState} from 'react'
import './App.css';
import Input from './components/Input'
import List from './components/List'
import Message from './components/Message'
import Button from './components/Button'

function App() {
	const [items, setItems] = useState(['Medias', 'Chocolates', 'Libros'])

	const handleAdd = (item) => {
		if (validItem(item)) {
			setItems([...items, item])
		}
	}

	const handleRemove = (index) => {
		setItems(items.filter((v, i) => {
			return i!==index
		}))
	}

	const handleRemoveAll = () => {
		console.log('remove all')
		setItems([])
	}

	const validItem = (item) => {
		return item!=='' && items.findIndex((val) => (val.toLowerCase() === item.toLowerCase())) === -1
	}

	let action
	if (items.length>0) {
		action = <Button handler={handleRemoveAll}><span className='underline'>Eliminar Todos</span></Button>
	} else {
		action = <Message msg="Empezá a agregar regalos!" />
	}

	return (
		<div className="App">
			<h1 className="uppercase mb-2 text-lg font-bold text-xblue">Regalos</h1>
			{action}
			<Input handler={handleAdd}/>

			<List items={items} handleRemove={handleRemove}/>
		</div>
	);
}

export default App;
