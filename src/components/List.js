import Button from './Button'

export default function List({items, handleRemove}) {
	const listItems = items.map((item, index) => (<li key={index}>{item} <Button handler={() => handleRemove(index)}><span className='p-1 rounded-full bg-red-600 text-white'>X</span></Button></li>))
	return (
		<ul className="list-none text-xred">
			{listItems}
		</ul>
	)
}