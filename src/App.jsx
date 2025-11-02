import { useState } from 'react'
import './App.css'

function Card({ title, username, summary }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>作成者: {username}</p>
      <p>{summary}</p>
    </div>
  );
}

function MemoList() {
  const [memos] = useState([
    { title: "買い物リスト", username: "alice", summary: "週末の買い物" },
    { title: "会議メモ", username: "bob", summary: "月曜の打合せ" },
    { title: "旅行計画", username: "charlie", summary: "夏休み旅行" },
    { title: "読書メモ", username: "diana", summary: "技術書の要点" },
    { title: "アイデアノート", username: "eve", summary: "新アプリの構想" },
  ]);

  return (
    <>
      <div>
        <h1>共有メモ一覧</h1>
        <div>
          {memos.map((memo, index) => (
            <Card
              key={index}
              title={memo.title}
              username={memo.username}
              summary={memo.summary}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default MemoList
