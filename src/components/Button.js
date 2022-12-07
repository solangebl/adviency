export default function Button({handler, children}) {
	return (
		<button onClick={handler} className="p-2">{children}</button>
	)
}