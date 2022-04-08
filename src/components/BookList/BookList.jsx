import { Container } from "../shared";
import { useQuery } from "react-query";
import BookItem from "./BookItem/BookItem";
import { Spin } from "antd";
import clientApi from "./../../clientApi";

const BookList = () => {
	const { data, error, isLoading, isError } = useQuery("books", async () => {
		return await clientApi.get('/books').then((response) => response.data);
	})

	if (isLoading) {
		return (
			<Container>
				<Spin size="large" style={{ marginTop: '30vh', display: 'flex', justifyContent: 'center' }} />
			</Container>
		);
	}

	if (isError) {
		return <span>Error: {error.message}</span>;
	}

	return (
		<Container>
			{data.map(({ id, title, author }) => {
				return <BookItem key={id} id={id} title={title} author={author} />
			})}
		</Container>
	);
}
export default BookList;