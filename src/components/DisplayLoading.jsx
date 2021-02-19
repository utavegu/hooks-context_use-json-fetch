import React from 'react'
import useJsonFetch from '../hooks/useJsonFetch.jsx'

export default function DisplayLoading() {

  const [data, loading, error] = useJsonFetch("http://localhost:7070/loading");

  return (
    <>
      <h2>Отображение загрузки</h2>
      {loading && <p>Загружаю данные с сервера...</p>}
      {error && <p><b>Ошибка загрузки: {error.message}</b></p>}
    </>
  )
}
