import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/shared';
import CreateBook from './components/CreateBook/CreateBook';
import UpdateBook from './components/UpdateBook/UpdateBook';
import BookList from './components/BookList/BookList';
import "./App.css";
import { Layout } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';

function App() {
	return (
		<div className="App">
			<Layout>
				<Header style={{ padding: 0, position: 'fixed', width: '100%', zIndex: 100 }}>
					<NavBar />
				</Header>
				<Content style={{ minHeight: '100vh', paddingTop: 100, paddingBottom: 24 }}>
					<Routes>
						<Route path="/create-book" element={<CreateBook />} />
						<Route path="/update-book/:id" element={<UpdateBook />} />
						<Route path="/" element={<BookList />} />
					</Routes>
				</Content>
			</Layout>
		</div>
	);
}

export default App;
