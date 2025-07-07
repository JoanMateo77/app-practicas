"use client";

export default function LoginPage(){
    return(
        <main className="flex min-h-screen items-center justify-center
                            bg gradient-to-br from-indigo-100 via-white to-purple-100
                            px-4">

            <form className="w-full max-w-md space-y-6 rounded-2x1 bg-white p-8px
                                shadow-x1 shadow-indigo-100 ring-1 ring-gray-200" onSubmit={handleLogin}>

                <h1 className="text-3x1 font bold text-center text-gray-800 ">Iniciar Sesion</h1>
                <div className="space-y-4">
                    <label className="block">
                        <span className="block text-sm font-medium text-gray-700">Correo Electronico</span>
                    
                
                <input type="email" 
                required
                placeholder="tuCorreo@gmial.com"
                className="mt-1 w-ful rounded-lg border-gray-300 shadow-sm focus:border-indigo-500
                            focus:ring-indigo-500" />
                            </label>
                
                
          <label className="block">
            <span className="block text-sm font-medium text-gray-700">
              Contraseña
            </span>
            <input
              type="password"
              required
              placeholder="••••••••"
              className="
                mt-1 w-full rounded-lg border-gray-300
                shadow-sm focus:border-indigo-500 focus:ring-indigo-500
              "
            />
          </label>
                </div>
                <button type="submit" className=" w-full rounded-lg
            bg-indigo-600 py-2 font-semibold text-white
            transition-colors hover:bg-indigo-700 focus:bg-indigo-700
            focus:outline-none focus:ring-2 focus:ring-indigo-400"  >Entrar</button>


            </form>
        </main>
    );
}
function handleLogin(e: React.FormEvent){
    e.preventDefault();
    alert("Simulando Login...");
}
