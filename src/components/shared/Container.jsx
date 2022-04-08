import styled from "styled-components";

const Box = styled.div`
	max-width: 1200px;
  margin: 0 auto;
	padding: 0 24px;
	// background: teal;`
export const Container = ({ children }) => {
	return (
		<Box>
			{children}
		</Box>
	);
};