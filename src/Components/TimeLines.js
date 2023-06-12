import TasksList from './TasksList'
const TimeLines = ({listTodoToday,listTodoTomorrow,listTodoUpcoming}) => {
    return ( 
        <div className="timeLines">
            <div className="Today">
                <h2>Today</h2>
                <TasksList id="1" listTodoToday={listTodoToday} listTodoTomorrow={listTodoTomorrow} listTodoUpcoming={listTodoUpcoming} />
            </div>
            <div className="tomorrow">
                <h2>Tomorrow</h2>
                <TasksList id="2"listTodoToday={listTodoToday} listTodoTomorrow={listTodoTomorrow} listTodoUpcoming={listTodoUpcoming}  />

            </div>
            <div className="Upcoming">
                <h2>Upcoming</h2>
                <TasksList id="3"listTodoToday={listTodoToday} listTodoTomorrow={listTodoTomorrow} listTodoUpcoming={listTodoUpcoming}/>

            </div>
        </div>
     );
}
 
export default TimeLines;