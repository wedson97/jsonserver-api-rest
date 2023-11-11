import React, { useState, useEffect } from "react"
import Form from "./Form"
import Table from "./Table"


import { httpHelper } from "../helpers/httpHelper"

const CrudUser = () => {
	//Usado para alterar os usuarios
	const [users, setUsers] = useState(null)

	//url base da requisição
	const url = "http://localhost:5000/users"
	//função para as requisições
	const api = httpHelper()

	//o useEffect usa a função getUsers para fazer umas requisição get
	useEffect(() => {
		getUsers()
	}, [])

	//faz uma requisição post para enviar novos dados de usuarios, se dê certo faz uma requisição get para atualizar a tela
	const postUser = user => {
		api
			.post(`${url}`, { body: user })
			.then(res => getUsers())
			.catch(err => console.log(err))
	}

	//requisição put para atualizar dados de usuarios já existentes, se dê certo faz uma requisição get para atualizar a tela
	const updateUser = (id, user) => {
		api
			.put(`${url}/${id}`, { body: user })
			.then(res => getUsers())
			.catch(err => console.log(err))
	}

	//requisição delete para deletar um usuario existente, se dê certo faz uma requisição get para atualizar a tela
	const deleteUser = id => {
		api
			.del(`${url}/${id}`, {})
			.then(res => getUsers())
			.catch(err => console.log(err))
	}

	//requisição get, para pegar todos os usuarios
	const getUsers = () => {
		api
			.get(`${url}?_expand=companies`)
			.then(res => {
				setUsers(res)
			})
			.catch(err => console.log(err))
	}
	//se nao houver usuarios, retorna null
	if (!users) return null

	//retorna o formulario para adicionar um usuario novo e retorna tambem a tabela com a lista de usuarios
	return (
		<>
			<h3>New user</h3>
			<Form postUser={postUser} />
			<div className='all-users'>
				<h3>All users</h3>
				<Table
					users={users}
					setUsers={setUsers}
					postUser={postUser}
					updateUser={updateUser}
					deleteUser={deleteUser}
				/>
			</div>
		</>
	)
}

export default CrudUser
