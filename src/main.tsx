import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AuthProvider } from './components/AuthProvider'
import Routes from './components/Routes'



ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<AuthProvider>
			<Routes />
		</AuthProvider>
	</React.StrictMode>,
)
