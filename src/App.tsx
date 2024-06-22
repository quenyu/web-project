import { Route, Routes } from 'react-router-dom'
import './styles/index.scss';
import { Link } from 'react-router-dom'
import { Suspense, useContext } from 'react'
import { MainLazy } from './pages/Main/Main.lazy'
import { AboutLazy } from './pages/About/About.lazy'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to='/about'>
        О сайте
      </Link>
      <Link to='/'>
        Главная
      </Link>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainLazy />} />
          <Route path='/about' element={<AboutLazy />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App