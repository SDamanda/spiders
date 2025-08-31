"use client"
import "./globals.css"
import Link from "next/link";
import quizzes from "./quizdata"

export default function Home() {
    return (
        <>
            <header>
                <a href="quiz">Quizzes</a>
                <a href="ranking">Ranking</a>
                <a id="login" href="login">Entrar</a>
            </header>
            <main>
                <section id="banner">
                    <h1>Bem-vindo ao <span><i>SPIDER-QUIZ</i></span></h1>
                    <p>
                        Teste seus conhecimentos sobre o universo do Homem-Aranha!
                        Desde os quadrinhos clássicos até os filmes mais recentes.
                    </p>
                    <div className="buttons">
                        <button id="b1">Começar Quiz</button>
                        <button id="b2">Rankin</button>
                    </div>
                </section>
                <section className="conteudo">
                    <h2>Escolha seu Quiz</h2>
                    <p id="p2">
                        Teste seus conhecimentos sobre o universo do Homem-Aranha!
                        Desde os quadrinhos clássicos até os filmes mais recentes.
                    </p>
                    <section>
                        <h2>Escolha seu Quiz</h2>
                        <div className="quiz-cards">
                            {quizzes.map((quiz) => (
                                <div className="quiz-card" key={quiz.id}>
                                    <h3>{quiz.title}</h3>
                                    <p>{quiz.description}</p>
                                    <Link href={`/quizzes/${quiz.id}`}>
                                        <button>Iniciar Quiz</button>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </section>
                </section>
            </main>
        </>
    )
}