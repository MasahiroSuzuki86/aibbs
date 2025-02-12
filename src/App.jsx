import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThreadList from './components/ThreadList';
import ThreadDetail from './components/ThreadDetail';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-gray-100">
        <header className="bg-blue-600 text-white p-4 w-full">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">掲示板</h1>
          </div>
        </header>
        <main className="container mx-auto p-4 w-full max-w-4xl">
          <Routes>
            <Route path="/" element={<ThreadList />} />
            <Route path="/thread/:id" element={<ThreadDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
