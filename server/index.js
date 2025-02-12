import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

// スレッド一覧を取得
app.get('/api/threads', async (req, res) => {
  const threads = await prisma.thread.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  });
  res.json(threads);
});

// スレッド詳細とレスを取得
app.get('/api/threads/:id', async (req, res) => {
  const thread = await prisma.thread.findUnique({
    where: {
      id: parseInt(req.params.id)
    },
    include: {
      posts: true
    }
  });
  res.json(thread);
});

// 新しいスレッドを作成
app.post('/api/threads', async (req, res) => {
  const thread = await prisma.thread.create({
    data: {
      title: req.body.title
    }
  });
  res.json(thread);
});

// レスを投稿
app.post('/api/threads/:id/posts', async (req, res) => {
  const post = await prisma.post.create({
    data: {
      content: req.body.content,
      threadId: parseInt(req.params.id)
    }
  });
  res.json(post);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
