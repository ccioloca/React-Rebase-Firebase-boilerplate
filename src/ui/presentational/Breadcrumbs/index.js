import React from 'react';
import Breadcrumbs from 'react-breadcrumbs';

const UserBreadcrumbs = ({ routes, params }) =>  {
	return (
		<Breadcrumbs  routes={routes}
									params={params}
									wrapperClass="breadcrumbs"
									itemClass="breadcrumbs__item"
									separator=" | " />
	)
}


export default UserBreadcrumbs
