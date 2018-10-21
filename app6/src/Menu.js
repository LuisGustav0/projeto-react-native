import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import HelloWorld from './componentes/HelloWorld';
import ParOuImpar from './componentes/ParOuImpar';
import Inverter, { MegaSena } from './componentes/Multi';
import Contador from './componentes/Contador';
import Plataforma from './componentes/Plataforma';
import ValidarProps from './componentes/ValidarProps';
import Evento from './componentes/Evento';

export default createDrawerNavigator({
    Evento:{
        screen: Evento
    },
    ValidarProps:{
        screen: () => <ValidarProps ano={18} />
    },
    Plataforma: {
        screen: Plataforma
    },
    Contador: {
        screen: () => <Contador numero={8} />
    },
    MegaSena: {
        screen: () => <MegaSena numero={8} />,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto='React Nativo!' />
    },
    ParOuImpar: {
        screen: () => <ParOuImpar numero={30} />,
        navigationOptions: { title: 'Par & Ímpar' }
    },
    HelloWorld: {
        screen: () => <HelloWorld texto='Hello world!!!' />
    }
},{
    drawerWidth: 300
});