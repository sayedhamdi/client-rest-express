import Modal from "./Modal";

export default function ModalEditUser({setLoading,setUser,user}){
    return (
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
    )
} 