import { useRouteError } from "react-router-dom"

export const ErrorPage = () => {

	const error = useRouteError()


	return (
		<>
			<div> Error</div>
			<p>{error?.message ||  'Нет ошибки'}</p>
		</>

	)
}