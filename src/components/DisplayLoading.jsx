import React from 'react'
import useJsonFetch from '../hooks/useJsonFetch.jsx'

function DisplayLoading() {
	
	const LOADING_LINK = "http://localhost:7070/loading";
	const [data, loading, error] = useJsonFetch(LOADING_LINK);

	return (
		<>
      <h2>Запрос загрузки</h2>
      {loading && <p>Получаем данные с сервера...</p>}
      {error && <p><b>Ошибка загрузки: {error.message}</b></p>}
		</>
	)
}

export default DisplayLoading

