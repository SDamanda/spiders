import quizzes from "../../quizdata";
import styles from "./[id].module.css";

export default function QuizPage({ params }) {
    const { id } = params;
    const quiz = quizzes.find(q => q.id === id);

    if (!quiz) {
        return <h1>Quiz não encontrado</h1>
    }

    return (
        <>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>{quiz.title}</h1>
                    <p className={styles.description}>{quiz.description}</p>
                </header>

                <div className={styles.card}>
                    <p className={styles.info}>
                        {quiz.questions} perguntas - {quiz.time}
                    </p>

                    <div className={styles.questionBox}>
                        <h2 className={styles.questionTitle}>Perguntas</h2>

                        <ul className={styles.questionList}>
                            {quiz.content.map((q, i) => (
                                <li key={i} className={styles.questionItem}>
                                    <strong>{q.q}</strong>
                                    <ul className={styles.answerList}>
                                        {q.a.map((alt, j) => (
                                            <li key={j} className={styles.option}>
                                                {alt}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>

                        <button className={styles.button}>Próxima pergunta</button>
                    </div>
                </div>
            </div>
        </>
    );
}
