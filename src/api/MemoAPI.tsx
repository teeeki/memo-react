export type MemoListType = {
	index: number;
	title: string;
	username: string;
	summary: string;
	content: string;

}

export default function MemoAPI() {
	const API_BASE = "http://127.0.0.1:8000/api";

	return {
		getMemos: async (): Promise<MemoListType[]> => {
			const res = await fetch(`${API_BASE}/get-memos`);
			const memo_data: MemoListType[] = await res.json();
			return memo_data;
		}
	}
}