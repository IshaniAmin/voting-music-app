import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import SongView from './SongView'
import Nav from './Nav'
import App from '../App'
import Name from './Name'
import Welcome from './Welcome'
import GraphPage from './GraphPage'
import addSong from './addSong'

const Home = (props) => (
<Router>
	<div>
		<Nav />
		<Route exact path="/" component={Welcome} />
		<Route exact path="/home" component={App} />
		<Route exact path="/graph" component={GraphPage} />
		<Route exact path="/addSong" component={addSong} />
		<Route path="/names/:name" component={Name} />
		<Route path="/songs/:id" component={SongView} />
	</div>
</Router>
)

export default Home;