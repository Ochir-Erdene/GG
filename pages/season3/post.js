import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function Post() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:8080/createUsers", {
        first_name: firstName,
        last_name: lastName,
        email: email,
        age: age,
      });
      const newUser = {
        id: response.data.insertId,
        first_name: firstName,
        last_name: lastName,
        email: email,
        age: age,
      };
      setUsers([...users, newUser]);
      setFirstName("");
      setLastName("");
      setEmail("");
      setAge("");
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    if (!id) {
      alert("Invalid user ID.");
      return;
    }
    try {
      await axios.delete(`http://localhost:8080/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete user.");
    }
  };

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Failed to load users:", error);
      }
    };

    loadUsers();
  }, []);

  console.log(users);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4 sm:mb-0">Post page</h1>
        <button className="border-2 border-yellow-400 bg-yellow-300 font-semibold w-40 h-12 rounded-2xl text-lg shadow hover:bg-yellow-400 transition">
          Create users
        </button>
      </div>
      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">First Name</label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              className="w-full border border-gray-300 rounded-lg bg-white p-3 focus:outline-none focus:ring-2 focus:ring-yellow-300 text-base"
              placeholder="First Name"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Last Name</label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              className="w-full border border-gray-300 rounded-lg bg-white p-3 focus:outline-none focus:ring-2 focus:ring-yellow-300 text-base"
              placeholder="Last Name"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="w-full border border-gray-300 rounded-lg bg-white p-3 focus:outline-none focus:ring-2 focus:ring-yellow-300 text-base"
              placeholder="Email"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Age</label>
            <input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              type="number"
              className="w-full border border-gray-300 rounded-lg bg-white p-3 focus:outline-none focus:ring-2 focus:ring-yellow-300 text-base"
              placeholder="Age"
            />
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button
            onClick={() => handleSubmit()}
            className="border-2 border-green-400 bg-green-300 font-semibold w-28 h-12 rounded-2xl text-lg shadow hover:bg-green-400 transition"
          >
            Save
          </button>
        </div>
      </div>

      {/* User List */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">User List</h2>
      <div className="space-y-4">
        {users?.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="text-lg font-semibold text-gray-700">
                <span className="font-bold">First Name:</span> {item.first_name}
              </p>
              <p className="text-lg font-semibold text-gray-700">
                <span className="font-bold">Last Name:</span> {item.last_name}
              </p>
              <p className="text-base text-gray-600">
                <span className="font-medium">Email:</span> {item.email}
              </p>
              <p className="text-base text-gray-600">
                <span className="font-medium">Age:</span> {item.age}
              </p>
            </div>
           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
           <button
              onClick={() => {
                setFirstName(item.first_name);
                setLastName(item.last_name);
                setEmail(item.email);
                setAge(item.age);
                handleDelete(item.id);
              }}
              className="mt-4 sm:mt-0 sm:ml-6 px-5 py-2 bg-blue-500 text-white rounded-lg font-semibold shadow hover:bg-blue-600 transition"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(item.id)}
              className="mt-4 sm:mt-0 sm:ml-6 px-5 py-2 bg-red-500 text-white rounded-lg font-semibold shadow hover:bg-red-600 transition"
            >
              Delete
            </button>
           </div>
            </div>
        ))}
      </div>
    </div>
  );
}
