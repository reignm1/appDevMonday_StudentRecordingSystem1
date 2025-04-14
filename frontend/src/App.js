import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

const App = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/api/students");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const addStudent = async (name, course) => {
    try {
      await axios.post("http://127.0.0.1:5000/api/students", { name, course });
      fetchStudents();
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  return (
    <div>
      <h1>Student Recording System</h1>
      <StudentForm addStudent={addStudent} />
      <StudentList students={students} />
      <img
          src="https://i.pinimg.com/736x/2f/3f/88/2f3f88136d65835c3a6b33e53ef5b0fa.jpg"
          alt="Online Logo"
          width="300"
          height="300"
        />
    </div>
  );
};

export default App;