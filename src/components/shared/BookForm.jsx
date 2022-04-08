import { EditOutlined, LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useForm } from "react-hook-form";
export const BookForm = ({ defaultValues, onFormSubmit, isLoading }) => {
	const { register, handleSubmit } = useForm({ defaultValues });
	const submit = handleSubmit((data) => {
		onFormSubmit(data);
	})

	return (
		<form onSubmit={submit}>
			<input {...register("title")} style={{ padding: 16, width: '100%', marginBottom: 8 }} id="title" name="title" type="text" placeholder="Title" />
			<input {...register("author")} style={{ padding: 16, width: '100%', marginBottom: 8 }} id="author" name="author" type="text" placeholder="Author" />
			<Button
				style={{ width: 160, height: 40 }}
				onClick={submit}
				icon={defaultValues ? (isLoading ? <LoadingOutlined /> : <EditOutlined />) : (isLoading ? <LoadingOutlined /> : <PlusOutlined />)}
			>
				{defaultValues ? `${isLoading ? 'Saving...' : 'Edit'}` : `${isLoading ? 'Saving...' : 'Submit'}`}
			</Button>
		</form>
	);
};