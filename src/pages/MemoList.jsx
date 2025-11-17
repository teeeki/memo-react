import { useEffect, useState } from 'react';
import MemoAPI from '../api/MemoAPI';
import '../assets/styles/App.css';
import Card from '../components/Card';
import PageHeader from '../components/PageHeader';


const MemoList = () => {

  const [memos, setMemos] = useState([]);
  const [loading, setLoading] = useState(true);
  const memoAPI = MemoAPI();

  // GET: /api/get-memos (メモの一覧取得)
  const fetchMemos = async () => {
    try {
      const memo_data = await memoAPI.getMemos();
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
