import { Link } from "react-router-dom";
import { useLogoutHook } from "../../hooks/useAuth";

const Feed = () => {
  const { onLogoutSubmit, user } = useLogoutHook();

  return (
    <div>
      Feed - { user.email }
      <button onClick={onLogoutSubmit}>Cerrar sesión</button>
    </div>
  );
};

export default Feed;
