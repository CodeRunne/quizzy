import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { quizCategories, quizData, QuizDataProps } from '@/data/quiz';


interface QuizProps {
	quiz: array
}


function Quiz({ quiz }: QuizProps) {
	const router = useRouter();
	const { question, options, correctAnswer } = quiz;
	
	return (
		<>
			<Head>
				<title>{question}</title>
			</Head>

			<main>
				<span onClick={() => router.back()}>Back</span>
				<h1>{question}</h1>
			</main>
		</>
	)
}

export default Quiz;

export async function getStaticPaths() {
	const params = quizCategories.map(({ slug }) => ({
		params: {slug}
	}));

	return {
		paths: params,
		fallback: false
	}
}

type Params = {
	params: {
		slug: string
	}
}

export async function getStaticProps({ params }: Params) {
	const quizCategory = quizCategories.filter(({ slug }) => slug === params.slug)[0].title;
	const quiz = quizData.filter(({ category }) => category === quizCategory)[0];

	return {
		props: {
			quiz
		}
	}
}