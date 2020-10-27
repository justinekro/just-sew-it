import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../ui';

const NotFoundPage = () => (
	<Layout>
		404 ! -<Link to='/'>Go to home page</Link>
	</Layout>
);

export default NotFoundPage;
