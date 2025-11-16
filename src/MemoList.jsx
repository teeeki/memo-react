import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/ui/card';
import PageHeader from './layouts/PageHeader';


const MemoList = () => {

  const [memos, setMemos] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_BASE = "http://127.0.0.1:8000/api";

  // GET: /api/get-memos (メモの一覧取得)
  const fetchMemos = async () => {
    try {
      const response = await fetch(`${API_BASE}/get-memos`);
      console.log(response);
      const memo_data = await response.json();
      console.log("API response:", memo_data);
      setMemos(memo_data);
    } catch (error) {
      console.error("メモの取得に失敗しました:", error);
    } finally {
      setLoading(false);
    }
  };

  // コンポーネントのマウント時にメモを取得
  useEffect(() => {
    fetchMemos();
  }, []);

  return (
    <>
      <PageHeader />
      <div className="memo-container">
        <h1>共有メモ一覧</h1>
        {loading ? (
          <p>メモを読み込み中...</p>
        ) :
          memos === null ? (
            <p>メモがありません</p>
          ) : (
            <div className="memo-list">
              {memos.map((memo, index) => (
                <Card
                  key={index}
                  title={memo.title}
                  username={memo.username}
                  summary={memo.summary}
                />
              ))}
            </div>
          )}
      </div>

    </>
  )
}

export default MemoList
