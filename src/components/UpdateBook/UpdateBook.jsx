import { BookForm, Container } from "../shared";
import { useQuery, useMutation } from "react-query";
import clientApi from "../../clientApi";
import { useParams, useNavigate } from "react-router-dom";
import { Typography, Spin } from "antd";

const UpdateBook = () => {
	const { id } = useParams();
	const history = useNavigate();

	const getBook = async ({ queryKey }) => {
		const [_key, { id }] = queryKey;
		return await clientApi.get(`books/${id}`, data)
			.then((res) => res.data);
	};

	const updateBook = async ({ id, ...data }) => {
		return await clientApi.put(`books/${id}`, data);
	};
	const { data, error, isLoading, isError } = useQuery(["book", { id }], getBook);
	const { mutateAsync, isLoading: isMutating } = useMutation(updateBook);
	const { Title } = Typography;
	const onFormSubmit = async (formData) => {
		await mutateAsync({ ...formData, id });
		history("/");
	}

	if (isLoading) {
		return (
			<Container>
				<Spin size="large" style={{ marginTop: '30vh', display: 'flex', justifyContent: 'center' }} />
			</Container>
		);
	}

	if (isError) {
		return (
			<Container>
				Error: {error.message}
			</Container>
		);
	}

	return (
		<Container>
			<Title level={2}>Update Book</Title>
			<BookForm defaultValues={data} onFormSubmit={onFormSubmit} isLoading={isMutating} />
		</Container>
	);
};
export default UpdateBook;