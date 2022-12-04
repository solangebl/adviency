import { useState } from "react"
import Button from './Button'

export default function Input({ handler }) {

	const [item, setItem] = useState("") 
	const handleClick = (e) => {
		e.preventDefault()
		handler(item)
		setItem('')
	}
	return (
		<form>
			<label>
				<input type="text" value={item} onChange={(e) => setItem(e.target.value)} className=" rounded-sm p-2 bg-slate-200" placeholder='Regalo' />
			</label>
			<Button handler={(e) => handleClick(e)} cstyle="bg-xgreen"> OK!</Button>
		</form>
	)
}