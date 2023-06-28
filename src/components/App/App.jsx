import { useMediaQuery } from 'react-responsive';
import Main from 'components/Main';
import Sidebar from 'components/Sidebar';
import './App.css';
import Footer from 'components/Footer';

function App() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <div className="main-container">
      {isDesktop && <Sidebar />}
      <div>
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;

// npm install --save-dev prettier eslint
// npx mrm@2 lint-staged
// npm i @emotion/react
// npm install react-router-dom@5

// npm install --save-dev prop-types
// npm install react-icons --save
// npm install modern-normalize
// npm i nanoid
// npm i react-toastify
// npm install axios
// npm install --save react-spinners
// npm i react-use
