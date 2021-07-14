import React, { useState } from "react"
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet,AlurakutProfileSidebarMenuDefault } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(propriedades) {
    
  console.log(propriedades);
  
  return (    
    <Box as="aside" >
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr/>
      <p>
        <a href={`https://github.com/${propriedades.githubUser}`} clasName="boxLink">
          @{propriedades.githubUser}
        </a>
      </p>

      <hr/>
      <AlurakutProfileSidebarMenuDefault/>
    </Box>
  )
}

export default function Home() {
  React.useState()

  const [comunidades,setComunidades]= React.useState(
    [
     { 
        id: new Date().toISOString(),
        title:"Learn React",
        image:"https://targettrend.com/wp-content/uploads/2020/12/learn-ReactJS-online-free-1.jpg"
      }
    ]
  )

  const usuarioAleatorio = 'moreiraramires';

  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'maykbrito',
    'marcobrunodev',
    'felipefialho'
  ]

  

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        {/* <Box style="grid-area: profileArea;"> */}
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={usuarioAleatorio} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>

            <h1 className="title">
              Bem vindo(a) 
            </h1>

            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={
                function handleCriaComunidade(e){
                  e.preventDefault()
                 console.log(e);  

                const dadosDoForm = new FormData(e.target)
                const comunidadeForm ={
                  id: new Date().toISOString(),
                  title: dadosDoForm.get("title"),
                  image: dadosDoForm.get("image")
                }

                 const comunidadesAtualizadas = [...comunidades,comunidadeForm]
                 setComunidades(comunidadesAtualizadas)
                }
            }>
              <div>
                <input 
                  placeholder="Qual nome da sua comunidade?" 
                  name="title"
                  arial-label="Qual nome da sua comunidade?"
                  type="text"
                  />
              </div>
              <div>
                <input 
                  placeholder="Coloque uma URL para usarmos de capa" 
                  name="image"
                  arial-label="QColoque uma URL para usarmos de capa?"
                  />
              </div>
              <button>
                Criar comunidade
              </button>

            </form>
          </Box>

        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
              Comunidade({comunidades.length})
            </h2>
          <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual.title}`} >
                    <img src={itemAtual.image} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`} >
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}