import React from "react";
//import { fetchUpdateCard } from '../../redux/cardsActions'; 
import "./style.scss";
import brands from "../../jsons/namesOfBrands";
import { useState } from 'react';

export function BrandSliders(){

	const [current, setCurrent] = useState(0);
	const { pictures, slogan } = brands[current];
	const currentPictures = pictures.map((pictures,index) => {
		if(index === 2){
			const nextPhoto = brands[current].pictures[index+1];
			return (
				<div key={index} className="grid-column-together2">
					<img className={`img${index}`} src={pictures} alt={`pictur-${index}`}/>
					<img className={`img${index+1}`} src={nextPhoto} alt={`pictur-${index+1}`}/>
				</div>
			);
		} else if (index === 3 ) return null
			else {
			return (
				<img 
					className={`img${index}`} 
					key={index} 
					src={pictures} 
					alt={`pictur-${index}`}
				/>
			);
		}
	}

)
const slide = direction => {
	if (direction === 'left') {
		setCurrent(current === 0 ? brands.length-1 : current - 1);
	} else if (direction === 'right') {
		setCurrent(current === brands.length-1 ? 0 : current + 1);
	}
}
	return (
		<div className="collage-grid">
			<button onClick={()=>slide("left")} className="btn-arrow btn-arrow__left" type="button">
				<img alt ="arrow-left" src="/img/btns/sliderArrowLeft.svg">
					</img>
			</button>
			{currentPictures}
			<h3 className ="collage-slogan" >{slogan}</h3>
			<button onClick={()=>slide("right")} className="btn-arrow btn-arrow__right" type="button">
				<img alt ="arrow-right" src="/img/btns/sliderArrowRight.svg">
					</img>
			</button>
		</div>
	);
};

export default BrandSliders;

