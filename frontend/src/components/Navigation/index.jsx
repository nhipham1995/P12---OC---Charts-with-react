import "./navigation.css";

const Navigation = () => {
	return (
		<nav className="menu">
			<div className="logo">
				<img src="/assets/logo.png" alt="Company Logo"></img>
				<p className="company-name">SportSee</p>
			</div>
			<ul>
				<li className="menun-item">Accueil</li>
				<li className="menu-item">Profil</li>
				<li className="menu-item">Réglage</li>
				<li className="menu-item">Communauté</li>
			</ul>
		</nav>
	);
};

export default Navigation;
