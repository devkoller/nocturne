import { ThemeProvider } from "@/context/theme-provider"
import { MoProvider } from "@/context/consultorio-provider"
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { LanguageProvider } from './context/LanguageContext';
import { Router } from "@/routes/Router"
import { store } from '@/store/store'
import { Toaster } from "@/components/ui/toaster"


function App() {

  return (
    <LanguageProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <MoProvider storageKey="vite-mo-selected">
          <Provider store={store}>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </Provider>
          <Toaster />
        </MoProvider>
      </ThemeProvider>
    </LanguageProvider>

  )
}

export default App
