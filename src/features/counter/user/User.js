import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, userApi } from "./userApi";
import "./user.css";
import { Link, useNavigate } from "react-router-dom";

export function User() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);
  const userData = useSelector((state) => state.user.userData);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(fetchUsers(token)); 
    }
  }, []);

  useEffect(() => {
    dispatch(userApi());
  }, []);

  const handleButton = () => {
    navigate("/AddUser");
  };

  return (
    <div>
      <h1>Users</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>{error}</p>}
      {status === "successful" && (
        <ul>
          {userData?.map((user) => (
            <Link key={user?.id} to="/UserDetails">
              <li>{user?.name}</li>
            </Link>
          ))}
        </ul>
      )}
      <button onClick={handleButton}>ADD USER</button>
    </div>
  );
}
