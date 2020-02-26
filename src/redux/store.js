import { createStore } from "redux";
import { reducer } from "./redux/reducer";

export const store = createStore(reducer);

// const unsubscribe = store.subscribe(() => console.log(store.getState()));

// store.dispatch(createListItem("Go To Lunch"));
// store.dispatch(createListItem("Implement Redux using React"));
// store.dispatch(deleteListItem("Implement Redux using React"));

// store.dispatch(setCurrentListItem("Go To Lunch"));

// store.dispatch(createTaskItem("wash your hands"));
// store.dispatch(createTaskItem("pick a plate"));
// store.dispatch(createTaskItem("pick a spoon and a fork"));
// store.dispatch(createTaskItem("pick a napkin"));

// store.dispatch(deleteTaskItem("wash your hands"));

// store.dispatch(updateTaskItem("pick a plate"));

// unsubscribe();
