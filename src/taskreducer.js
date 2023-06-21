export const taskReducer = (initialState, action) => {

switch (action.type) {
    case 'Add Task':
        return [...initialState, action.payload]
    case 'Delete Task':
        return initialState.filter(task => task.id !== action.payload) /*filter retorna un nuevo arreglo, por lo que no muta estado inicial */
    case 'Complete Task':
        return initialState.map(task => {
            if(task.id === action.payload){
                return {
                    ...task,
                    done: !task.done  /*me cambia a true o false, manipulo de esta forma el booleano */
                }
            }

            return task;

        } );
    case 'Update Task':

        return initialState.map(task => {
            if(task.id === action.payload.id){
                return {
                    ...task,
                    description: action.payload.description,  
                }
            }

            return task;

        } );

    default:
        return initialState
}


}