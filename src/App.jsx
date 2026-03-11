import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Youtube, ExternalLink, Code2, Server, Terminal, BookOpen, Store } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Controle simples de scroll para atualizar o menu ativo
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'sobre', 'habilidades', 'projetos'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 font-sans selection:bg-blue-500/30">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-slate-100 tracking-tight">
            Jameson<span className="text-blue-500">.dev</span>
          </span>
          <div className="hidden md:flex space-x-6">
            {['home', 'sobre', 'habilidades', 'projetos'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`text-sm font-medium capitalize transition-colors hover:text-blue-400 ${
                  activeSection === item ? 'text-blue-500' : 'text-slate-400'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <a
            href="mailto:jmsapplay@gmail.com"
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
          >
            <Mail size={16} />
            Contato
          </a>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-24 pb-12 space-y-32">
        
        {/* Seção Hero */}
        <section id="home" className="pt-20 pb-10 flex flex-col justify-center min-h-[70vh]">
          <div className="space-y-6 max-w-3xl">
            <p className="text-blue-500 font-medium tracking-wide">Olá, mundo! Eu sou</p>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-100 tracking-tight">
              Jameson Souza.
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-500">
              Construindo o back-end e aprendendo sempre.
            </h2>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl pt-4">
              Sou um desenvolvedor focado no ecossistema <strong className="text-slate-200 font-medium">Mobile e o uso de IA/Machine Learning</strong>, 
              com curiosidade pelo mundo JavaScript. Meu foco atual é construir aplicativeis móveis com Flutter e modelos de IA, 
              aprender boas práticas de arquitetura e compartilhar meu conhecimento através de vídeos. 
              Ferramentas de analise de dados, ETL, Data Science e Data Analytics também estão no meu radar de aprendizado.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-8">
              <a href="https://github.com/jamesonSouza" target="_blank" rel="noreferrer" 
                 className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-lg transition-colors font-medium">
                <Github size={20} />
                GitHub
              </a>
              <a href="https://www.youtube.com/@SupJameson" target="_blank" rel="noreferrer" 
                 className="flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 rounded-lg transition-colors font-medium">
                <Youtube size={20} className="text-red-500" />
                Youtube
              </a>
              <a href="https://play.google.com/store/apps/developer?id=JmsApplay&hl=pt_BR" target="_blank" rel="noreferrer" 
                 className="flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 rounded-lg transition-colors font-medium">
                <Store size={20} className="text-red-500" />
                PlayStore
              </a>
              <a href="https://www.linkedin.com/in/jamesonsouza/" target="_blank" rel="noreferrer" 
                 className="flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 rounded-lg transition-colors font-medium">
                <Linkedin size={20} className="text-blue-400" />
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Seção Sobre Mim */}
        <section id="sobre" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-100">Sobre mim</h3>
            <div className="h-px bg-slate-800 flex-grow max-w-xs"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-slate-400 leading-relaxed text-lg">
              <p>
                Minha jornada na programação começou com a curiosidade de entender como as coisas funcionam por trás das telas. 
                Hoje, dedico grande parte do meu tempo aprofundando meus conhecimentos em <span className="text-blue-400 font-medium">IA, Machine Learning e Deep Learning</span> e no framework <span className="text-blue-400 font-medium">Flutter</span> para desenvolvimento de aplicativos móveis.
              

              </p>
              <p>
                Não me considero um "sabe-tudo". Pelo contrário, sei que a área de tecnologia exige estudo contínuo. 
                Quando não estou codando ou quebrando a cabeça com algum bug no Node.js ou em integrações (como bots de WhatsApp), 
                gosto de gravar vídeos para o meu canal. Acredito que a melhor forma de fixar o que aprendemos é ensinando outras pessoas.
              </p>
              <p>
                Estou em busca de desafios que me permitam evoluir tecnicamente, aplicar padrões de projeto e trabalhar em equipe.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-slate-800 p-8 rounded-lg border border-slate-700 shadow-xl">
                <Terminal className="text-slate-500 mb-4" size={32} />
                <div className="font-mono text-sm text-slate-300 space-y-2">
                  <p><span className="text-green-400">jameson@dev</span><span className="text-slate-500">~</span>$ whoami</p>
                  <p className="text-slate-400">Jameson Souza</p>
                  <p><span className="text-green-400">jameson@dev</span><span className="text-slate-500">~</span>$ cat focus.txt</p>
                  <p className="text-slate-400">Backend Development, API Design, Clean Code</p>
                  <p className="animate-pulse">_</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Habilidades */}
        <section id="habilidades" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-100">Tecnologias & Ferramentas</h3>
            <div className="h-px bg-slate-800 flex-grow max-w-xs"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Backend */}
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-colors">
              <Server className="text-blue-400 mb-4" size={28} />
              <h4 className="text-xl font-bold text-slate-200 mb-4">Back-end</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Python</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Flutter</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> API REST</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Node.js (Básico)</li>
              </ul>
            </div>

            {/* Banco de Dados & Outros */}
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
              <Code2 className="text-emerald-400 mb-4" size={28} />
              <h4 className="text-xl font-bold text-slate-200 mb-4">Ferramentas</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Git & GitHub</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Bancos de Dados Relacionais</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> JavaScript / TS</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Docker (Explorando)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Ferramentas de Análise de Dados</li>
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-purple-500/30 transition-colors">
              <BookOpen className="text-purple-400 mb-4" size={28} />
              <h4 className="text-xl font-bold text-slate-200 mb-4">Essenciais</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Resolução de Problemas</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Criação de Conteúdo</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Vontade de Aprender</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Trabalho em Equipe</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Seção Projetos */}
        <section id="projetos" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-100">Alguns Projetos</h3>
            <div className="h-px bg-slate-800 flex-grow max-w-xs"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Projeto 1 */}
            <div className="group bg-slate-800/40 rounded-xl border border-slate-700/50 overflow-hidden hover:bg-slate-800/80 transition-all">
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <Server className="text-blue-400" size={32} />
                  <a href="https://github.com/jamesonSouza" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-200 transition-colors">
                    <Github size={20} />
                  </a>
                </div>
                <h4 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-blue-400 transition-colors">
                  API de Gerenciamento (Spring Boot)
                </h4>
                <p className="text-slate-400 text-sm flex-grow mb-6">
                  Um projeto desenvolvido para consolidar conhecimentos em Spring Boot, criação de endpoints RESTful, injeção de dependências e conexão com banco de dados.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-300">
                  <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full">Java</span>
                  <span className="px-3 py-1 bg-green-900/30 text-green-300 rounded-full">Spring Boot</span>
                  <span className="px-3 py-1 bg-slate-700/50 rounded-full">JPA/Hibernate</span>
                </div>
              </div>
            </div>

            {/* Projeto 2 */}
            <div className="group bg-slate-800/40 rounded-xl border border-slate-700/50 overflow-hidden hover:bg-slate-800/80 transition-all">
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <Terminal className="text-emerald-400" size={32} />
                  <div className="flex gap-3">
                    <a href="https://github.com/jamesonSouza" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-200 transition-colors">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-emerald-400 transition-colors">
                  Integração WhatsApp Web JS
                </h4>
                <p className="text-slate-400 text-sm flex-grow mb-6">
                  Estudos e contribuições envolvendo bibliotecas open-source como whatsapp-web.js para automação de mensagens e respostas automatizadas utilizando Node.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-300">
                  <span className="px-3 py-1 bg-yellow-900/30 text-yellow-300 rounded-full">JavaScript</span>
                  <span className="px-3 py-1 bg-emerald-900/30 text-emerald-300 rounded-full">Node.js</span>
                  <span className="px-3 py-1 bg-slate-700/50 rounded-full">Open Source</span>
                </div>
              </div>
            </div>
             {/* Projeto 3 - Exemplo de projeto Flutter (em desenvolvimento) */}
             
              <div className="group bg-slate-800/40 rounded-xl border border-slate-700/50 overflow-hidden hover:bg-slate-800/80 transition-all">
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <Terminal className="text-emerald-400" size={32} />
                  <div className="flex gap-3">
                    <a href="https://github.com/jamesonSouza/sis_chamado" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-200 transition-colors">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-emerald-400 transition-colors">
                  Sistema de chamados 
                </h4>
                <p className="text-slate-400 text-sm flex-grow mb-6">
                  Um sistema de chamados (HelpDesk) simples e responsivo desenvolvido em PHP e MySQL. Ele permite a abertura, gerenciamento e resolução de chamados de TI/Suporte, além de contar com um dashboard analítico completo.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-300">
                  <span className="px-3 py-1 bg-yellow-900/30 text-yellow-300 rounded-full">PHP</span>
                  <span className="px-3 py-1 bg-emerald-900/30 text-emerald-300 rounded-full">MySQL</span>
                  <span className="px-3 py-1 bg-slate-700/50 rounded-full">Open Source</span>
                </div>
              </div>
            </div>

             {/* Projeto 4 */}
            <div className="group bg-slate-800/40 rounded-xl border border-slate-700/50 overflow-hidden hover:bg-slate-800/80 transition-all">
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <Terminal className="text-emerald-400" size={32} />
                  <div className="flex gap-3">
                    <a href="https://github.com/jamesonSouza" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-200 transition-colors">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-emerald-400 transition-colors">
                  Aplicativo de entregas (Flutter) em andamento
                </h4>
                <p className="text-slate-400 text-sm flex-grow mb-6">
                  Um aplicativo de entregas desenvolvido em Flutter, focado em oferecer uma experiência de usuário fluida e intuitiva. O projeto inclui funcionalidades como rastreamento de pedidos, integração com APIs de mapas e notificações push.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-300">
                  <span className="px-3 py-1 bg-yellow-900/30 text-yellow-300 rounded-full">Dart</span>
                  <span className="px-3 py-1 bg-emerald-900/30 text-emerald-300 rounded-full">Flutter</span>
                  <span className="px-3 py-1 bg-slate-700/50 rounded-full">Open Source</span>
                </div>
              </div>
            </div>
              {/* Adicione mais projetos copiando a estrutura acima */}
          </div>
          
          <div className="mt-10 text-center">
            <a href="https://github.com/jamesonSouza" target="_blank" rel="noreferrer" 
               className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors">
              Ver mais no GitHub <ExternalLink size={16} />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/50 mt-20">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Jameson Souza. Construído para a web.
          </p>
          <div className="flex items-center gap-4 text-slate-500">
            <a href="https://github.com/jamesonSouza" className="hover:text-slate-300 transition-colors"><Github size={18} /></a>
            <a href="#" className="hover:text-slate-300 transition-colors"><Linkedin size={18} /></a>
            <a href="#" className="hover:text-slate-300 transition-colors"><Youtube size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}