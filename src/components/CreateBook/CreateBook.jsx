import { Container, BookForm } from "../shared";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import clientApi from "../../clientApi";
import { Typography } from "antd";

const CreateBook = () => {
	const { Title } = Typography;
	const history = useNavigate();
	const createBook = async ({ ...data }) => {
		const response = await clientApi.post(`books`, data);
		return response.json();
	};
	const { mutateAsync, isLoading } = useMutation(createBook);
	const onFormSubmit = async (data) => {
		await mutateAsync({ ...data }).then(
			setTimeout(() => {
				(history("/"));
			}, 1000)
		)
	}

	return (
		<Container>
			<Title level={2}>Create New Book</Title>
			<BookForm onFormSubmit={onFormSubmit} isLoading={isLoading} />
		</Container>
	)
}
export default CreateBook;