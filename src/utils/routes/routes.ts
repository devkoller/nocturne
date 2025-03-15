// Views
import { Login } from "@/views/Login"
import { RecoveryPassword } from "@/views/RecoveryPassword"

import { Home } from "@/views/Home"
import { Users } from "@/views/Users"

//ICONS
// import { CiViewTable } from "react-icons/ci"
import {
	FaHome,
	FaUsers,
	// FaHandHoldingMedical,
	// FaWarehouse
	// FaUserInjured,
} from "react-icons/fa"
// import { LuHospital } from "react-icons/lu"

// import { IoNewspaperOutline, IoMedical } from "react-icons/io5"
// import { GiPelvisBone } from "react-icons/gi"
// import { BsHospitalFill } from "react-icons/bs"

export const routes = [
	{
		route: "/login",
		component: Login,
		state: "Not Authenticated",
		menu: false,
	},
	{
		route: "/recovery-password",
		component: RecoveryPassword,
		state: "Not Authenticated",
		menu: false,
	},
	// {
	// 	route: "/servicios",
	// 	component: Servicios,
	// 	state: "Not Granted",
	// 	menu: false,
	// },
	{
		route: "/home",
		component: Home,
		title: "Inicio",
		state: "Authenticated",
		breadcrumb: "Inicio",
		grants: null,
		menu: true,
		icon: FaHome,
	},
	{
		route: "/usuarios",
		component: Users,
		title: "Usuarios",
		state: "Authenticated",
		breadcrumb: "Usuarios",
		grants: null,
		menu: true,
		icon: FaUsers,
	},
]
