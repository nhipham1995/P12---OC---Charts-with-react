import React from "react";
import "../styles/pages/404.css";

function PageNotFound() {
	return (
		<div className="not-found">
			<h1>404</h1>
			<p>Oups! La page que vous demandez n'existe pas.</p>
			<p>Les données ne sont pas disponibles</p>

			<a href="/user/12">Retournez </a>
		</div>
	);
}

export default PageNotFound;
