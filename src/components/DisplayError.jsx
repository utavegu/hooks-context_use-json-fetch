import React from 'react'
import useJsonFetch from '../hooks/useJsonFetch.jsx'

export default function DisplayError() {

  const [data, loading, error] = useJsonFetch("http://localhost:7070/error");

  return (
    <>
      <h2>Отображение ошибки</h2>
      {loading && <p>Загружаю данные с сервера...</p>}
      {error && <p><b>Ошибка загрузки: {error.message}</b></p>}
    </>
  )
}
