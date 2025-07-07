"use client";
export default function LoginPage(){
    return(
        <main className="clases-de-layout">
            <form className="clases-de-caja" onSubmit={handleLogin}>
                <h1 className="clases-de-texto">Iniciar Sesion</h1>
                <input type="email" />
                <input type="password" />
                <button type="submit">Entrar</button>

            </form>
        </main>
    );
}
function handleLogin(e: React.FormEvent){
    e.preventDefault();
}
