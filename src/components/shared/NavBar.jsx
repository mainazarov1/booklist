import styled from "styled-components";
import { Container } from "../shared";
import { Link } from "react-router-dom";
import { BookOutlined, PlusOutlined } from "@ant-design/icons";
const Header = styled.div`
	display: flex;
	// align-items: center;
	// background: lightblue;
	// padding: 8px 0;
	`
const Box = styled.div`
	margin: 0 auto;`

export const NavBar = () => {
	return (
		<Container >
			<Header>
				<Link to="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
					<BookOutlined style={{fontSize: 40}}/>
				</Link>
				<Box />
				<Link to="/create-book"><PlusOutlined /> Add Book</Link>
			</Header>
		</Container>
	);
};