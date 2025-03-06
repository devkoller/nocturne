import { createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({
	name: "auth",
	initialState: {
		isAuthenticated: "Checking", // checking, true, false
		id: null,
		name: null,
		lastname1: null,
		lastname2: null,
		email: null,
		keepSessionOpen: null,
		permisos: null,
		token: null,
		error: null,
		errorMessage: null,
		loading: true,
	},
	reducers: {
		onLogin: (state, { payload }) => {
			state.isAuthenticated = "Authenticated"
			state.id = payload.id
			state.name = payload.name
			state.lastname1 = payload.lastname1
			state.lastname2 = payload.lastname2
			state.email = payload.email
			state.keepSessionOpen = payload.keepSessionOpen
			state.permisos = payload.permisos
			state.token = payload.token
			state.error = null
			state.errorMessage = null
			state.loading = false
		},
		/* Setting the state to the initial state. */
		onLogout: (state, { payload }) => {
			state.isAuthenticated = "Not Authenticated"
			state.id = null
			state.name = null
			state.lastname1 = null
			state.lastname2 = null
			state.email = null
			state.keepSessionOpen = null
			state.permisos = null
			state.token = null
			state.error = null
			state.errorMessage = payload
			state.loading = false
		},
		onCheckingCredentials: (state) => {
			state.isAuthenticated = "Checking"
			state.error = null
			state.errorMessage = null
			state.loading = true
		},
		clearErrorMessage: (state) => {
			state.errorMessage = null
		},
	},
})

export const { onLogin, onLogout, onCheckingCredentials, clearErrorMessage } =
	authSlice.actions
