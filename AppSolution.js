import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { 
  return <h1>Home</h1>;
}

function About() { 
  return <h1>About</h1>;
}

function NotFound() { 
  let location = useLocation();
  return (
    <h1>404 Not Found</h1>
    <h2>{location.pathname}</h2>
  );
}
