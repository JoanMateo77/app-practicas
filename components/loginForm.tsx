"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

// 1️⃣ Validación con Zod
const schema = z.object({
  email: z.string().email("Correo inválido"),
  password: z.string().min(6, "Mínimo 6 caracteres"),
});

type FormData = z.infer<typeof schema>;

export default function LoginForm() {
  const [loading, setLoading] = useState(false);

  // 2️⃣ Inicializa React Hook Form con Zod
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  // 3️ Función de envío del formulario
  const onSubmit = async (data: FormData) => {
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1000));
    console.log("✅ Datos enviados:", data);
    alert("Simulando login exitoso...");
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md space-y-6 rounded-2xl bg-white p-8 shadow-xl shadow-indigo-100 ring-1 ring-gray-200"
    >
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Iniciar Sesión
      </h1>

      {/* Campo email */}
      <label className="block">
        <span className="text-sm font-medium text-gray-700">
          Correo electrónico
        </span>
        <input
          type="email"
          {...register("email")}
          placeholder="correo@ejemplo.com"
          className="mt-1 w-full rounded-lg border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {errors.email && (
          <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
        )}
      </label>

      {/* Campo contraseña */}
      <label className="block">
        <span className="text-sm font-medium text-gray-700">Contraseña</span>
        <input
          type="password"
          {...register("password")}
          placeholder="••••••••"
          className="mt-1 w-full rounded-lg border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {errors.password && (
          <p className="text-sm text-red-600 mt-1">
            {errors.password.message}
          </p>
        )}
      </label>

      {/* Botón */}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-indigo-600 py-2 font-semibold text-white transition-colors hover:bg-indigo-700 disabled:opacity-60"
      >
        {loading ? "Cargando..." : "Entrar"}
      </button>
    </form>
  );
}
