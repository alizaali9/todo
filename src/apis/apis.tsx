import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc, getDoc } from "firebase/firestore";
import db from '../database/firebasedb';

const APIs = {
    addTask: async (task: any) => {
        if (task.trim() !== '') {
            try {
                addDoc(collection(db, "tasks"), {
                    task: task,
                    completed: false,
                })
            } catch (error) {
                console.log(error, "Something went wrong");
            }
        }
    },
    getTasks: async () => {
        const querySnapshot = await getDocs(collection(db, "tasks"));
        const tasks = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return tasks;
    },
    getTask: async (id: any) => {
        const task = await getDoc(doc(db, "tasks", id));
        return task.data();
    },
    updateTask: async (id: any) => {
        try {
            // const task = await APIs.getTask(id);
            // console.log(task);
            updateDoc(doc(db, "tasks", id), {
                completed: true
            })
        } catch (error) {
            console.log(error, "Something went wrong");
        }
    },
    deleteTask: async (id: any) => {
        try {
            deleteDoc(doc(db, "tasks", id));
        }
        catch (error) {
            console.log(error, "Something went wrong");
        }
    },
    deleteAllTasks: async () => {
        try {
            const tasks = await APIs.getTasks();
            const deletePromises = tasks.map(task => deleteDoc(doc(db, "tasks", task.id)));
            await Promise.all(deletePromises);
        } catch (error) {
            console.log(error, "Something went wrong");
        }
    }
}

export default APIs;