import React from 'react'

export default function BooksList ({books}) {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
          {
            books?.map(book => {
              return (
                <div key={book} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img style={{width: 100}} src={book.volumeInfo.imageLinks.thumbnail} alt="Livro" />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3>{book.volumeInfo.title}</h3>
                    <p>{book.volumeInfo.description}</p>
                  </div>
                </div>
              )
            })
          }
          {/* <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img style={{width: 100}} src="https://images-na.ssl-images-amazon.com/images/I/51LpqnDq8-L._SX331_BO1,204,203,200_.jpg" alt="Livro" />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h3>Nome do livro</h3>
              <p>Descrição do livro</p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img style={{width: 100}} src="https://images-na.ssl-images-amazon.com/images/I/51LpqnDq8-L._SX331_BO1,204,203,200_.jpg" alt="Livro" />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h3>Nome do livro</h3>
              <p>Descrição do livro</p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img style={{width: 100}} src="https://images-na.ssl-images-amazon.com/images/I/51LpqnDq8-L._SX331_BO1,204,203,200_.jpg" alt="Livro" />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h3>Nome do livro</h3>
              <p>Descrição do livro</p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}
