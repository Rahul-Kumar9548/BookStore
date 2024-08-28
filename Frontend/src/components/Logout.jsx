import React from 'react'
import { useauth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

const Logout = () => {

    const [authUser, setAuthUser] = useauth();
    const handleLogout = () => {
      try {
        setAuthUser({
          ...authUser,
          user: null,
        });
        localStorage.removeItem("Users");
        toast.success("Logout successfully");
        window.location.reload();
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } catch (error) {
        toast.error("Error: " + error);
        setTimeout(() => {}, 2000);
      }
    };

  return (
    <div>
       <button className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
       onClick={handleLogout}>
        Logout
        </button>

    </div>
  )
}

export default Logout;