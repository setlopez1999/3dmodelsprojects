export default function BloqueTexto({
    titulo,
    subtitulo,
    texto,
    palabraClave,
    items = []   // lista flexible de más elementos
}) {
    return (
        <div 
            id="bloque-texto"
            className="
                d-flex 
                flex-column 
                justify-content-center 
                align-items-center 
                text-center 
                w-50 
                h-100 
                p-3
            "
            style={{
                boxSizing: "border-box"
            }}
        >
            {/* TÍTULO */}
            {titulo && (
                <h1 className="fw-bold mb-2" style={{ fontSize: "2rem" }}>
                    {titulo}
                </h1>
            )}

            {/* SUBTÍTULO */}
            {subtitulo && (
                <h2 className="fw-semibold mb-3" style={{ fontSize: "1.4rem" }}>
                    {subtitulo}
                </h2>
            )}

            {/* TEXTO */}
            {texto && (
                <p className="mb-2" style={{ fontSize: "1rem", maxWidth: "600px" }}>
                    {texto}
                </p>
            )}

            {/* PALABRA CLAVE */}
            {palabraClave && (
                <p 
                    className="fw-bold mt-2 btn btn-success"
                    style={{
                        color: "var(--color-primario)",
                        fontSize: "1.1rem"
                    }}
                >
                    {palabraClave}
                </p>
            )}

            {/* ITEMS (pueden ser 1, 5 o 100) */}
            {items.length > 0 && (
                <ul className="mt-3" style={{ listStyle: "none", padding: 0 }}>
                    {items.map((item, index) => (
                        <li 
                            key={index} 
                            className="m-2 btn btn-primary"
                            style={{ fontSize: "0.95rem" }}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
