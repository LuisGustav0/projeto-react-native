import React from 'react'
import {
    View,
    Text,
    ImageBackground,
    FlatList,
    TouchableOpacity
} from 'react-native'

import axios from 'axios'
import {
    server,
    showError
} from '../../common'

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

    onLoadTasks = async () => {
        try {
            const maxDate = moment().format('YYYY-MM-DD 23:59')
            const res = await axios.get(`${server}/task?date=${maxDate}`)

            this.setState({
                tasks: res.data
            }, this.onFilterTasks)
        } catch (err) {
            showError(err)
        }
    }

    componentDidMount = async () => {
        this.onLoadTasks()
    }

    onAddTask = async task => {
        try {
            await axios.post(`${server}/task`, {
                description: task.description,
                estimateAt: task.date
            })

            this.setState({
                showAddTask: false
            }, this.onLoadTasks)
        } catch (err) {
            showError(err)
        }
    }

    onDeleteTask = async id => {
        try {
            await axios.delete(`${server}/task/${id}`)
            this.onLoadTasks()
        } catch (err) {
            showError(err)
        }
    }

    onToggleFilter = () => {
        this.setState({
            showDoneTasks: !this.state.showDoneTasks
        }, this.onFilterTasks)
    }

    onToggleTask = async id => {
        try {
            await axios.put(`${server}/task/${id}/toggle`)
            await this.onLoadTasks()
        } catch (err) {
            showError(err)
        }
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
