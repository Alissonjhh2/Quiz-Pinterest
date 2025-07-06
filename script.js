// ========================================
// CONFIGURAÇÃO DE IDIOMAS
// ========================================
// Para adicionar novos idiomas, adicione as traduções no objeto 'translations'
// Para editar textos, modifique os valores correspondentes ao idioma desejado

const translations = {
    'pt': {
        // Títulos principais
        'main-title': 'Seu Pinterest está funcionando pra você?',
        'main-subtitle': 'Leva menos de 1 minuto para descobrir como melhorar seu Pinterest',
        'intro-title': 'Descubra como otimizar seu Pinterest',
        'intro-text': 'Este quiz rápido vai te ajudar a identificar oportunidades de melhoria no seu marketing no Pinterest.',
        
        // Botões
        'start-btn': 'Começar Quiz',
        'next-btn': 'Próxima',
        'finish-btn': 'Ver Resultado',
        
        // Perguntas
        'q1-text': 'Você publica pins regularmente no Pinterest?',
        'q2-text': 'Já testou anúncios pagos no Pinterest?',
        'q3-text': 'Você tem uma estratégia clara para seu Pinterest?',
        'q4-text': 'Você analisa as métricas do seu Pinterest?',
        'q5-text': 'Você está satisfeito com os resultados do seu Pinterest?',
        
        // Resultado
        'result-title': 'Resultado do seu Quiz',
        'result-text': 'Você ainda pode explorar muito mais tráfego com Pinterest. Que tal deixar isso nas mãos de um especialista?',
        'cta-btn': 'Ver especialista no Fiverr'
    },
    'en': {
        'main-title': 'Is your Pinterest working for you?',
        'main-subtitle': 'Takes less than 1 minute to discover how to improve your Pinterest',
        'intro-title': 'Discover how to optimize your Pinterest',
        'intro-text': 'This quick quiz will help you identify opportunities to improve your Pinterest marketing.',
        
        'start-btn': 'Start Quiz',
        'next-btn': 'Next',
        'finish-btn': 'See Result',
        
        'q1-text': 'Do you publish pins regularly on Pinterest?',
        'q2-text': 'Have you tried paid ads on Pinterest?',
        'q3-text': 'Do you have a clear strategy for your Pinterest?',
        'q4-text': 'Do you analyze your Pinterest metrics?',
        'q5-text': 'Are you satisfied with your Pinterest results?',
        
        'result-title': 'Your Quiz Result',
        'result-text': 'You can still explore much more traffic with Pinterest. How about leaving this in the hands of an expert?',
        'cta-btn': 'See Fiverr Expert'
    },
    'es': {
        'main-title': '¿Tu Pinterest está funcionando para ti?',
        'main-subtitle': 'Toma menos de 1 minuto para descubrir cómo mejorar tu Pinterest',
        'intro-title': 'Descubre cómo optimizar tu Pinterest',
        'intro-text': 'Este quiz rápido te ayudará a identificar oportunidades para mejorar tu marketing en Pinterest.',
        
        'start-btn': 'Comenzar Quiz',
        'next-btn': 'Siguiente',
        'finish-btn': 'Ver Resultado',
        
        'q1-text': '¿Publicas pins regularmente en Pinterest?',
        'q2-text': '¿Has probado anuncios pagos en Pinterest?',
        'q3-text': '¿Tienes una estrategia clara para tu Pinterest?',
        'q4-text': '¿Analizas las métricas de tu Pinterest?',
        'q5-text': '¿Estás satisfecho con los resultados de tu Pinterest?',
        
        'result-title': 'Resultado de tu Quiz',
        'result-text': 'Aún puedes explorar mucho más tráfico con Pinterest. ¿Qué tal dejar esto en manos de un experto?',
        'cta-btn': 'Ver experto en Fiverr'
    }
};

// ========================================
// DETECÇÃO DE IDIOMA
// ========================================
// Detecta o idioma do navegador e aplica as traduções correspondentes

const userLang = navigator.language || navigator.userLanguage;
const langCode = userLang.split('-')[0]; // Pega apenas o código principal (pt, en, es)
const currentLang = translations[langCode] ? langCode : 'pt'; // Português como padrão

// ========================================
// APLICAÇÃO DAS TRADUÇÕES
// ========================================
// Aplica as traduções ao carregar a página

function applyTranslations() {
    const elements = document.querySelectorAll('[id]');
    elements.forEach(element => {
        const key = element.id;
        if (translations[currentLang] && translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
}

// ========================================
// VARIÁVEIS GLOBAIS
// ========================================

let currentQuestion = 0;
let answers = [];
const totalQuestions = 5;

// ========================================
// FUNÇÕES DO QUIZ
// ========================================

function startQuiz() {
    showSection('question-1');
    updateProgress();
}

function selectOption(option, questionNumber) {
    // Remove seleção anterior
    const options = option.parentElement.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('selected'));
    
    // Seleciona a opção atual
    option.classList.remove('selected');
    option.classList.add('selected');
    
    // Habilita o botão próximo ou final
    let buttonId;
    if (questionNumber === 5) {
        buttonId = 'finish-btn'; // Corrigido: usa o ID correto para a última pergunta
    } else {
        buttonId = `next-${questionNumber}`;
    }
    
    const button = document.getElementById(buttonId);
    if (button) {
        button.disabled = false;
    }
    
    // Armazena a resposta
    const answer = Array.from(options).indexOf(option);
    answers[questionNumber - 1] = answer;
}

function nextQuestion(questionNumber) {
    if (questionNumber < totalQuestions) {
        showSection(`question-${questionNumber + 1}`);
        updateProgress();
    }
}

function showResult() {
    showSection('result-section');
    updateProgress();
}

function showSection(sectionId) {
    // Esconde todas as seções
    const sections = document.querySelectorAll('.quiz-section');
    sections.forEach(section => section.classList.remove('active'));
    
    // Mostra a seção desejada
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

function updateProgress() {
    const progressFill = document.getElementById('progress-fill');
    const currentSection = document.querySelector('.quiz-section.active');
    
    if (currentSection && progressFill) {
        const sections = document.querySelectorAll('.quiz-section');
        const currentIndex = Array.from(sections).indexOf(currentSection);
        const progress = ((currentIndex + 1) / sections.length) * 100;
        progressFill.style.width = `${progress}%`;
    }
}

// ========================================
// INICIALIZAÇÃO
// ========================================
// Aplica as traduções quando a página carrega

document.addEventListener('DOMContentLoaded', function() {
    applyTranslations();
    updateProgress();
}); 