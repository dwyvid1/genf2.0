// Cadastro das lojas
const validStores = Array.from({ length: 31 }, (_, i) => {
    const num = (i + 1).toString().padStart(2, '0');
    return {
        username: `LOJA${num}`,
        password: `LOJA${num}`,
        store: num
    };
});

// Login
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value.toUpperCase();
    const password = document.getElementById('password').value.toUpperCase();
    const store = document.getElementById('store').value.padStart(2, '0');

    const validUser = validStores.find(user => 
        user.username === username && user.password === password && user.store === store
    );

    if (validUser) {
        window.location.href = './pages/portal.html';
    } else {
        alert('Usuário ou senha inválidos!');
    }
});