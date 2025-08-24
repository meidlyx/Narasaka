export default function Header() {
    return (
        <>
            <header>

                <div className="logo">
                    <a href="/">NARASAKA</a>
                </div>
                
                <div className="coorporate-departament">
                    <p>Отдел Корпоративной безопасности</p>
                </div>

                <div className="button-language-register">
                    <div className="language">
                        <p>RU</p>
                    </div>
                    <div className="register">
                        <a href="/register">Вход</a>
                    </div>
                </div>
                
            </header>
        </>
    )
}