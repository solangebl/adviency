import {useState} from 'react'
import './App.css';
import Input from './components/Input'
import List from './components/List'

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

	return (
		<div className="App">
			<h1 className="uppercase mb-2 text-lg font-bold text-xblue">Regalos</h1>
			<Input handler={handleAdd}/>
			<List items={items} handleRemove={handleRemove}/>
		</div>
	);
}

export default App;
