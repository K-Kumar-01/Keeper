import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Login from './auth/Login';
import Signup from './auth/Signup';
import NoteList from './Note/NoteList';

function App() {
	return (
		<BrowserRouter>
			<Header></Header>
			<Route path="/login">
				<Login/>
			</Route>
			<Route path="/signup">
				<Signup/>
			</Route>
			<NoteList/>
			<Footer></Footer>
		</BrowserRouter>
	);
}

export default App;
