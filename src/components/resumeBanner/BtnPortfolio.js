/*
POPOUT Button component to link back to Kiu's portfolio
has the css, js, and html component
THis component enable a hovering action for the banner 'Return to Kiu's resume page'
*/
import React from 'react'
import {FaRegCaretSquareLeft} from 'react-icons/fa'
import {IconContext} from 'react-icons'
import './btnPortfolio.css'

export default function BtnPortfolio() {
	setTimeout(() => {
		let element = document.querySelector('.return-pop-out')
		element.addEventListener('mouseenter', (e) => {
			e.target.style.cssText =
				'-webkit-transform: translate(-205px, 0px);	transform: translate(-205px, 0px);'
		})
		element.addEventListener('mouseleave', (e) => {
			e.target.style.cssText =
				'-webkit-transform: translate(0px, 0px);	transform: translate(0px, 0px);'
		})
	}, 4500)

	return (
		<aside>
			<a
				href="https://zkiu.github.io/portfolio/"
				aria-describedby="return to resume link"
				tabIndex="20"
				className="return-pop-out"
			>
				<IconContext.Provider value={{className: 'icon'}}>
					<FaRegCaretSquareLeft />
				</IconContext.Provider>
				<div id="return">Return to Kiu's resume page</div>
			</a>
		</aside>
	)
}
