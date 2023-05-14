import { TodoCard } from 'entities/todo'
import { FC } from 'react'
import { Map } from 'react-easy-map'

interface TodoListProps {
	data: any[]
}

export const TodoList: FC<TodoListProps> = ({ data }) => {
	return <Map item={TodoCard} data={data} className={'col'} />
}
