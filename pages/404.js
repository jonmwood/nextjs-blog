import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function (props) {
	return (
		<Layout>
			<Head>
				<title>Sorry! Page not found</title>
			</Head>
			<h1>404 - Page Not Found!</h1>
			<h3>Sorry, it looks like something broke.</h3>
		</Layout>
	)
}
