import { configureStore } from "@reduxjs/toolkit";
import today from '../features/counter/Chosendate'

export default configureStore({
    reducer:{
        counter : today,
    },
});