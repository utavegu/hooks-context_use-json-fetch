import React from 'react'
import useJsonFetch from '../hooks/useJsonFetch.jsx'

export default function DisplayData() {

  const [data, loading, error] = useJsonFetch("http://localhost:7070/data");

  return (
    <>
      <h2>Отображение данных</h2>
      <p>Статус загрузки данных: {data.status}</p>
      {loading && <p>Загружаю данные с сервера...</p>}
      {error && <p><b>Ошибка загрузки: {error.message}</b></p>}
    </>
  )
}
