// ========================================
// CONFIGURAÇÃO DE IDIOMAS E TEXTOS
// ========================================
// Para editar textos: modifique os valores no objeto 'translations'
// Para adicionar novos idiomas: adicione uma nova chave no objeto 'translations'
// Para mudar o link final: procure o comentário "<!-- Adicione o link do Fiverr aqui -->" no HTML

const translations = {
    'pt': {
        // Títulos principais - COPY PERSUASIVO
        'mainTitle': 'Você precisa de uma Pinterest Queen?',
        'welcomeText': 'Descubra se você está perdendo oportunidades no Pinterest e como uma Pinterest Queen pode transformar seus resultados',
        'startButtonText': 'Descobrir Agora',
        'benefit1': 'Aumento de seguidores e tráfego orgânico',
        'benefit2': 'Configuração completa da conta comercial',
        'benefit3': 'Criação diária de pins virais',
        
        // Perguntas - FOCO EM SERVIÇO PINTEREST QUEEN
        'q1-text': 'Você tem uma conta comercial no Pinterest configurada?',
        'q2-text': 'Você cria pins regularmente (pelo menos 1 por dia)?',
        'q3-text': 'Você usa Rich Pins e otimização SEO nos seus pins?',
        'q4-text': 'Você participa de comunidades e grupos do Pinterest?',
        'q5-text': 'Você está satisfeito com o crescimento da sua conta?',
        
        // Resultado - GATILHO DE AUTORIDADE E VALOR
        'resultsTitle': 'Você Precisa de uma Pinterest Queen!',
        'ctaTitle': 'Pronto para ter sua própria Pinterest Queen?',
        'ctaText1': 'Com mais de 320 milhões de usuários ativos e 89% com intenção de compra, o Pinterest é um mercado gigante que você não pode ignorar.',
        'ctaText2': 'Deixe-me ser sua Pinterest Queen e transformar completamente seus resultados!',
        'ctaButtonText': 'Quero minha Pinterest Queen agora!',
        
        // Footer
        'footerText': '© 2024 Pinterest Queen Quiz. Todos os direitos reservados.'
    },
    'en': {
        // Main titles - PERSUASIVE COPY
        'mainTitle': 'Do you need a Pinterest Queen?',
        'welcomeText': 'Discover if you\'re missing Pinterest opportunities and how a Pinterest Queen can transform your results',
        'startButtonText': 'Discover Now',
        'benefit1': 'Increase followers and organic traffic',
        'benefit2': 'Complete business account setup',
        'benefit3': 'Daily viral pin creation',
        
        // Questions - PINTEREST QUEEN SERVICE FOCUS
        'q1-text': 'Do you have a Pinterest business account set up?',
        'q2-text': 'Do you create pins regularly (at least 1 per day)?',
        'q3-text': 'Do you use Rich Pins and SEO optimization in your pins?',
        'q4-text': 'Do you participate in Pinterest communities and groups?',
        'q5-text': 'Are you satisfied with your account growth?',
        
        // Result - AUTHORITY TRIGGER AND VALUE
        'resultsTitle': 'You Need a Pinterest Queen!',
        'ctaTitle': 'Ready to have your own Pinterest Queen?',
        'ctaText1': 'With over 320 million active users and 89% with purchase intent, Pinterest is a huge market you can\'t ignore.',
        'ctaText2': 'Let me be your Pinterest Queen and completely transform your results!',
        'ctaButtonText': 'I want my Pinterest Queen now!',
        
        // Footer
        'footerText': '© 2024 Pinterest Queen Quiz. All rights reserved.'
    },
    'es': {
        // Títulos principales - COPY PERSUASIVO
        'mainTitle': '¿Necesitas una Pinterest Queen?',
        'welcomeText': 'Descubre si estás perdiendo oportunidades en Pinterest y cómo una Pinterest Queen puede transformar tus resultados',
        'startButtonText': 'Descubrir Ahora',
        'benefit1': 'Aumento de seguidores y tráfego orgánico',
        'benefit2': 'Configuración completa de cuenta comercial',
        'benefit3': 'Creación diaria de pins virales',
        
        // Preguntas - ENFOQUE EN SERVICIO PINTEREST QUEEN
        'q1-text': '¿Tienes una cuenta comercial de Pinterest configurada?',
        'q2-text': '¿Creas pins regularmente (al menos 1 por día)?',
        'q3-text': '¿Usas Rich Pins y optimización SEO en tus pins?',
        'q4-text': '¿Participas en comunidades y grupos de Pinterest?',
        'q5-text': '¿Estás satisfecho con el crecimiento de tu cuenta?',
        
        // Resultado - GATILLO DE AUTORIDAD Y VALOR
        'resultsTitle': '¡Necesitas una Pinterest Queen!',
        'ctaTitle': '¿Listo para tener tu propia Pinterest Queen?',
        'ctaText1': 'Con más de 320 millones de usuarios activos y 89% con intención de compra, Pinterest es un mercado gigante que no puedes ignorar.',
        'ctaText2': '¡Déjame ser tu Pinterest Queen y transformar completamente tus resultados!',
        'ctaButtonText': '¡Quiero mi Pinterest Queen ahora!',
        
        // Footer
        'footerText': '© 2024 Pinterest Queen Quiz. Todos los derechos reservados.'
    }
};

