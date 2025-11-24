import { useEffect, useState } from "react";
import { db } from "./firebase";
import { set, ref, onValue, remove } from "firebase/database";
import { push, update } from "firebase/database";

export default function CrudExample() {
    const [name, setName] = useState("");
    const [users, setUsers] = useState({});

    // read 

    useEffect(function () {
        const usersRef = ref(db, "users/");
        onValue(usersRef, (snapshot) => {
            const data = snapshot.val();
            setUsers(data || {});
        });
    }, []);

    // CREAT

    function addUser() {
        push(ref(db, "users/"), {
            name: name
        });
        setName("");
    }

    // UPDATE
    function updateUser(id) {
        const newName = prompt("Enter new name");
        if (newName) {
            update(ref(db, "users/" + id), {
                name: newName,
                updatedAt: new Date().toString()
            });
        }
    }

    // DELETE

    function deleteUser(id) {
        remove(ref(db, "users/" + id));
    }

    return (
        <div style={{ padding: 20 }}>
            <h2>Firebase Realtime DB CRUD</h2>

            <input type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button onClick={addUser}>Add user</button>

            <h3>All users</h3>
            {Object.keys(users).length === 0 && <p>No users yet</p>}

            <ul>
                {Object.entries(users).map(([id, user]) => (
                    <li key={id} style={{ marginBottom: 10 }}>
                        <strong>{user.name}</strong>
                        <button onClick={() => updateUser(id)} style={{ marginLeft: 10 }}>
                            Edit
                        </button>
                        <button onClick={() => deleteUser(id)} style={{ marginLeft: 10 }}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
