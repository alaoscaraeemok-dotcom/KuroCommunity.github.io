import { db } from './firebase-config.js';
import { ref, onValue, push } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

// Exemplo: Ler atualizações do Firebase
const updatesContainer = document.getElementById('updatesContainer');
const updatesRef = ref(db, 'atualizacoes/');

onValue(updatesRef, (snapshot) => {
  const data = snapshot.val();
  updatesContainer.innerHTML = '';

  if (!data) {
    updatesContainer.innerHTML = '<p class="text-center text-dark/60">Nenhuma atualização cadastrada ainda.</p>';
    return;
  }

  Object.values(data).forEach(item => {
    const card = document.createElement('div');
    card.className = 'bg-white/70 backdrop-blur-sm p-5 rounded-xl shadow-md border-l-2 border-primary';
    card.innerHTML = `
      <h3 class="font-elegant font-semibold text-lg text-primary mb-2">${item.titulo}</h3>
      <p class="text-dark/70">${item.descricao}</p>
      <span class="text-xs text-dark/50 mt-2 inline-block">${new Date(item.data).toLocaleDateString('pt-BR')}</span>
    `;
    updatesContainer.appendChild(card);
  });
});

// Exemplo: Adicionar atualização (você pode usar no painel do Firebase)
// push(ref(db, 'atualizacoes/'), {
//   titulo: "Novo vídeo no ar!",
//   descricao: "Confira o novo vídeo sobre dicas de criação de conteúdo.",
//   data: Date.now()
// });

// Estatísticas simuladas - você pode integrar com API real depois
document.getElementById('youtubeStats').innerHTML = `
  <p><i class="fa fa-users mr-2"></i> Inscritos: <span class="font-semibold">+1.200</span></p>
  <p><i class="fa fa-play-circle mr-2"></i> Visualizações: <span class="font-semibold">+15.000</span></p>
`;

document.getElementById('discordStats').innerHTML = `
  <p><i class="fa fa-users mr-2"></i> Membros: <span class="font-semibold">+800</span></p>
  <p><i class="fa fa-comments mr-2"></i> Canais: <span class="font-semibold">12</span></p>
`;
