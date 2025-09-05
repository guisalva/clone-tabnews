const fraseDoDia = "Oi minha lindeza, esse é um pequeno espaço na internet onde pensei em dedicar à você enquanto estudo, te amo muitoooo 😊."

function Home() {
    return <main style={{ position: "absolute", top: "40%", left: "50%", translate: "-50% -50%", textAlign: "center", color: "#333333", fontFamily: "sans-serif" }}>
        <h1>Recadinho do dia ❤️</h1>
        <div style={{ width: "400px", border: "1px solid #ccccccff", borderRadius: "0.5rem", paddingInline: "1rem", fontStyle: "italic" }}>
            <p style={{ color: "#525252ff"  }}>"{fraseDoDia}"</p>
            <p style={{ textAlign: "end" }}>- seu Mo</p>
        </div>
    </main>
}

export default Home;