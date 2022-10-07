import { Link } from "react-router-dom";
import { useLogoutHook } from "../../hooks/useAuth";
import { SnackbarSuccess } from "../auth/Snackbar";

const Feed = () => {
  const { onLogoutSubmit, user } = useLogoutHook();

  return (
    <div>
      Feed - {user.email}
      <button onClick={onLogoutSubmit}>Cerrar sesión</button>
      {user && <SnackbarSuccess snackbar={true} />}
    </div>
  );
};

export default Feed;
