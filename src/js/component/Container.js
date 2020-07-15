import React from "react";

import Jumbotron from "./Jumbotron.js";
import Card from "./Card,js";

export function Container() {
	return (
        
		<div>
        
            <Jumbotron />
		
        	<div className="container">
				<div className="row">
					<div className="col" />
					<div className="col"> <Card /> </div>
					<div className="col"> <Card /> </div>
					<div className="col"> <Card /> </div>
				</div>
			</div>
		</div>
	);
}
