import { Route, Routes } from 'react-router-dom';

import ThemeProvider from './store/ThemeProvider';

import Layout from './views/Layout';
import Home from './views/Home';
import About from './views/About';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
