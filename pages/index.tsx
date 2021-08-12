import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'

export default function Home({
	allPostsData,
}: {
	allPostsData: {
		date: string
		title: string
		id: string
		published: boolean
	}[]
}) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className="">
				<p>[hey y'all nice to meet you!]</p>
				<p>
					(This is a sample website - you’ll be building a site like
					this on{' '}
					<a href="https://nextjs.org/learn">our Next.js tutorial</a>
					.)
				</p>
			</section>
			<section className="">
				<h2 className="text-3xl font-black">Blog</h2>
				<ul className="">
					{allPostsData.map(
						({ id, date, title, published }) =>
							published ? (
								<li
									className="text-l font-semibold pt-4 text-gray-600"
									key={id}>
									<Link href={`/posts/${id}`}>
										<a>{title}</a>
									</Link>
									<br />
									<small className="text-gray-500 font-normal">
										<Date dateString={date} />
									</small>
								</li>
							) : null
					)}
				</ul>
			</section>
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData,
		},
	}
}
