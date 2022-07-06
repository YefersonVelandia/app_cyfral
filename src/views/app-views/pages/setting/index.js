import React, { Component } from 'react'
import { UserOutlined, LockOutlined, CreditCardOutlined, BellOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, Route, Switch } from 'react-router-dom';
import InnerAppLayout from 'layouts/inner-app-layout';
import EditProfile from './EditProfile';
import ChangePassword from './ChangePassword';
import Billing from './Billing';
import Notification from './Notification';

const SettingOption = ({ match, location }) => {
	return (
		<Menu
			defaultSelectedKeys={`${match.url}/edit-profile`}
			mode="inline"
			selectedKeys={[location.pathname]}
		>
			<Menu.Item key={`${match.url}/edit-profile`}>
				<UserOutlined />
				<span>Edit Profile</span>
				<Link to={`${match.url}?id=edit-profile`} />
			</Menu.Item>
			<Menu.Item key={`${match.url}/change-password`}>
				<LockOutlined />
				<span>Change Password</span>
				<Link to={`${match.url}?id=change-password`} />
			</Menu.Item>
			<Menu.Item key={`${match.url}/billing`}>
				<CreditCardOutlined />
				<span>Billing</span>
				<Link to={`${match.url}?id=billing`} />
			</Menu.Item>
			<Menu.Item key={`${match.url}/notification`}>
				<BellOutlined />
				<span>Notification</span>
				<Link to={`${match.url}?id=notification`} />
			</Menu.Item>
		</Menu>
	);
};

const SettingContent = (props) => {

	const {match} = props

	const getSettingComponent = () => {
		const val = new URLSearchParams(props.location.search).get("id")
		switch (val) {
			case 'edit-profile':
				return EditProfile
			case 'change-password':
				return ChangePassword
			case 'billing':
				return Billing
			case 'notification':
				return Notification
			default:
				return EditProfile
		}
	}

	return (
		<Switch>
			<Route path={`${match.url}`} component={getSettingComponent()} />
		</Switch>
	)
}

export class Setting extends Component {
	render() {
		return (
			<InnerAppLayout 
				sideContentWidth={320}
				sideContent={<SettingOption {...this.props}/>}
				mainContent={<SettingContent {...this.props}/>}
			/>
    	);
	}
}

export default Setting
