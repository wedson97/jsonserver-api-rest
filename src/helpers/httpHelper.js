export const httpHelper = () => {
	const customFetch = async (url, options = {}) => {
		//valor padrão de requisição
		const defaultMethod = "GET"
		
		//cabeçalho padrão
		const defaultHeaders = {
			"Content-Type": "application/json",
			Accept: "application/json",
		}
		//instancia a abortController, permite abortar a requisição após um tempo
		const controller = new AbortController()
		//options.signal é uma parte da configuração da requisição
		options.signal = controller.signal

		//define o metodo da requisição
		options.method = options.method || defaultMethod
		//define o cabeçalho da requisição, por exemplo, o tipo de dados enviados e recebidos
		options.headers = options.headers
			? { ...defaultHeaders, ...options.headers }
			: defaultHeaders
		//Estrutura os dados do body da requisição, caso não tenha, o body é deletado
		options.body = JSON.stringify(options.body) || false
		if (!options.body) delete options.body

		//limita a espera de resposta do servidor
		setTimeout(() => {
			controller.abort()
		}, 3000)

		//tenta fazer a requisição com a config previamente configurada
		try {
			const response = await fetch(url, options)
			return await response.json()
		} catch (err) {
			return err
		}
	}

	//função de requisição get
	const get = (url, options = {}) => customFetch(url, options)

	//função de requisição post
	const post = (url, options) => {
		options.method = "POST"
		return customFetch(url, options)
	}

	//função de requisição put
	const put = (url, options) => {
		options.method = "PUT"
		return customFetch(url, options)
	}

	//função de requisição delete
	const del = (url, options) => {
		options.method = "DELETE"
		return customFetch(url, options)
	}

	//retorna as funções de requisição
	return {
		get,
		post,
		put,
		del,
	}
}
