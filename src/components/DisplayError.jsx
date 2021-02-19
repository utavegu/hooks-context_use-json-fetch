import React from 'react'
import useJsonFetch from '../hooks/useJsonFetch.jsx'

function DisplayError() {
	
	const ERROR_LINK = "http://localhost:7070/error";
	const [data, loading, error] = useJsonFetch(ERROR_LINK);

	return (
		<>
      <h2>Запрос ошибки</h2>
      {loading && <p>Получаем данные с сервера...</p>}
      {error && <p><b>Ошибка загрузки: {error.message}</b></p>}
		</>
	)
}

export default DisplayError

