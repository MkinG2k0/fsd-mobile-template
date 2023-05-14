import { TodoList } from 'entities/todo'

import style from './style.module.scss'

interface TodoViewProps {}

export const TodoView: FC<TodoViewProps> = ({}) => {
	return (
		<div className={style.wrap}>
			<TodoList data={[{}, {}, {}, {}, {}]} />
		</div>
	)
}
