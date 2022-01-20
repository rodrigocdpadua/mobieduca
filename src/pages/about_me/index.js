import React from 'react';
import './styles.css';

class AboutMe extends React.Component{
    render(){
        return(
            <div className='aboutme-container'>
                <section className='about-me'>
                    <h2>Abot Me</h2>
                    <p>
                        Desenvolvedor front-end em crescimento. Iniciei o curso de Ciências da Computação na Universidade Estadual do Piauí (UESPI) onde adquiri experiência em programação e trabalho em equipe. Fiz projetos freelancer para trabalhos acadêmicos de alunos da universidade. Atualmente possuo conhecimento em algumas linguagens de programação e sempre estou praticando e utilizando o GitHub para armazenar o meu progresso. Estou aberto a aprender e ampliar meus conhecimentos na área de desenvolvimento e progredir na minha carreira.
                    </p>
                </section>
                <section className='tools'>
                    <h2>Tolls Used</h2>
                    <ul>
                        <p>
                            <li>
                                Editor de Texto: VScode
                            </li>
                        </p>
                        <p>
                            <li>
                                Linguagem: JavaScript -- Biblioteca: React.js
                            </li>
                        </p>
                        <p>
                            <li>
                                Estilos: CSS
                            </li>
                        </p>
                        <p>
                            <li>
                                json-server - Armazenar dados mockados (Usuários e Escolas).
                            </li>
                        </p>
                        <p>
                            <li>
                                react-touter-dom - Trabalhar com rotas no sistema.
                            </li>
                        </p>
                    </ul>
                </section>
                <section className='difficulty'>
                    <h2>Difficulties</h2>
                    <ul>
                        <p>
                            <li>
                                Organizar as pastas do sitema, não tem um jeito mais certo que o outro, mas decidir qual padrão de organização usar é de coçar a cabeça.
                            </li>
                        </p>
                        <p>
                            <li>
                                Usar o react-router-dom, já havia usado antes mas algumas funcionalidades tive que aprender na hora e acabou consumindo mais tempo.
                            </li>
                        </p>
                        <p>
                            <li>
                                Fazer autenticação de usuário, da mesma forma do react-router-dom, muitas funcionalidades tive que aprender na hora e consumiu bastante tempo.
                            </li>
                        </p>
                        <p>
                            <li>
                                Consumir os dados da API fornecida, ocorreu algum problema que ainda não consegui identificar, tentei de várias formas diferentes e não funcionou. No fim tive que usar funções que nunca tinha visto.
                            </li>
                        </p>
                    </ul>
                </section>
                <section className='suggestions'>
                    <h2>Suggestions</h2>
                    <ul>
                        <p>
                            <li>
                                Adicionar uma página inicial explicando tudo sobre o sistema.
                            </li>
                        </p>
                        <p>
                            <li>
                                Adicionar um rodapé com informações de contato da empresa responsável pelo sistema.
                            </li>
                        </p>
                    </ul>
                </section>
            </div>
        );
    }
}

export default AboutMe;