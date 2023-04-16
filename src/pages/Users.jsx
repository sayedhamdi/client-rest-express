import Modal from "../components/Modal";
import ModalEditUser from "../components/ModalEditUser";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
export default function Users() {
  let [users, setUsers] = useState([]);
  let [error, setError] = useState("");
  let [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading) {
      fetch("http://localhost:8000/users/")
        .then((res) => res.json())
        .then((data) => {
          setUsers(data);
          setError("");
        })
        .catch((err) => {
          setError("No user with id");
        });
    }

    setLoading(false);
  }, [error, loading]);

  return (
    <div>
      <Navbar />
      <h1>Users</h1>
      <Modal
        text="ajouter user"
        onSubmit={async () => {
          await fetch("http://localhost:8000/users/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((res) => res.json())
            .then((data) => {
              setLoading(true);
              setUser({ fullname: "", email: "", password: "" });
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        <input
          type="text"
          placeholder="fullname"
          value={user.fullname}
          onChange={(e) => setUser({ ...user, fullname: e.target.value })}
        />
        <input
          type="text"
          placeholder="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </Modal>
     
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>fullname</th>
            <th>Email</th>
            <th>Update</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <h1>loading ...</h1>
          ) : users.length == 0 ? (
            "no users ..."
          ) : (
            users?.map((user) => (
              <>
                <UserRow
                  onDelete={async () => {
                    await deleteUser(user._id);
                    setLoading(true);
                  }}
                  key={user._id}
                  user={user}
                >
                    <td>
                        <ModalEditUser setLoading={setLoading} setUser={setUser} user={user}/>
                    </td>
                </UserRow>
              </>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

function UserRow({ user, onDelete,children }) {
  return (
    <tr>
      <td>{user._id}</td>
      <td>{user.fullname}</td>
      <td>{user.email}</td>
      {children}
      <td>
        <button
          style={{ background: "red", color: "white" }}
          onClick={() => {
            alert("do you really want to delete");
            onDelete(user._id);
          }}
        >
          delete
        </button>
      </td>
    </tr>
  );
}

async function deleteUser(id) {
  await fetch("http://localhost:8000/users/" + id, {
    method: "DELETE", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
  });
}
