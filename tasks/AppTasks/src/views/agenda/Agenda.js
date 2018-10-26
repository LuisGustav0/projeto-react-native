import React from 'react'
import { 
    View,
    Text,
    ImageBackground,
    FlatList,
    TouchableOpacity,
    AsyncStorage
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

import moment from 'moment'
import 'moment/locale/pt-br'

import AgendaStyle from './AgendaStyle'
import Task from '../../componentes/task/Task';

import imgToday from '../../../assets/imgs/today.jpg'
import CustomStyle from '../../CustomStyle';

import ActionButton from 'react-native-action-button'
import CadastroTask from '../task/cadastro-task'

export default class Agenda extends React.Component {
    state = {
        tasks: [],
        visibleTasks: [],
        showDoneTasks: true,
        showAddTask: false
    }

    componentDidMount() {
        this.onFilterTasks();
    }

    onAddTask = task => {
        const tasks = [ ...this.state.tasks ]

        tasks.push({
            id: Math.random(),
            description: task.description,
            estimateAt: task.date,
            doneAt: null
        })

        this.setState({
            tasks,
            showAddTask: false
        }, this.onFilterTasks)
    }

    onDeleteTask = id => {
        const tasks = this.state.tasks.filter(task => task.id !== id)
        this.setState({ 
            tasks 
        }, this.onFilterTasks)
    }

    onFilterTasks = () => {
        let visibleTasks = null

        if (this.state.showDoneTasks) {
            visibleTasks = [...this.state.tasks]
        } else {
            const pending = task => task.doneAt === null

            visibleTasks = this.state.tasks.filter(pending)
        }

        this.setState({
            visibleTasks
        })
    }

    onToggleFilter = () => {
        this.setState({
            showDoneTasks: !this.state.showDoneTasks
        }, this.onFilterTasks)
    }
    
    onToggleTask = id => {
        const tasks = this.state.tasks.map(task => {
            if (task.id === id) {
                task = {...task}
                task.doneAt = task.doneAt ? null : new Date()
            }

            return task
        })

        this.setState({
            tasks
        }, this.onFilterTasks)
    }

    render() {
        return (
            <View style={AgendaStyle.container}>
                <CadastroTask 
                    isVisible={this.state.showAddTask}
                    onSave={this.onAddTask}
                    onCancel={() => 
                        this.setState({ 
                            showAddTask: false 
                        })
                    } 
                />

                <ImageBackground 
                    source={imgToday}
                    style={AgendaStyle.background}
                >
                    <View style={AgendaStyle.iconBar}>
                        <TouchableOpacity 
                            onPress={this.onToggleFilter}
                        >
                            <Icon 
                                name={this.state.showDoneTasks ? 'eye' : 'eye-slash'}
                                size={20} 
                                color={CustomStyle.colors.secondary} />
                        </TouchableOpacity>
                    </View>
                    <View style={AgendaStyle.titleBar}>
                        <Text style={AgendaStyle.title}>
                            Hoje
                        </Text>

                        <Text style={AgendaStyle.subtitle}>
                            {moment().locale('pt-br').format('ddd, D [de] MMMM')}
                        </Text>
                    </View>
                </ImageBackground>
                <View style={AgendaStyle.taksContainer}>
                    <FlatList 
                        data={this.state.visibleTasks}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => 
                            <Task 
                                {...item}
                                onToggleTask={this.onToggleTask}
                                onDelete={this.onDeleteTask} />
                        }
                    />
                </View>

                <ActionButton 
                    buttonColor={CustomStyle.colors.today}
                    onPress={() => { 
                        this.setState({ showAddTask: true }) 
                    }}
                />
            </View>
        )
    }
}
