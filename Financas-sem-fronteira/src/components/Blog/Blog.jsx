import React from 'react'
import './Blog.css';
import ProjectCard from './ProjectCard';
import foto from '../../assets/images/Quanto-custa-sua-liberdade-980x551.webp';
import foto2 from '../../assets/images/Foto2.webp';
import foto3 from '../../assets/images/OPCAO-02-980x551.webp';

function Blog() {

  const projetosLista = [
    {
      title: "Meu primeiro salário: e agora?",
      desc: "Meu primeiro salário: e agora? Conquistar o primeiro salário é um marco na vida da maioria das pessoas, denota  o reconhecimento de um esforço,  primeiro sinal de independência financeira, a porta de entrada para novos sonhos. No entanto, também é o momento dos...",
      bgImage: foto,
    },
    {
      title: "Dívidas e estar endividado",
      desc: "Dívidas e estar endividado, você sabe reconhecer as diferenças? Então confira no artigo de hoje do nosso blog. Dívidas e estar endividado A ideia de que ter dívidas é ruim, é um equívoco! Diferença entre ter dívidas e estar endividado, eis a questão! Dessa forma,...",
      bgImage: foto2,
    },
    {
      title: "Independência financeira além do acúmulo de dinheiro",
      desc: "Independência financeira além do acúmulo de dinheiro. Entenda melhor no artigo de hoje do nosso blog. Independência financeira além do acúmulo de dinheiro Por muito tempo, a sociedade associou o dinheiro ao universo masculino. Às mulheres, historicamente, coube a...",
      bgImage: foto3,
    }
  ];
  return (
    <div>
        <section id="blog">
        <h1>BLOG</h1>
        <div id="grid-blog">
            {projetosLista.map((proj, index) => (
            <ProjectCard 
                key={index}
                title={proj.title}
                desc={proj.desc}
                bgImage={proj.bgImage}
            />
            ))}
        </div>
        <button className="btn-blog-todos">Ver todos os artigos</button>
        </section>
    </div>
  )
}

export default Blog
