import React, { useState } from "react"
import DropComapies from "./DropCompanies"

//componente de formulario onde são inseridos os dados que vão ser tratados pelo back-end
const Form = ({ userData = {}, postUser, updateUser }) => {
	//estruturado as informações que são passadas
	const [user, setUser] = useState({
		name: userData.name ?? "",
		username: userData.username ?? "",
		email: userData.email ?? "",
		phone: userData.phone ?? "",
		companiesId: userData.companiesId ?? "0",
	})

	//altera o user com as informações que são passadas para a função usando espalhamento de dados
	const handleValue = e => {
		setUser({ ...user, [e.target.name]: e.target.value })
	}

	//função que faz o submit das informações
	const submitUser = e => {
		e.preventDefault()

		if (user.companiesId === "0") return

		if (userData.id) {
			updateUser(userData.id, user)
		} else {
			postUser(user)
		}
	}
	//retorna o a estrutura do formulario, o dropcompanies estrutura a seleção das companias
	return (
		<form onSubmit={submitUser} className='row'>
			<input
				type='text'
				name='name'
				value={user.name}
				placeholder='Name'
				onChange={e => handleValue(e)}
			/>
			<input
				type='email'
				name='email'
				value={user.email}
				placeholder='Email'
				onChange={e => handleValue(e)}
			/>
			<input
				type='tel'
				name='phone'
				value={user.phone}
				placeholder='Phone (10)'
				pattern='[0-9]{10}'
				onChange={e => handleValue(e)}
			/>
			<DropComapies companiesId={user.companiesId} handleValue={handleValue} />
			<input
				className='btn-submit'
				type='submit'
				value={`${!userData.id ? "Add new user" : "Save user"}`}
			/>
		</form>
	)
}

export default Form
