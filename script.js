//Configuração do menu de navegação responsivo
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Configuração do formulário de contato
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('success-message');

if (contactForm && successMessage) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        let isValid = true;

        // Resetando mensagens de erro
        document.querySelectorAll('.error').forEach(error => {
            error.style.display = 'none';
        });

        // Validando nome
        const name = document.getElementById('name').value;
        if (name.trim() === '') {
            document.getElementById('name-error').style.display = 'block';
            isValid = false;
        }

        // Validando email
        const email = document.getElementById('email').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById('email-error').style.display = 'block';
            isValid = false;
        }

        // Validando assunto
        const subject = document.getElementById('subject').value;
        if (subject === '') {
            document.getElementById('subject-error').style.display = 'block';
            isValid = false;
        }

        // Validando mensagem
        const message = document.getElementById('message').value;
        if (message.trim() === '') {
            document.getElementById('message-error').style.display = 'block';
            isValid = false;
        }

        // Mostrando mensagem de sucesso se tudo estiver correto
        if (isValid) {
            contactForm.reset();
            successMessage.style.display = 'block';
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        }
    });
}

// Animações dos cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.boxShadow = '';
    });
});

// Efeito de transição ao clicar nos cards
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.card[data-href]').forEach(card => {
        card.addEventListener('click', function (e) {
            // Evita navegação instantânea de links internos
            if (e.target.tagName === 'A') e.preventDefault();
            const url = card.getAttribute('data-href');
            document.querySelector('.page-container').classList.add('slide-out');
            setTimeout(() => {
                window.location.href = url;
            }, 600);
        });
    });

    // Também previne o clique direto no botão/link dentro do card
    document.querySelectorAll('.card .btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            const card = btn.closest('.card');
            const url = card.getAttribute('data-href');
            document.querySelector('.page-container').classList.add('slide-out');
            setTimeout(() => {
                window.location.href = url;
            }, 600);
        });
    });
});