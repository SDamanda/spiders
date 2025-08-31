export default quizzes;
const quizzes = [
    {
        id: "quiz1",
        title: "Origens do Homem-Aranha",
        description: "Teste seus conhecimentos sobre a origem de Peter Parker",
        questions: 10,
        time: "5 min",
        tags: [
            { label: "Quadrinhos", color: "#ffe39a", text: "#765101" },
            { label: "Fácil", color: "#d8f5d3", text: "#2e7d32" },
        ],
        content: [
            { q: "Quem mordeu Peter Parker?", a: ["Gato", "Aranha", "Cachorro"], correct: 1 },
            { q: "Qual o nome do tio dele?", a: ["Ben", "Tony", "Clark"], correct: 0 }
        ]
    },
    {
        id: "quiz2",
        title: "Vilões Clássicos",
        description: "Quanto você sabe sobre os inimigos do Cabeça de Teia?",
        questions: 15,
        time: "8 min",
        tags: [
            { label: "Personagens", color: "#ffe39a", text: "#765101" },
            { label: "Médio", color: "#f9f4ae", text: "#705005" },
        ],
        content: [
            { q: "Quem é o alter ego do Duende Verde?", a: ["Norman Osborn", "Otto Octavius"], correct: 0 }
        ]
    }
];

