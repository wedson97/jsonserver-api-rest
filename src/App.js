import { LogoIcon } from "./assets/icons"
import CrudUser from "./components/CrudUser"
import "./styles/App.css"

//Aqui é estruturado o header, main, footer
function App() {
	//retorno vai ser uma estrutura jsx que contém os componentes que vão ser carregados na div 'root' no html da aplicação
	//O header está estruturadando uma barra com o nome JSON SERVER API com a logo </>
	//O main chama  o componente CrudUser, ela estrutura uma tabala com a resposta da requisição dos usuarios
	return (
		<>
			<header>
				<div className='header__content'>
					<div className='logo'>
						<LogoIcon />
						<strong>JSON SERVER API</strong>
					</div>
				</div>
			</header>
			<main>
				<CrudUser />
			</main>
		</>
	)
}

export default App
