import React from 'react'
import './Blog.css'
import ProjectCard from './ProjectCard'
import foto1 from '../../assets/images/Quanto-custa-sua-liberdade-980x551.webp'
import foto2 from '../../assets/images/Foto2.webp'
import foto3 from '../../assets/images/OPCAO-02-980x551.webp'
import vini from '../../assets/images/vini-financas.jpeg'

function Blog() {
  const projetosLista = [
      {
        title: "Meu primeiro salário: e agora?",
        desc: "Meu primeiro salário: e agora? Conquistar o primeiro salário é um marco na vida da maioria das pessoas, denota  o reconhecimento de um esforço...",
        bgImage: foto1,
        tipo: "Dicas",
        autor: "Vinicius Lima",
        autorImg: vini,
        data: "10 de junho de 2024"
      },
      {
        title: "Dívidas e estar endividado",
        desc: "Dívidas e estar endividado, você sabe reconhecer as diferenças? Então confira no artigo de hoje do nosso blog. Dívidas e estar endividado A ideia de que ter dívidas...",
        bgImage: foto2,
        tipo: "Dicas",
        autor: "Vinicius Lima",
        autorImg: vini,
        data: "15 de junho de 2024"
      },
      {
        title: "Independência financeira além do acúmulo de dinheiro",
        desc: "Independência financeira além do acúmulo de dinheiro. Entenda melhor no artigo de hoje do nosso blog. Independência financeira...",
        bgImage: foto3,
        tipo: "Dicas",
        autor: "Vinicius Lima",
        autorImg: vini,
        data: "20 de junho de 2024",
      }
    ];

  return (
    <div className='blog'>
      <section className="blog-container">
        <h1>BLOG</h1>
        <p className='descricao-blog'>Descubra como podemos impulsionar seu   crescimento.</p>

        <div className='projeto-principal'>
          <img src={foto1} alt="Imagem do artigo" />
          <div className='projeto-principal-texto'>
            <span>Dicas</span>
            <h3>Meu primeiro salário: e agora?</h3>
            <p>Meu primeiro salário: e agora? Conquistar o primeiro salário é um marco na vida da maioria das pessoas, denota  o reconhecimento de um esforço,  primeiro sinal de independência financeira, a porta de entrada para novos sonhos. No entanto, também é o momento dos...</p>
            <button className="btn-blog-principal">Saiba mais</button>
          </div>
        </div>

        <div id="grid-blog">
            {projetosLista.map((proj, index) => (
            <ProjectCard 
                key={index}
                title={proj.title}
                desc={proj.desc}
                bgImage={proj.bgImage}
                tipo={proj.tipo}
                autor={proj.autor}
                autorImg={proj.autorImg}
                data={proj.data}
            />
            ))}
        </div>
        <button className="btn-blog-todos">Ver todos os artigos</button>
        </section>
      
    </div>
  )
}

export default Blog
