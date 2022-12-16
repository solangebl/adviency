import { useState } from "react"
import Button from './Button'

export default function Input({ handler }) {

	const [item, setItem] = useState("") 
	const [amount, setAmount] = useState(1) 
	const handleClick = (e) => {
		e.preventDefault()
		handler(item, amount)
		setItem('')
		setAmount(1)
	}
	return (
		<form>
			<label>
				<input type="text" value={item} onChange={(e) => setItem(e.target.value)} className=" rounded-sm p-2 bg-slate-200" placeholder='Regalo' />
			</label>
			<label>
				x
				<input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-20 rounded-sm p-2 bg-slate-200" placeholder='Cantidad' />
			</label>
			<Button handler={(e) => handleClick(e)} cstyle="bg-xgreen"> OK!</Button>
		</form>
	)
}