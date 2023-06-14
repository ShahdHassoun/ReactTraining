import TasksList from './TasksList'

const TimeLines = ({listTodoToday,listTodoTomorrow,listTodoUpcoming}) => {
    return ( 
        <div className="timeLines">
            <div className="Today">
                <h2>Today</h2>
                <TasksList timeLine="Today" TaskListData={listTodoToday} />
            </div>
            <div className="tomorrow">
                <h2>Tomorrow</h2>
                <TasksList timeLine="Tomorrow" TaskListData={listTodoTomorrow} />

            </div>
            <div className="Upcoming">
                <h2>Upcoming</h2>
                <TasksList timeLine="Upcoming"TaskListData={listTodoUpcoming}/>

            </div>
        </div>
     );
}
 
export default TimeLines;