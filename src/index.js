import ReactDOM from 'react-dom/client';
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css'

function App(){
    return (
        <div className='container'>
            <h1>Rick and Morty</h1>
            <nav className='navbar sticky-top navbar-light bg-dark'>.
                <h1 className='navbar-brand text-light'>Rick and Morty</h1>
            </nav>
            <List />
        </div>
    )
}

//rendu du composant App
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);