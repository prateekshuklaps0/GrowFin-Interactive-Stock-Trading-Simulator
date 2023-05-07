import { useContext, useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function PrivateRoute({ children }) {
  return children;
}
export default PrivateRoute;
