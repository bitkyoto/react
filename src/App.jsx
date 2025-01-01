import './App.css'
import Header from './components/Header';
import Postview from './components/Postview';

const posts = [
  { title: 'Nosferatu', description: 'This is such a good movie!' },
  { title: 'Dumb and Dumber', description: 'Dogshit!' },
  { title: 'The Shawshank Redemption', description: 'A classic tale of hope and redemption.' },
  { title: 'The Godfather', description: 'An epic crime drama.' },
  { title: 'Pulp Fiction', description: 'A non-linear crime film by Quentin Tarantino.' },
  { title: 'The Dark Knight', description: 'A gripping superhero thriller.' },
  { title: 'Fight Club', description: 'A psychological thriller about insomnia and soap.' },
  { title: 'Inception', description: 'A mind-bending sci-fi thriller.' },
  { title: 'Forrest Gump', description: 'A heartwarming tale of a simple man.' },
  { title: 'The Matrix', description: 'A groundbreaking sci-fi action film.' },
  { title: 'Goodfellas', description: 'A classic gangster film by Martin Scorsese.' },
  { title: 'Seven', description: 'A dark and twisted crime thriller.' }
]

function App() {
  return (
    <>
      <Header/>
      <Postview posts={posts}/>
    </>
  )
}

export default App
