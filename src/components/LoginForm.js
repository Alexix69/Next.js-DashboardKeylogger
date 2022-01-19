import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import Button from "@mui/material/Button";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import User from "../api/user";
import { useAuth } from "../contexts/auth";
import { useRouter } from "next/router";

const LoginForm = () => {
  const { login } = useAuth();
  // const [respLogin, setRespLogin] = useState("");
  const {
    control,
    // resetField,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // defaultValues: {
    //     folder_name: "",
    //     description: "",
    // },
    // resolver: yupResolver(schema),
  });

  const onFinishLog = async (data) => {
    try {
      const userData = {
        ...data,
      };
      const response = await login(userData);
      console.log("REPSONSE LOGIN", response);
    } catch (e) {
      const { response } = e;

      if (response) {
        if (response.data.errors) {
          const errors = response.data.errors;
          const newErrorList = [];

          for (let field in errors) {
            newErrorList.push(...errors[field]);
          }
        }
      }
    }
  };

  // useEffect(() => {
  //   console.log("RESPUETSA", respLogin);
  // }, [respLogin]);

  return (
    <>
      <form
        onSubmit={handleSubmit(onFinishLog)}
        // onSubmit={() => console.log("INGRESAR")}
      >
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            // <Input {...field} />
            <TextField
              {...field}
              margin="normal"
              // required
              fullWidth
              // id="email"
              label="Correo del administrador"
              // name="email"
              autoComplete="email"
              autoFocus
              type="email"
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            // <Input {...field} />
            <TextField
              {...field}
              margin="normal"
              // required
              fullWidth
              // name="password"
              label="Contraseña"
              type="password"
              // id="password"
              autoComplete="current-password"
            />
          )}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Ingresar
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
