import React from "react";
import 'antd/dist/antd.css';
import { Row, Col, Button, Typography } from "antd";
import { DeleteOutlined, LoadingOutlined } from "@ant-design/icons";
import { useQueryClient, useMutation } from "react-query";
import clientApi from "../../../clientApi";
import { Link } from "react-router-dom";

const BookItem = ({ id, title, author }) => {
	const queryClient = useQueryClient();
	const removeBook = async (id) => {
		await clientApi.delete(
			`/books/${id}`).then((response) => console.log(response));
		return true;
	};
	const { mutateAsync, isLoading } = useMutation(removeBook);
	const { Text } = Typography;

	const remove = async () => {
		await mutateAsync(id);
		queryClient.invalidateQueries('books');
	}
	return (
		<Row>
			<Col xs={24} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '8px 0' }}>
				<div style={{ width: '100%', display: 'flex' }}>
					<Link to={`/update-book/${id}`} style={{ marginRight: 'auto' }}>
						{title}
					</Link>
					<Text className="text" id={id}>{author}</Text>
				</div>
				<Button icon={isLoading ? <LoadingOutlined /> : <DeleteOutlined />} onClick={remove} style={{ marginLeft: 20 }} type="primary" danger ghost isLoading={'loading'}>
					{isLoading ? "Removing" : "Remove"}
				</Button>
			</Col>
		</Row>
	)
}

export default BookItem;