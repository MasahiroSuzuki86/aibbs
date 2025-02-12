import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function ThreadDetail() {
  const { id } = useParams();
  const [thread, setThread] = useState(null);
  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    fetchThread();
  }, [id]);

  const fetchThread = async () => {
    const response = await fetch(`http://localhost:3001/api/threads/${id}`);
    const data = await response.json();
    setThread(data);
  };

  const createPost = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:3001/api/threads/${id}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: newPost }),
    });
    setNewPost('');
    fetchThread();
  };

  if (!thread) return <div>Loading...</div>;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">{thread.title}</h2>
        <Link
          to="/"
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 flex items-center"
        >
          ← スレッド一覧に戻る
        </Link>
      </div>

      <div className="space-y-4 mb-8">
        {thread.posts.map((post, index) => (
          <div key={post.id} className="bg-white p-4 rounded shadow">
            <div className="text-green-700 font-bold">
              {index + 1}: {new Date(post.createdAt).toLocaleString()}
            </div>
            <div className="mt-2 whitespace-pre-wrap text-gray-700">{post.content}</div>
          </div>
        ))}
      </div>

      <form onSubmit={createPost} className="mt-4">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="レスを入力"
          className="w-full p-2 border rounded bg-white text-gray-800"
          rows="4"
          required
        />
        <button
          type="submit"
          className={`mt-2 px-4 py-2 rounded text-white ${
            newPost.trim() ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'
          }`}
          disabled={!newPost.trim()}
        >
          投稿する
        </button>
      </form>
    </div>
  );
}

export default ThreadDetail;
