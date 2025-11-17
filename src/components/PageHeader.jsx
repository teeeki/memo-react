import { useNavigate } from 'react-router-dom';

function PageHeader() {
	const navigate = useNavigate();


	return (
		<header className="app-header">
			<div className="app-header__content">
				<h1>共有メモアプリ</h1>

				<div className="app-header__actions">
					<button type="button" className="app-header__cta" onClick={() => navigate('/create')}>
						新規メモを作成
					</button>
				</div>
			</div>
		</header>
	);
}

export default PageHeader;