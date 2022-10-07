import { Link } from "react-router-dom";
import { useLogoutHook } from "../../hooks/useAuth";
import { SnackbarSuccess } from "../auth/Snackbar";
import ResponsiveAppBar from "../menu/Navbar";

const Feed = () => {
  const { onLogoutSubmit, user } = useLogoutHook();

  return (
    <div>
      <ResponsiveAppBar />
      <div>
        <br />
        Feed - {user.email}
        <button onClick={onLogoutSubmit}>Cerrar sesión</button>
        {user && <SnackbarSuccess snackbar={true} />}
      </div>
    </div>
  );
};

export default Feed;
