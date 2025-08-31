import quizzes from "../../quizdata";

export default function QuizPage({ params }) {
    const { id } = params;
    const quiz = quizzes.find(q => q.id === id);

    if (!quiz) {
        return <h1>Quiz não encontrado</h1>
    }

    return (
        <div>
            <h1>{quiz.title}</h1>
            <p>{quiz.description}</p>
            <p>{quiz.questions} perguntas - {quiz.time}</p>

            <h2>Perguntas</h2>
            <ul>
                {quiz.content.map((q, i) => (
                    <li key={i}>
                        <strong>{q.q}</strong>
                        <ul>
                            {q.a.map((alt, j) => (
                                <li key={j}>{alt}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}
