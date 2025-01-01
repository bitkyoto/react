import './App.css'
import Header from './components/Header';
import Post from './components/Post';
function App() {
  return (
    <>
      <Header/>
      <div className="posts_view">
        <Post title='Nosferatu' description='This is such a good movie!'/> 
        <Post title='Dumb and dumber' description='Dogshit!'/> 
        <Post title='Dumb and dumber' description='Dogshit!'/> 
        <Post title='Dumb and dumber' description='Dogshit!'/> 
        <Post title='Dumb and dumber' description='Dogshit!'/> 
        <Post title='Dumb and dumber' description='Dogshit!'/> 
        <Post title='Dumb and dumber' description='Dogshit!'/> 
        <Post title='Dumb and dumber' description='Dogshit!'/> 
        <Post title='Dumb and dumber' description='Dogshit!'/> 
        <Post title='Dumb and dumber' description='Dogshit!'/> 
        <Post title='Dumb and dumber' description='Dogshit!'/> 
        <Post title='Dumb and dumber' description='Dogshit!'/> 
        <Post title='Dumb and dumber' description='Dogshit!'/> 
      </div>
    </>
  )
}

export default App
