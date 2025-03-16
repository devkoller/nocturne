import { Route, Routes, Navigate } from "react-router-dom"
import { Landing } from "@/views/Landing"
import { useAuthStore } from "@/hooks"
import { routes as elements } from "@/utils"

export const Router = () => {
  const { isAuthenticated } = useAuthStore()

  const printRoutes = () => {
    return elements.map((route) => {
      if (route.state === 'Not Granted') {
        return (
          <Route
            key={route.route}
            path={route.route}
            element={<route.component />}
          />
        )
      } else if (route.state === "Authenticated") {
        if (isAuthenticated === "Authenticated") {
          return (
            <Route
              key={route.route}
              path={route.route}
              element={<route.component />}
            />
          )
        } else {
          return (
            <Route
              key={route.route}
              path={route.route}
              element={<Navigate to="/login" />}
            />
          )
        }
      } else if (route.state === "Not Authenticated") {
        if (isAuthenticated === "Not Authenticated") {
          return (
            <Route
              key={route.route}
              path={route.route}
              element={<route.component />}
            />
          )
        } else {
          return (
            <Route
              key={route.route}
              path={route.route}
              element={<Navigate to="/home" />}
            />
          )
        }
      }
    })
  }

  // if (isAuthenticated === "Checking") {
  //   return <Building />
  // }


  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      {printRoutes()}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
