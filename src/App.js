import {useState} from 'react'
import './App.css';
import Input from './components/Input'
import List from './components/List'
import Button from './components/Button'

function App() {
	const [items, setItems] = useState(['Medias', 'Chocolates', 'Libros'])

	const handleAdd = (item) => {
		setItems([...items, item])
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

	return (
		<div className="App">
			<h1 className="uppercase mb-2 text-lg font-bold text-xblue">Regalos</h1>
			<Button handler={handleRemoveAll}><span className='underline'>Eliminar Todos</span></Button>
			<Input handler={handleAdd}/>
			<List items={items} handleRemove={handleRemove}/>
		</div>
	);
}

export default App;
