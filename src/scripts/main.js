import '../styles/main.css';
import '../styles/radar.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import ProductSearch from './ProductSearch';
import ApiDocSwagger from './ApiDocSwagger';


/**
 * NOTE: You can turn on the below components when the backend services are fully configured
 */
const ENABLE = false;

// TODO: Find a better way to render the dom 
const searchContainer = document.querySelector('#search-container');
ENABLE && (searchContainer) && ReactDOM.render(<Search />, searchContainer);

// Instantiate Product component
const prodSearchContainer = document.querySelector('#productsearch-container');
ENABLE && (prodSearchContainer) && ReactDOM.render(<ProductSearch />, prodSearchContainer);

// Instantiate API Swagger component
const apiswaggerContainer = document.querySelector('#apiswagger-container');
(apiswaggerContainer) && ReactDOM.render(<ApiDocSwagger />, apiswaggerContainer);

import { Swiper, Pagination, Autoplay, Thumbs, EffectFade } from "swiper";
Swiper.use([Pagination, Autoplay, Thumbs, EffectFade])

export default new class Hero {
	constructor() {
		this.hero = 'section-banner';
		this.swiper = 'section-banner__swiper'
		this.handler();
	}

	handler() {
		const hero = document.querySelector(`.${this.hero}`)

		if (!hero) return;


		const swiper = new Swiper(`.${this.swiper}`, {
			slidesPerView: 1,
			loop: true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
		})
	}
}

const swiper = new Swiper('.section-news__swiper', {
	slidesPerView: 1,
	spaceBetween: 8,
	autoplay: {
		delay: 1500,
		disableOnInteraction: false
	},

	breakpoints: {
		360: {
			slidesPerView: 2,
			spaceBetween: 16,
		},

		640: {
			slidesPerView: 'auto',
			spaceBetween: 0
		}
	}
})

const swiperProductThumbs = new Swiper('.swiper-product-page-thumbs', {
	slidesPerView: 'auto',
	spaceBetween: 16,
	watchSlidesProgress: true
})

const swiperProduct = new Swiper('.swiper-product-page', {
	slidesPerView: 1,
	effect: "fade",
	thumbs: {
		swiper: swiperProductThumbs
	}
})

const swiperLike = new Swiper ('.swiper-from-recomended', {
	slidesPerView: 'auto',
	breakpoints: {

		640: {
			slidesPerView: 4,
			spaceBetween: 16,
		}
	}
})