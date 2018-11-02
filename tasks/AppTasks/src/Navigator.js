import { createSwitchNavigator } from 'react-navigation'

import Auth from './views/auth/Auth'
import Agenda from './views/agenda/Agenda'

const MainRoutes = {
    Auth: {
        name: 'Auth',
        screen: Auth
    },
    Home: {
        name: 'Home',
        screen: Agenda
    }
}

const MainNavigator = createSwitchNavigator(
    MainRoutes,
    { initialRouteName: 'Auth' }
)

export default MainNavigator
