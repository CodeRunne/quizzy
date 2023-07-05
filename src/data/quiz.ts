import { StaticImage } from 'next/image';

import FirstCategory from '../../public/images/img (1).jpg';
import SecondCategory from '../../public/images/img (2).jpg';
import ThirdCategory from '../../public/images/img (3).jpg';
import FourthCategory from '../../public/images/img (4).jpg';

export interface QuizDataProps {
	category: string,
	question: string,
	options: string[],
	correctAnswer: string
}

export interface QuizCategoryProps {
	id: number,
	title: string,
	image: StaticImage,
	slug: string,
	duration: string
}

export const quizData: QuizDataProps[] = [
	{
		question: "What are the caveats of using create-react-app. Give specifics.",
		category: "Reactjs",
		options: [
			"Building great apps",
			"Extending aesthism",
			"App is prone to crash, due to bundling errors",
			"It rerenders on every change"
		],
		correctAnswer: "App is prone to crash, due to bundling errors"	
	},
	{
		question: "What are the caveats of using create-react-app. Give specifics.",
		category: "Nextjs",
		options: [
			"Building great apps",
			"Extending aesthism",
			"App is prone to crash, due to bundling errors",
			"It rerenders on every change"
		],
		correctAnswer: "App is prone to crash, due to bundling errors"	
	},
	{
		question: "What are the caveats of using create-react-app. Give specifics.",
		category: "Solidity",
		options: [
			"Building great apps",
			"Extending aesthism",
			"App is prone to crash, due to bundling errors",
			"It rerenders on every change"
		],
		correctAnswer: "App is prone to crash, due to bundling errors"	
	},
	{
		question: "What are the caveats of using create-react-app. Give specifics.",
		category: "Laravel",
		options: [
			"Building great apps",
			"Extending aesthism",
			"App is prone to crash, due to bundling errors",
			"It rerenders on every change"
		],
		correctAnswer: "App is prone to crash, due to bundling errors"	
	},
];

export const quizCategories: QuizCategoryProps[] = [
	{
		id: 0,
		title: "Reactjs",
		image: FirstCategory,
		slug: "reactjs",
		duration: "30mins"
	},
	{
		id: 1,
		title: "Laravel",
		image: SecondCategory,
		slug: "laravel",
		duration: "1hr 2mins"
	},
	{
		id: 2,
		title: "Nextjs",
		image: ThirdCategory,
		slug: "nextjs",
		duration: "2hr"
	},
	{
		id: 3,
		title: "Solidity",
		image: FourthCategory,
		slug: "solidity",
		duration: "45mins"
	}
];	