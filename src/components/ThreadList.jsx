import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ThreadList() {
  const [threads, setThreads] = useState([]);
  const [newTitle, setNewTitle] = useState('');

  useEffect(() => {
    fetchThreads();
  }, []);

  const fetchThreads = async () => {
    const response = await fetch('http://localhost:3001/api/threads');
    const data = await response.json();
    setThreads(data);
  };

  const createThread = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:3001/api/threads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: newTitle }),
    });
    setNewTitle('');
    fetchThreads();
  };

  return (
    <div className="w-full">
      <form onSubmit={createThread} className="mb-8">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="スレッドタイトル"
          className="w-full p-2 border rounded bg-white text-gray-800"
          required
        />
        <button
          type="submit"
          className={`mt-2 px-4 py-2 rounded text-white ${
            newTitle.trim() ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'
          }`}
          disabled={!newTitle.trim()}
        >
          スレッド作成
        </button>
      </form>

      <div className="space-y-4">
        {threads.map((thread) => (
          <div key={thread.id} className="bg-white p-4 rounded shadow">
            <Link to={`/thread/${thread.id}`} className="text-blue-600 hover:underline">
              {thread.title}
            </Link>
            <div className="text-sm text-gray-500">
              {new Date(thread.createdAt).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThreadList;
