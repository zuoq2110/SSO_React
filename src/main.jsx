
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
        domain='dev-2omaqug0m4yz8th6.us.auth0.com'
        clientId='9xhJ4DAPxgxZogRXvRWcz2T09qk7MbDa'
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
    >
        <App />
    </Auth0Provider>
)
