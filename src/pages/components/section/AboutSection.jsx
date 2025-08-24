export default function AboutSection() {
    return (
        <>
            <div className="AboutSection">
                
                <div className="conteinerAboutUs">

                    <div className="TextAboutUs">
                        <p>О нас</p>
                        <div className="TextAboutCompany">
                            <p>Narasaka Corporation — дочерняя компания Syrolix, 
                                специализирующаяся на нейросетевых технологиях, 
                                информационной безопасности и киберусилении.</p>
                            <p>Мы строим будущее, в котором данные управляют всем.</p>
                            <p>Наши импланты, ИИ-системы и защищённые протоколы 
                                используются крупнейшими структурами по всему миру.</p>
                            <p>Наши технологии включают биометрический контроль, 
                                AI-аналитику угроз, и интегрированные системы дронов 
                                для круглосуточного мониторинга.</p>
                            <p className="MainTextAbout">Narasaka — это стабильность в эпоху хаоса.</p>
                        </div>
                    </div>

                    <div className="ImageMap">
                        <img src="./src/photo/us-map.png" alt="Map" />
                    </div>
                </div>

            </div>
        </>
    )
}