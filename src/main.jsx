
import { createRoot } from 'react-dom/client'
import './styles/main.scss'
import App from './App.jsx'
import 'animate.css';
import { AuthProvider } from './contexts/AuthContext.jsx';



createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <App />
  </AuthProvider>,
)
