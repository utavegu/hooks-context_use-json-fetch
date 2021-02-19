import React from 'react'
import useJsonFetch from '../hooks/useJsonFetch.jsx'

function DisplayData() {
	
	const DATA_LINK = "http://localhost:7070/data";
	const [data, loading, error] = useJsonFetch(DATA_LINK);
	console.log();

	return (
		<>
			<h2>Запрос данных</h2>
			<div>Статус получения данных: {data.status}</div>
			{loading && <p>Получаем данные с сервера...</p>}
			{error && <p><b>Ошибка загрузки: {error.message}</b></p>}
		</>
	)
}

export default DisplayData

