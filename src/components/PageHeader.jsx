
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../api/AuthContext.jsx';

function PageHeader() {
	const navigate = useNavigate();
	const { user, logout } = useAuth();

	return (
		<header className="app-header">
			<div className="app-header__content">
				<h1>hoge</h1>
				<div className="app-header__actions">
					<button type="button" className="app-header__cta" onClick={() => navigate('/create')}>
						新規メモを作成
					</button>
					{user && (
						<button type="button" className="app-header__cta" style={{ marginLeft: '1rem' }} onClick={logout}>
							ログアウト
						</button>
					)}
				</div>
			</div>
		</header>
	);
}

export default PageHeader;