"use client"
import "./globals.css"

export default function Home() {
    // components/QuizCards.js
    const quizzes = [
        {
            title: "Origens do Homem-Aranha",
            description: "Teste seus conhecimentos sobre a origem de Peter Parker",
            questions: 10,
            time: "5 min",
            tags: [
                { label: "Quadrinhos", color: "#ffe39a", text: "#765101" },
                { label: "Fácil", color: "#d8f5d3", text: "#2e7d32" },
            ],
        },
        {
            title: "Vilões Clássicos",
            description: "Quanto você sabe sobre os inimigos do Cabeça de Teia?",
            questions: 15,
            time: "8 min",
            tags: [
                { label: "Personagens", color: "#ffe39a", text: "#765101" },
                { label: "Médio", color: "#f9f4ae", text: "#705005" },
            ],
        },
        {
            title: "Filmes do Spider-Man",
            description: "De Tobey Maguire a Tom Holland, teste seu conhecimento cinematográfico",
            questions: 20,
            time: "10 min",
            tags: [
                { label: "Filmes", color: "#ffe39a", text: "#765101" },
                { label: "Médio", color: "#f9f4ae", text: "#705005" },
            ],
        },
        {
            title: "Spider-Verse",
            description: "Explore o multiverso dos Homens-Aranha",
            questions: 25,
            time: "15 min",
            tags: [
                { label: "Multiverso", color: "#ffe39a", text: "#765101" },
                { label: "Difícil", color: "#ffe4e1", text: "#d1001f" },
            ],
        },
        {
            title: "Poderes e Habilidades",
            description: "Conheça todos os poderes do seu herói favorito",
            questions: 12,
            time: "6 min",
            tags: [
                { label: "Poderes", color: "#ffe39a", text: "#765101" },
                { label: "Fácil", color: "#d8f5d3", text: "#2e7d32" },
            ],
        },
        {
            title: "Curiosidades Avançadas",
            description: "Para os verdadeiros especialistas no universo Spider-Man",
            questions: 30,
            time: "20 min",
            tags: [
                { label: "Expert", color: "#f9f4ae", text: "#705005" },
                { label: "Muito Difícil", color: "#ffe4e1", text: "#d1001f" },
            ],
        },
    ];
    
    return (
        <>
            <header>
                <a href="quizes">Quizzes</a>
                <a href="ranking">Ranking</a>
                <a id="login" href="login">Entrar</a>
            </header>
            <section>
                <banner>
                    <h1>Bem-vindo ao <span>SPIDER-QUIZ</span></h1>
                    <p>
                        Teste seus conhecimentos sobre o universo do Homem-Aranha!
                        Desde os quadrinhos clássicos até os filmes mais recentes.
                    </p>
                    <div className="buttons">
                        <button id="b1">Começar Quiz</button>
                        <button id="b2">Rankin</button>
                    </div>
                </banner>
                <main className="conteudo">
                    <h2>Escolha seu Quiz</h2>
                    <p id="p2">
                        Teste seus conhecimentos sobre o universo do Homem-Aranha!
                        Desde os quadrinhos clássicos até os filmes mais recentes.
                    </p>
                    <div className="quiz-cards">
                        {quizzes.map((quiz, idx) => (
                            <div className="quiz-card" key={idx}>
                                <div className="card-tags">
                                    {quiz.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="tag"
                                            style={{
                                                backgroundColor: tag.color,
                                                color: tag.text,
                                                marginRight: 8,
                                            }}
                                        >
                                            {tag.label}
                                        </span>
                                    ))}
                                </div>
                                <h3>{quiz.title}</h3>
                                <p>{quiz.description}</p>
                                <div className="card-info">
                                    <span>{quiz.questions} perguntas</span>
                                    <span>{quiz.time}</span>
                                </div>
                                <button className="btn-red">Iniciar Quiz</button>
                            </div>
                        ))}
                    </div>



                </main>
            </section>
        </>
    )
}