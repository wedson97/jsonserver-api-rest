import React, { useState, useEffect } from "react"
import { httpHelper } from "../helpers/httpHelper"

//função que faz uma requisição para pegar todas as companias
const DropCompanies = ({ companiesId, handleValue }) => {
	//Os dois são responsaveis por mudanças no estado, um em uma compania especifica e o outro na lista de companias
	const [companies, setCompanies] = useState(null)
	const [company, setCompany] = useState(companiesId)

	//Url base da requisição
	const url = "http://localhost:5000/companies"
	//Instância a função para a requisição
	const api = httpHelper()

	//Faz a requisição get e depois usa o setCompanies para montar uma lista com todas as companias sendo a 
	//primeira um "Select Company" que ficará no topo da lista
	useEffect(() => {
		api
			.get(url)
			.then(res => {
				setCompanies([{ id: 0, name: "Select Company" }, ...res])
			})
			.catch(err => console.log(err))
	}, [])
	//se nao houver companias, retorna null
	if (!companies) return null

	//estrutura o select usando a lista de companias da requisição
	return (
		<select
			name='companiesId'
			value={company}
			onChange={e => {
				setCompany(e.target.value)
				handleValue(e)
			}}
		>
			{companies.map(c => (
				<option value={c.id} key={c.id}>
					{c.name}
				</option>
			))}
		</select>
	)
}

export default DropCompanies
