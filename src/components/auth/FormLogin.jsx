import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { AlertFailure, AlertInfo } from "../home/Alert";
import { useLoginHook } from "../../hooks/useAuth";

const FormLogin = () => {
  const { error, success, onChange, onSubmit, onResetPassword } =
    useLoginHook();

  return (
    <div className="form-auth">
      {error ? (
        <div className="alert-grid">
          <AlertFailure message={error} />
        </div>
      ) : (
        success && (
          <div className="alert-grid">
            <AlertInfo message={success} />
          </div>
        )
      )}
      <form onSubmit={onSubmit}>
        <p className="title-auth">Iniciar Sesión</p>
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
            Inicia sesión
          </Button>
        </div>
      </form>
      <br />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <a href="/register">
            <p>¿No tienes una cuenta?</p>
          </a>
        </Grid>
        <Grid item xs={6}>
          <a href="#">
            <p onClick={onResetPassword}>¿Olvidaste tu contraseña?</p>
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default FormLogin;
