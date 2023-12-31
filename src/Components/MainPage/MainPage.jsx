import { useParams } from "react-router-dom"
import { Container } from "../Layout/Container/Container"

export const MainPage = ({gender = 'woman' }) => {

	const {category} = useParams()

	return (
		<Container>
			<div>Main Page {gender}</div>
			{category && <p>Категория: {category}</p>}
		</Container>
)}