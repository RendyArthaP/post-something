import '../styles/globals.scss'
import { AuthProvider } from '../components/Hooks/useAuth';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
