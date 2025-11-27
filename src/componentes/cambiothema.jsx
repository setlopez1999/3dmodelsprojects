export default function CambioThema(){
    function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute("data-theme");

    html.setAttribute(
        "data-theme",
        current === "dark" ? "light" : "dark"
    );

    // opcional persistir en localStorage
    localStorage.setItem("theme", html.getAttribute("data-theme"));
    }

    // al cargar página
    document.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("theme");
    if (saved) document.documentElement.setAttribute("data-theme", saved);
    });

    return(
        <div className=" d-flex  justify-content-center">
            <button 
            className="btn btn-success p-2 "
            onClick={() => toggleTheme()}>
                Cambiar tema
            </button>
        </div>
    )
}