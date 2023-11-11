import React from "react"
import Form from "./Form"

//componente que estrutura da tabela de clientes
const Table = ({ users, postUser, updateUser, deleteUser }) => {
	const showUpdateUser = id => {
		const form = document.getElementsByClassName(`show-form-${id}`)
		form[0].classList.toggle("hide-form")
	}

	//estrutura uma linha da tabela, posteriormente essa função vai ser chama em uma interação map
	//A estrutura da linha são os dados do cliente 
	const Row = ({ user }) => {
		return (
			<>
				<div className='row'>
					<div>{user.name}</div>
					<div>{user.email}</div>
					<div>{user.phone}</div>
					<div>{user.companies.name}</div>
					<div className='buttons'>
						<button onClick={() => showUpdateUser(user.id)}>Update</button>
						<button onClick={() => deleteUser(user.id)}>Delete</button>
					</div>
				</div>
				<div className={`hide-form show-form-${user.id}`}>
					<Form userData={user} postUser={postUser} updateUser={updateUser} />
				</div>
			</>
		)
	}

	//retorna a tabela com os dados do cliente
	return (
		<div className='table'>
			<div className='titles'>
				<div>Name</div>
				<div>Email</div>
				<div>Phone</div>
				<div>Company</div>
				<div>Actions</div>
			</div>
			<div className='rows'>
				{users && users.map(u => <Row user={u} key={u.id} />)}
			</div>
		</div>
	)
}

export default Table
