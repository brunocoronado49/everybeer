import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { AlertFailure } from "../home/Alert";
import { useSignUpHook } from "../../hooks/useAuth";

const FormRegister = () => {
  const { error, onChange, onSubmit } = useSignUpHook();

  return (
    <div className="form-auth">
      {error && (
        <div className="alert-grid">
          <AlertFailure message={error} />
        </div>
      )}
      <form onSubmit={onSubmit}>
        <p className="title-auth">Crea una cuenta</p>
        <div>
          <TextField
            id="email"
            label="Correo"
            variant="outlined"
            name="email"
            type="email"
            className="input-auth"
            onChange={onChange}
          />
        </div>
        <br />
        <div>
          <TextField
            id="password"
            label="Contraseña"
            variant="outlined"
            name="password"
            type="password"
            className="input-auth"
            onChange={onChange}
          />
        </div>
        <div className="btn-login">
          <Button
            variant="contained"
            color="warning"
            className="btn-auth"
            type="submit"
          >
            Crear nueva cuenta
          </Button>
        </div>
      </form>
      <a href="/login">
        <p>¿Ya tienes una cuenta?  Inicia sesión</p>
      </a>
    </div>
  );
};

export default FormRegister;