// ========================================
// DETECÇÃO DE IDIOMA
// ========================================
// Detecta automaticamente o idioma do navegador do usuário
// Se o idioma não for suportado, usa Português como padrão

const userLang = navigator.language || navigator.userLanguage;
const langCode = userLang.split('-')[0]; // Pega apenas o código principal (pt, en, es)
const currentLang = translations[langCode] ? langCode : 'pt'; // Português como padrão

// ========================================
// APLICAÇÃO DAS TRADUÇÕES
// ========================================
// Aplica as traduções dinamicamente quando a página carrega
// Para editar textos: modifique o objeto 'translations' acima

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

// Array de perguntas
const questions = [
    {
        text: 'q1-text',
        options: ['Sim', 'Não', 'Não sei']
    },
    {
        text: 'q2-text',
        options: ['Sim', 'Não', 'Às vezes']
    },
    {
        text: 'q3-text',
        options: ['Sim', 'Não', 'Não sei']
    },
    {
        text: 'q4-text',
        options: ['Sim', 'Não', 'Às vezes']
    },
    {
        text: 'q5-text',
        options: ['Sim', 'Não', 'Mais ou menos']
    }
];

// ========================================
// FUNÇÕES DO QUIZ
// ========================================

function startQuiz() {
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('quizQuestions').style.display = 'block';
    currentQuestion = 0;
    loadQuestion();
    updateProgress();
}

function loadQuestion() {
    const questionContainer = document.getElementById('questionContainer');
    const question = questions[currentQuestion];
    
    questionContainer.innerHTML = `
        <div class="question">
            <h2>${translations[currentLang][question.text]}</h2>
            <div class="options">
                ${question.options.map((option, index) => `
                    <div class="option" onclick="selectOption(this, ${index})">${option}</div>
                `).join('')}
            </div>
        </div>
        <div class="navigation">
            <div></div>
            <button class="nav-btn primary" onclick="nextQuestion()" disabled id="nextBtn">${currentQuestion === totalQuestions - 1 ? 'Ver Resultado' : 'Próxima'}</button>
            <div></div>
        </div>
    `;
}

function selectOption(option, optionIndex) {
    // Remove seleção anterior
    const options = option.parentElement.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('selected'));
    
    // Seleciona a opção atual
    option.classList.add('selected');
    
    // Habilita o botão próximo
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
        nextBtn.disabled = false;
    }
    
    // Armazena a resposta
    answers[currentQuestion] = optionIndex;
}

function nextQuestion() {
    if (currentQuestion < totalQuestions - 1) {
        currentQuestion++;
        loadQuestion();
        updateProgress();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quizQuestions').style.display = 'none';
    document.getElementById('resultsScreen').style.display = 'block';
    
    // Aplica traduções nos resultados
    applyTranslations();
    
    // Calcula resultado baseado nas respostas
    const totalScore = answers.reduce((sum, answer) => sum + answer, 0);
    const maxScore = totalQuestions * 2; // Assumindo que "Sim" = 2, "Às vezes" = 1, "Não" = 0
    
    let resultMessage = '';
    if (totalScore >= maxScore * 0.8) {
        resultMessage = 'Excelente! Sua conta está bem estruturada, mas uma Pinterest Queen pode levar seus resultados para o próximo nível com estratégias avançadas e crescimento exponencial.';
    } else if (totalScore >= maxScore * 0.6) {
        resultMessage = 'Bom trabalho! Você tem uma base sólida, mas uma Pinterest Queen pode otimizar completamente sua estratégia e multiplicar seus resultados.';
    } else if (totalScore >= maxScore * 0.4) {
        resultMessage = 'Você está no caminho certo, mas está perdendo muitas oportunidades. Uma Pinterest Queen pode transformar completamente sua presença no Pinterest.';
    } else {
        resultMessage = 'Sua conta tem um potencial enorme não aproveitado! Uma Pinterest Queen pode configurar tudo do zero e fazer sua conta explodir de crescimento.';
    }
    
    document.getElementById('resultsMessage').innerHTML = `
        <h3>Análise da sua conta Pinterest</h3>
        <p>${resultMessage}</p>
        <p><strong>O que uma Pinterest Queen pode fazer por você:</strong></p>
        <ul style="text-align: left; margin: 20px 0;">
            <li>✅ Configurar sua conta comercial</li>
            <li>✅ Criar pins virais diariamente</li>
            <li>✅ Otimizar SEO e Rich Pins</li>
            <li>✅ Participar de comunidades</li>
            <li>✅ Aumentar seguidores organicamente</li>
            <li>✅ Relatórios de crescimento gratuitos</li>
        </ul>
    `;
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / totalQuestions) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
}

// ========================================
// INICIALIZAÇÃO
// ========================================

// Aplica traduções quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    applyTranslations();
}); 