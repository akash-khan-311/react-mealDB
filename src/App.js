
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact'
import FoodDetails from './components/FoodDetails/FoodDetails';
import Foods from './components/Foods/Foods';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Layout from './Layout/Layout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        { path: '/', element: <Home /> },
        { path: '/home', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/services', element: <Services /> },
        {
          path: '/foods', loader: async () => {
            return fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
          }, element: <Foods />
        },
        { path: '/contact', element: <Contact /> },
        {
          path: '/food/:id',
          loader: async ({ params }) => {
            return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
          }
          , element: <FoodDetails />
        }
      ],
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
