export default function Button({handler, cstyle='', children}) {
	return (
		<button onClick={handler} className="p-2 {cstyle}">{children}</button>
	)
}