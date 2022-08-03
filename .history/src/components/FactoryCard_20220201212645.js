import React from "react";
import "./FactoryCard.css";
import avatar from "../content/photo3.jpg";



function FactoryCard(props) {
	return (
		<div className="card-container">
			<header>
				<img src={avatar} alt={props.name} />
			</header>
			<h1 className="bold-text">
				{props.name} <span className="normal-text">{props.Country}</span>
			</h1>
			<h2 className="normal-text">{props.Products}</h2>
			<div className="social-container">
				<div className="followers">
					<h1 className="bold-text">{props.Address}</h1>
					<h2 className="smaller-text">Address</h2>
				</div>
				<div className="likes">
					<h1 className="bold-text">{props.Email}</h1>
					<h2 className="smaller-text">Email</h2>
				</div>
				<div className="photos">
					<h1 className="bold-text">{props.Website}</h1>
					<h2 className="smaller-text">Website</h2>
				</div>
			</div>
		</div>
	);
}

export default FactoryCard;