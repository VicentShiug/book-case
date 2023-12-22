// pages/seuLivro.js

import { Button } from '@material-tailwind/react';
import React from 'react';

export const BookPreview = ({ id }) => {
  return (
    <iframe
      id="iframe"
        frameBorder="0"
        allowFullScreen
        width={'100%'}
        height={window.innerHeight - 200}
        scrolling="no"
        src={`https://books.google.com.br/books?id=${id}&lpg=PP1&hl=pt-BR&pg=PT2&output=embed`}
      ></iframe>
  );
};
