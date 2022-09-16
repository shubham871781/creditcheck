import React, {useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from './index';

import  {TOKEN}  from '../../InnerComponent/Route/index';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {

	let userrole = localStorage.getItem(TOKEN);
	console.log(userrole)
	let redirectRoute = '';
	if (userrole === 'admin') {
		redirectRoute = "/dashboard-admin"	
	}else if (userrole === 'user') {
		redirectRoute = "/dashboard-user"
	}else if (userrole === 'doctor'){
		redirectRoute = "/dashboard-doctor"
	}else if(userrole === null){
		redirectRoute ="/"
	}
	
	return (
        <Route {...rest} render={props => (
            isLogin() ?
                <Redirect to={redirectRoute} />
                : <Component {...props} />
        )} />
    );
};

export default PublicRoute;