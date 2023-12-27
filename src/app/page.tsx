'use client'
import React from 'react'

import BackgroundArea from '@/components/backgroundArea/BackgroundArea'
import MainSection from '@/components/mainSection/MainSection'
import TopBar from '@/components/topBar/Topbar'
import { useAuthContext } from '@/context/AuthContext'
import { UseGetAllStateBooks } from '@/hooks/useGetBooks'
import { parseCookies } from 'nookies'
import { useQuery } from 'react-query'
import { Button } from '@material-tailwind/react'
import { addData, deleteData, getData, setData, updateData } from '@/hooks/useDB'
import { createUserData, getUserData } from '@/functions/DBFunctions'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fakeData = [
  {
    kind: 'books#volume',
    id: 'DF9oDwAAQBAJ',
    etag: 'UOMEk2YwCo4',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/DF9oDwAAQBAJ',
    volumeInfo: {
      title: 'Sobre Histórias',
      authors: ['C.S. Lewis'],
      publisher: 'Thomas Nelson Brasil',
      publishedDate: '2018-08-17',
      description:
        'C.S. Lewis era um ávido leitor, capaz de ir de um assunto para outro com enorme facilidade e destreza. Isso fica evidente na coletânea de textos reunidos neste livro inédito — incluindo ensaios, artigos, resenhas críticas, tributos, dentre ...',
      industryIdentifiers: [
        {
          type: 'ISBN_13',
          identifier: '9788566997644'
        },
        {
          type: 'ISBN_10',
          identifier: '8566997646'
        }
      ],
      readingModes: {
        text: true,
        image: false
      },
      pageCount: 210,
      printType: 'BOOK',
      categories: ['Literary Criticism'],
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: false,
      contentVersion: '1.6.7.0.preview.2',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=DF9oDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=DF9oDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      previewLink:
        'http://books.google.com.br/books?id=DF9oDwAAQBAJ&printsec=frontcover&hl=&source=gbs_api',
      infoLink:
        'https://play.google.com/store/books/details?id=DF9oDwAAQBAJ&source=gbs_api',
      canonicalVolumeLink:
        'https://play.google.com/store/books/details?id=DF9oDwAAQBAJ'
    },
    layerInfo: {
      layers: [
        {
          layerId: 'geo',
          volumeAnnotationsVersion: '6'
        }
      ]
    },
    userInfo: {
      updated: '2023-12-14T13:53:21.671Z'
    },
    saleInfo: {
      country: 'BR',
      saleability: 'FOR_SALE',
      isEbook: true,
      listPrice: {
        amount: 39.9,
        currencyCode: 'BRL'
      },
      retailPrice: {
        amount: 37.9,
        currencyCode: 'BRL'
      },
      buyLink:
        'https://play.google.com/store/books/details?id=DF9oDwAAQBAJ&rdid=book-DF9oDwAAQBAJ&rdot=1&source=gbs_api',
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 39900000,
            currencyCode: 'BRL'
          },
          retailPrice: {
            amountInMicros: 37900000,
            currencyCode: 'BRL'
          },
          giftable: true
        }
      ]
    },
    accessInfo: {
      country: 'BR',
      viewability: 'PARTIAL',
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.br/books/download/Sobre_Hist%C3%B3rias-sample-epub.acsm?id=DF9oDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
      },
      pdf: {
        isAvailable: false
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=DF9oDwAAQBAJ&hl=&source=gbs_api',
      accessViewStatus: 'SAMPLE',
      quoteSharingAllowed: false
    }
  },
  {
    kind: 'books#volume',
    id: '65SvEAAAQBAJ',
    etag: '0E9HT4EMDfo',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/65SvEAAAQBAJ',
    volumeInfo: {
      title: '[Resumo] A Vida de C. S. Lewis',
      subtitle: 'Do ateísmo às terras de Nárnia',
      authors: ['Alister McGrath'],
      publisher: 'Editora Mundo Cristão',
      publishedDate: '2022-12-01',
      description:
        'Neste resumo de A vida de C. S. Lewis: Do ateísmo às terras de Nárnia, você será apresentado a um panorama abrangente e fascinante da trajetória de um pensador profundamente original e que se tornou fonte de inspiração para crianças e adultos em ...',
      industryIdentifiers: [
        {
          type: 'OTHER',
          identifier: 'EAN:4066339321236'
        }
      ],
      readingModes: {
        text: true,
        image: true
      },
      pageCount: 24,
      printType: 'BOOK',
      categories: ['Biography & Autobiography'],
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: false,
      contentVersion: 'preview-1.0.0',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=65SvEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=65SvEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      previewLink:
        'http://books.google.com.br/books?id=65SvEAAAQBAJ&printsec=frontcover&hl=&source=gbs_api',
      infoLink:
        'https://play.google.com/store/books/details?id=65SvEAAAQBAJ&source=gbs_api',
      canonicalVolumeLink:
        'https://play.google.com/store/books/details?id=65SvEAAAQBAJ'
    },
    layerInfo: {
      layers: [
        {
          layerId: 'geo',
          volumeAnnotationsVersion: '1'
        }
      ]
    },
    userInfo: {
      updated: '2023-12-14T13:53:03.423Z'
    },
    saleInfo: {
      country: 'BR',
      saleability: 'FOR_SALE',
      isEbook: true,
      listPrice: {
        amount: 9.9,
        currencyCode: 'BRL'
      },
      retailPrice: {
        amount: 9.9,
        currencyCode: 'BRL'
      },
      buyLink:
        'https://play.google.com/store/books/details?id=65SvEAAAQBAJ&rdid=book-65SvEAAAQBAJ&rdot=1&source=gbs_api',
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 9900000,
            currencyCode: 'BRL'
          },
          retailPrice: {
            amountInMicros: 9900000,
            currencyCode: 'BRL'
          },
          giftable: true
        }
      ]
    },
    accessInfo: {
      country: 'BR',
      viewability: 'PARTIAL',
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.br/books/download/Resumo_A_Vida_de_C_S_Lewis-sample-epub.acsm?id=65SvEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
      },
      pdf: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.br/books/download/Resumo_A_Vida_de_C_S_Lewis-sample-pdf.acsm?id=65SvEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=65SvEAAAQBAJ&hl=&source=gbs_api',
      accessViewStatus: 'SAMPLE',
      quoteSharingAllowed: false
    }
  },
  {
    kind: 'books#volume',
    id: 'rJ6uDwAAQBAJ',
    etag: 'iI+U/Qh178Q',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/rJ6uDwAAQBAJ',
    volumeInfo: {
      title: 'O assunto do Céu',
      authors: ['C.S. Lewis'],
      publisher: 'Thomas Nelson Brasil',
      publishedDate: '2019-10-02',
      description:
        'Uma das características que notabilizaram o acadêmico, escritor e crítico C.S. Lewis foi sua extraordinária capacidade de abordar qualquer tema com perspicácia, fosse em seus escritos ou suas palestras. Tal habilidade se mostrava ainda mais ...',
      industryIdentifiers: [
        {
          type: 'ISBN_13',
          identifier: '9788571670792'
        },
        {
          type: 'ISBN_10',
          identifier: '857167079X'
        }
      ],
      readingModes: {
        text: true,
        image: false
      },
      pageCount: 364,
      printType: 'BOOK',
      categories: ['Religion'],
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: true,
      contentVersion: '1.3.3.0.preview.2',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=rJ6uDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=rJ6uDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      previewLink:
        'http://books.google.com.br/books?id=rJ6uDwAAQBAJ&printsec=frontcover&hl=&source=gbs_api',
      infoLink:
        'https://play.google.com/store/books/details?id=rJ6uDwAAQBAJ&source=gbs_api',
      canonicalVolumeLink:
        'https://play.google.com/store/books/details?id=rJ6uDwAAQBAJ'
    },
    layerInfo: {
      layers: [
        {
          layerId: 'geo',
          volumeAnnotationsVersion: '3'
        }
      ]
    },
    userInfo: {
      updated: '2023-12-14T13:47:06.152Z'
    },
    saleInfo: {
      country: 'BR',
      saleability: 'FOR_SALE',
      isEbook: true,
      listPrice: {
        amount: 9.9,
        currencyCode: 'BRL'
      },
      retailPrice: {
        amount: 9.4,
        currencyCode: 'BRL'
      },
      buyLink:
        'https://play.google.com/store/books/details?id=rJ6uDwAAQBAJ&rdid=book-rJ6uDwAAQBAJ&rdot=1&source=gbs_api',
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 9900000,
            currencyCode: 'BRL'
          },
          retailPrice: {
            amountInMicros: 9400000,
            currencyCode: 'BRL'
          },
          giftable: true
        }
      ]
    },
    accessInfo: {
      country: 'BR',
      viewability: 'PARTIAL',
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.br/books/download/O_assunto_do_C%C3%A9u-sample-epub.acsm?id=rJ6uDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
      },
      pdf: {
        isAvailable: false
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=rJ6uDwAAQBAJ&hl=&source=gbs_api',
      accessViewStatus: 'SAMPLE',
      quoteSharingAllowed: false
    }
  },
  {
    kind: 'books#volume',
    id: 'R7KuDwAAQBAJ',
    etag: 'Sq1Hw/pwWs0',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/R7KuDwAAQBAJ',
    volumeInfo: {
      title: 'O Senhor dos Anéis: A Sociedade do Anel',
      authors: ['J.R.R. Tolkien'],
      publisher: 'HARLEQUIN',
      publishedDate: '2019-11-25',
      description:
        'A Sociedade do Anel O volume inicial de O Senhor dos Anéis, lançado originalmente em julho de 1954, foi o primeiro grande épico de fantasia moderno, conquistando milhões de leitores e se tornando o padrão de referência para todas as outras obras ...',
      industryIdentifiers: [
        {
          type: 'ISBN_13',
          identifier: '9788595086333'
        },
        {
          type: 'ISBN_10',
          identifier: '8595086338'
        }
      ],
      readingModes: {
        text: true,
        image: false
      },
      pageCount: 584,
      printType: 'BOOK',
      categories: ['Fiction'],
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: true,
      contentVersion: '1.11.12.0.preview.2',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=R7KuDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=R7KuDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      previewLink:
        'http://books.google.com.br/books?id=R7KuDwAAQBAJ&printsec=frontcover&hl=&source=gbs_api',
      infoLink:
        'https://play.google.com/store/books/details?id=R7KuDwAAQBAJ&source=gbs_api',
      canonicalVolumeLink:
        'https://play.google.com/store/books/details?id=R7KuDwAAQBAJ'
    },
    layerInfo: {
      layers: [
        {
          layerId: 'geo',
          volumeAnnotationsVersion: '13'
        }
      ]
    },
    userInfo: {
      updated: '2023-12-14T13:23:44.553Z'
    },
    saleInfo: {
      country: 'BR',
      saleability: 'FOR_SALE',
      isEbook: true,
      listPrice: {
        amount: 19.96,
        currencyCode: 'BRL'
      },
      retailPrice: {
        amount: 18.96,
        currencyCode: 'BRL'
      },
      buyLink:
        'https://play.google.com/store/books/details?id=R7KuDwAAQBAJ&rdid=book-R7KuDwAAQBAJ&rdot=1&source=gbs_api',
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 19960000,
            currencyCode: 'BRL'
          },
          retailPrice: {
            amountInMicros: 18960000,
            currencyCode: 'BRL'
          },
          giftable: true
        }
      ]
    },
    accessInfo: {
      country: 'BR',
      viewability: 'PARTIAL',
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.br/books/download/O_Senhor_dos_An%C3%A9is_A_Sociedade_do_Anel-sample-epub.acsm?id=R7KuDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
      },
      pdf: {
        isAvailable: false
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=R7KuDwAAQBAJ&hl=&source=gbs_api',
      accessViewStatus: 'SAMPLE',
      quoteSharingAllowed: false
    }
  },
  {
    kind: 'books#volume',
    id: 'TQpyDwAAQBAJ',
    etag: 'NhyOwBWBBYc',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/TQpyDwAAQBAJ',
    volumeInfo: {
      title: 'A Lagoa Alegre !',
      authors: ['Maria Helena Guedes'],
      publisher: 'Clube de Autores',
      publishedDate: '2016-03-16',
      description:
        'A Lagoa dos Patos é uma laguna localizada no estado brasileiro do Rio Grande do Sul, sendo a maior laguna do Brasil e a maior de toda aAmérica do Sul.Tem 265 quilômetros de comprimento, 60 quilômetros de largura (na sua quota máxima), 7 metros de ...',
      industryIdentifiers: [
        {
          type: 'OTHER',
          identifier: 'PKEY:CLDEAU27876'
        }
      ],
      readingModes: {
        text: false,
        image: true
      },
      pageCount: 94,
      printType: 'BOOK',
      categories: ['Juvenile Nonfiction'],
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: false,
      contentVersion: 'preview-1.0.0',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=TQpyDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=TQpyDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      previewLink:
        'http://books.google.com.br/books?id=TQpyDwAAQBAJ&printsec=frontcover&hl=&source=gbs_api',
      infoLink:
        'http://books.google.com.br/books?id=TQpyDwAAQBAJ&hl=&source=gbs_api',
      canonicalVolumeLink:
        'https://books.google.com/books/about/A_Lagoa_Alegre.html?hl=&id=TQpyDwAAQBAJ'
    },
    userInfo: {
      updated: '2023-12-05T12:36:07.818Z'
    },
    saleInfo: {
      country: 'BR',
      saleability: 'NOT_FOR_SALE',
      isEbook: false
    },
    accessInfo: {
      country: 'BR',
      viewability: 'PARTIAL',
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: false
      },
      pdf: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.br/books/download/A_Lagoa_Alegre-sample-pdf.acsm?id=TQpyDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=TQpyDwAAQBAJ&hl=&source=gbs_api',
      accessViewStatus: 'SAMPLE',
      quoteSharingAllowed: false
    }
  },
  {
    kind: 'books#volume',
    id: 'sIklEAAAQBAJ',
    etag: 'EUc/nJ8HFgU',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/sIklEAAAQBAJ',
    volumeInfo: {
      title: 'O Deus que destrói sonhos',
      authors: ['Rodrigo Bibo'],
      publisher: 'Thomas Nelson Brasil',
      publishedDate: '2021-04-15',
      description:
        'O Deus cristão não pode ser domesticado Uma tentação constante que cerca a vida cristã é a inversão do chamado: a presunção de que Deus precisa abençoar o meu caminho e me seguir em meus planos e sonhos. Essa postura é enganosa e faz parecer que ...',
      industryIdentifiers: [
        {
          type: 'ISBN_13',
          identifier: '9786556891866'
        },
        {
          type: 'ISBN_10',
          identifier: '655689186X'
        }
      ],
      readingModes: {
        text: true,
        image: false
      },
      pageCount: 112,
      printType: 'BOOK',
      categories: ['Religion'],
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: true,
      contentVersion: '1.8.8.0.preview.2',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=sIklEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=sIklEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      previewLink:
        'http://books.google.com.br/books?id=sIklEAAAQBAJ&printsec=frontcover&hl=&source=gbs_api',
      infoLink:
        'https://play.google.com/store/books/details?id=sIklEAAAQBAJ&source=gbs_api',
      canonicalVolumeLink:
        'https://play.google.com/store/books/details?id=sIklEAAAQBAJ'
    },
    layerInfo: {
      layers: [
        {
          layerId: 'geo',
          volumeAnnotationsVersion: '8'
        }
      ]
    },
    userInfo: {
      updated: '2023-12-01T14:05:34.003Z'
    },
    saleInfo: {
      country: 'BR',
      saleability: 'FOR_SALE',
      isEbook: true,
      listPrice: {
        amount: 7.48,
        currencyCode: 'BRL'
      },
      retailPrice: {
        amount: 7.11,
        currencyCode: 'BRL'
      },
      buyLink:
        'https://play.google.com/store/books/details?id=sIklEAAAQBAJ&rdid=book-sIklEAAAQBAJ&rdot=1&source=gbs_api',
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 7480000,
            currencyCode: 'BRL'
          },
          retailPrice: {
            amountInMicros: 7110000,
            currencyCode: 'BRL'
          },
          giftable: true
        }
      ]
    },
    accessInfo: {
      country: 'BR',
      viewability: 'PARTIAL',
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.br/books/download/O_Deus_que_destr%C3%B3i_sonhos-sample-epub.acsm?id=sIklEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
      },
      pdf: {
        isAvailable: false
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=sIklEAAAQBAJ&hl=&source=gbs_api',
      accessViewStatus: 'SAMPLE',
      quoteSharingAllowed: false
    }
  },
  {
    kind: 'books#volume',
    id: 'EFlXEAAAQBAJ',
    etag: 'wysLoqCQPA8',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/EFlXEAAAQBAJ',
    volumeInfo: {
      title: 'Frankenstein',
      subtitle: 'ou o Prometeu Moderno',
      authors: ['Mary Shelley'],
      publisher: 'Pandorga Editora',
      publishedDate: '2022-02-07',
      description:
        'PREPARADOS PARA LIDAR COM AS CONSEQUÊNCIAS DE SUA ARRISCADA CRIAÇÃO. FRANKENSTEIN é um clássico do romantismo inglês do século XIX que retrata, entre outros aspectos, a vida do cientista Victor Frankenstein, ávido por descobrir os segredos da ...',
      industryIdentifiers: [
        {
          type: 'ISBN_13',
          identifier: '9786555791419'
        },
        {
          type: 'ISBN_10',
          identifier: '6555791411'
        }
      ],
      readingModes: {
        text: true,
        image: true
      },
      pageCount: 308,
      printType: 'BOOK',
      categories: ['Art'],
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: false,
      contentVersion: '1.4.4.0.preview.3',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=EFlXEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=EFlXEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      previewLink:
        'http://books.google.com.br/books?id=EFlXEAAAQBAJ&printsec=frontcover&hl=&source=gbs_api',
      infoLink:
        'https://play.google.com/store/books/details?id=EFlXEAAAQBAJ&source=gbs_api',
      canonicalVolumeLink:
        'https://play.google.com/store/books/details?id=EFlXEAAAQBAJ'
    },
    layerInfo: {
      layers: [
        {
          layerId: 'geo',
          volumeAnnotationsVersion: '4'
        }
      ]
    },
    userInfo: {
      updated: '2023-11-29T15:04:36.835Z'
    },
    saleInfo: {
      country: 'BR',
      saleability: 'FOR_SALE',
      isEbook: true,
      listPrice: {
        amount: 19.9,
        currencyCode: 'BRL'
      },
      retailPrice: {
        amount: 19.9,
        currencyCode: 'BRL'
      },
      buyLink:
        'https://play.google.com/store/books/details?id=EFlXEAAAQBAJ&rdid=book-EFlXEAAAQBAJ&rdot=1&source=gbs_api',
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 19900000,
            currencyCode: 'BRL'
          },
          retailPrice: {
            amountInMicros: 19900000,
            currencyCode: 'BRL'
          },
          giftable: true
        }
      ]
    },
    accessInfo: {
      country: 'BR',
      viewability: 'PARTIAL',
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.br/books/download/Frankenstein-sample-epub.acsm?id=EFlXEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
      },
      pdf: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.br/books/download/Frankenstein-sample-pdf.acsm?id=EFlXEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=EFlXEAAAQBAJ&hl=&source=gbs_api',
      accessViewStatus: 'SAMPLE',
      quoteSharingAllowed: false
    }
  },
  {
    kind: 'books#volume',
    id: 'KmqtDwAAQBAJ',
    etag: 'lSiyZszrX8s',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/KmqtDwAAQBAJ',
    volumeInfo: {
      title: 'O pequeno príncipe',
      authors: ['Antoine de Saint-Exupéry', 'Victor Maia'],
      publisher: 'Mauad Editora Ltda',
      publishedDate: '2019-09-05',
      description:
        'Com enorme prazer a Mauad X traz ao público toda a magia e encantamento de O Pequeno Príncipe, de Antoine de Saint-Exupéry, um dos livros mais traduzidos de todo o mundo, que vem atraindo milhões de crianças e adultos desde sua primeira ...',
      industryIdentifiers: [
        {
          type: 'ISBN_13',
          identifier: '9788530400224'
        },
        {
          type: 'ISBN_10',
          identifier: '8530400224'
        }
      ],
      readingModes: {
        text: false,
        image: true
      },
      pageCount: 112,
      printType: 'BOOK',
      categories: ['Juvenile Fiction'],
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: true,
      contentVersion: '0.0.1.0.preview.1',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=KmqtDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=KmqtDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      previewLink:
        'http://books.google.com.br/books?id=KmqtDwAAQBAJ&printsec=frontcover&hl=&source=gbs_api',
      infoLink:
        'https://play.google.com/store/books/details?id=KmqtDwAAQBAJ&source=gbs_api',
      canonicalVolumeLink:
        'https://play.google.com/store/books/details?id=KmqtDwAAQBAJ'
    },
    userInfo: {
      updated: '2023-12-14T12:05:19.279Z'
    },
    saleInfo: {
      country: 'BR',
      saleability: 'FOR_SALE',
      isEbook: true,
      listPrice: {
        amount: 9.9,
        currencyCode: 'BRL'
      },
      retailPrice: {
        amount: 9.9,
        currencyCode: 'BRL'
      },
      buyLink:
        'https://play.google.com/store/books/details?id=KmqtDwAAQBAJ&rdid=book-KmqtDwAAQBAJ&rdot=1&source=gbs_api',
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 9900000,
            currencyCode: 'BRL'
          },
          retailPrice: {
            amountInMicros: 9900000,
            currencyCode: 'BRL'
          },
          giftable: true
        }
      ]
    },
    accessInfo: {
      country: 'BR',
      viewability: 'PARTIAL',
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: false
      },
      pdf: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.br/books/download/O_pequeno_pr%C3%ADncipe-sample-pdf.acsm?id=KmqtDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=KmqtDwAAQBAJ&hl=&source=gbs_api',
      accessViewStatus: 'SAMPLE',
      quoteSharingAllowed: false
    }
  },
  {
    kind: 'books#volume',
    id: '10qIEAAAQBAJ',
    etag: 'GopW7vZS77w',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/10qIEAAAQBAJ',
    volumeInfo: {
      title: 'É assim que começa (Vol. 2 É assim que acaba)',
      authors: ['Colleen Hoover'],
      publisher: 'Galera',
      publishedDate: '2022-10-18',
      description:
        'Preparem os corações. Lily e Atlas estão de volta na aguardada sequência de É assim que acaba. É assim que começa chega para consagrar novamente Colleen Hoover como a autora mais vendida do Brasil. Colleen é um fenômeno editorial, acumulando não ...',
      industryIdentifiers: [
        {
          type: 'ISBN_13',
          identifier: '9786559812219'
        },
        {
          type: 'ISBN_10',
          identifier: '6559812219'
        }
      ],
      readingModes: {
        text: true,
        image: true
      },
      pageCount: 332,
      printType: 'BOOK',
      categories: ['Young Adult Fiction'],
      averageRating: 5,
      ratingsCount: 2,
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: true,
      contentVersion: '2.2.2.0.preview.3',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=10qIEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=10qIEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      previewLink:
        'http://books.google.com.br/books?id=10qIEAAAQBAJ&printsec=frontcover&hl=&source=gbs_api',
      infoLink:
        'https://play.google.com/store/books/details?id=10qIEAAAQBAJ&source=gbs_api',
      canonicalVolumeLink:
        'https://play.google.com/store/books/details?id=10qIEAAAQBAJ'
    },
    layerInfo: {
      layers: [
        {
          layerId: 'geo',
          volumeAnnotationsVersion: '1'
        }
      ]
    },
    userInfo: {
      updated: '2023-12-14T14:17:56.221Z'
    },
    saleInfo: {
      country: 'BR',
      saleability: 'FOR_SALE',
      isEbook: true,
      listPrice: {
        amount: 34.9,
        currencyCode: 'BRL'
      },
      retailPrice: {
        amount: 34.9,
        currencyCode: 'BRL'
      },
      buyLink:
        'https://play.google.com/store/books/details?id=10qIEAAAQBAJ&rdid=book-10qIEAAAQBAJ&rdot=1&source=gbs_api',
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 34900000,
            currencyCode: 'BRL'
          },
          retailPrice: {
            amountInMicros: 34900000,
            currencyCode: 'BRL'
          },
          giftable: true
        }
      ]
    },
    accessInfo: {
      country: 'BR',
      viewability: 'PARTIAL',
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.br/books/download/%C3%89_assim_que_come%C3%A7a_Vol_2_%C3%89_assim_que-sample-epub.acsm?id=10qIEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
      },
      pdf: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.br/books/download/%C3%89_assim_que_come%C3%A7a_Vol_2_%C3%89_assim_que-sample-pdf.acsm?id=10qIEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=10qIEAAAQBAJ&hl=&source=gbs_api',
      accessViewStatus: 'SAMPLE',
      quoteSharingAllowed: false
    }
  },
  {
    kind: 'books#volume',
    id: '-XqUEAAAQBAJ',
    etag: 'rz/lxL5TJdA',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/-XqUEAAAQBAJ',
    volumeInfo: {
      title: 'A cidade do sol',
      authors: ['Khaled Hosseini'],
      publisher: 'Globo Livros',
      publishedDate: '2022-10-07',
      description:
        'A emocionante história de duas mulheres afegãs separadas pelas diferenças culturais e unidas pela busca desesperada pela sobrevivência Com um enredo envolvente e que discute questões políticas e sociais importantes para atualidade, A cidade do ...',
      industryIdentifiers: [
        {
          type: 'ISBN_13',
          identifier: '9786559871025'
        },
        {
          type: 'ISBN_10',
          identifier: '6559871029'
        }
      ],
      readingModes: {
        text: true,
        image: true
      },
      pageCount: 410,
      printType: 'BOOK',
      categories: ['Fiction'],
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: false,
      contentVersion: '1.1.1.0.preview.3',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=-XqUEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=-XqUEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      previewLink:
        'http://books.google.com.br/books?id=-XqUEAAAQBAJ&printsec=frontcover&hl=&source=gbs_api',
      infoLink:
        'https://play.google.com/store/books/details?id=-XqUEAAAQBAJ&source=gbs_api',
      canonicalVolumeLink:
        'https://play.google.com/store/books/details?id=-XqUEAAAQBAJ'
    },
    layerInfo: {
      layers: [
        {
          layerId: 'geo',
          volumeAnnotationsVersion: '3'
        }
      ]
    },
    userInfo: {
      updated: '2023-12-14T13:24:14.883Z'
    },
    saleInfo: {
      country: 'BR',
      saleability: 'FOR_SALE',
      isEbook: true,
      listPrice: {
        amount: 39.9,
        currencyCode: 'BRL'
      },
      retailPrice: {
        amount: 39.9,
        currencyCode: 'BRL'
      },
      buyLink:
        'https://play.google.com/store/books/details?id=-XqUEAAAQBAJ&rdid=book--XqUEAAAQBAJ&rdot=1&source=gbs_api',
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 39900000,
            currencyCode: 'BRL'
          },
          retailPrice: {
            amountInMicros: 39900000,
            currencyCode: 'BRL'
          },
          giftable: true
        }
      ]
    },
    accessInfo: {
      country: 'BR',
      viewability: 'PARTIAL',
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.br/books/download/A_cidade_do_sol-sample-epub.acsm?id=-XqUEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
      },
      pdf: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.br/books/download/A_cidade_do_sol-sample-pdf.acsm?id=-XqUEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=-XqUEAAAQBAJ&hl=&source=gbs_api',
      accessViewStatus: 'SAMPLE',
      quoteSharingAllowed: false
    }
  },
  {
    kind: 'books#volume',
    id: 'ud06EAAAQBAJ',
    etag: '5VwvYvL76TI',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/ud06EAAAQBAJ',
    volumeInfo: {
      title: 'A Biblioteca da Meia-Noite',
      authors: ['Matt Haig'],
      publisher: 'Editora Bertrand Brasil',
      publishedDate: '2021-09-20',
      description:
        'A Biblioteca da Meia-Noite é um romance incrível que fala dos infinitos rumos que a vida pode tomar e da busca incessante pelo rumo certo. Aos 35 anos, Nora Seed é uma mulher cheia de talentos e poucas conquistas. Arrependida das escolhas que fez ...',
      industryIdentifiers: [
        {
          type: 'ISBN_13',
          identifier: '9786558380634'
        },
        {
          type: 'ISBN_10',
          identifier: '6558380633'
        }
      ],
      readingModes: {
        text: true,
        image: false
      },
      pageCount: 363,
      printType: 'BOOK',
      categories: ['Fiction'],
      averageRating: 5,
      ratingsCount: 1,
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: true,
      contentVersion: '1.7.8.0.preview.2',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=ud06EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=ud06EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      previewLink:
        'http://books.google.com.br/books?id=ud06EAAAQBAJ&printsec=frontcover&hl=&source=gbs_api',
      infoLink:
        'https://play.google.com/store/books/details?id=ud06EAAAQBAJ&source=gbs_api',
      canonicalVolumeLink:
        'https://play.google.com/store/books/details?id=ud06EAAAQBAJ'
    },
    layerInfo: {
      layers: [
        {
          layerId: 'geo',
          volumeAnnotationsVersion: '8'
        }
      ]
    },
    userInfo: {
      updated: '2023-12-13T10:59:27.213Z'
    },
    saleInfo: {
      country: 'BR',
      saleability: 'FOR_SALE',
      isEbook: true,
      listPrice: {
        amount: 31.9,
        currencyCode: 'BRL'
      },
      retailPrice: {
        amount: 31.9,
        currencyCode: 'BRL'
      },
      buyLink:
        'https://play.google.com/store/books/details?id=ud06EAAAQBAJ&rdid=book-ud06EAAAQBAJ&rdot=1&source=gbs_api',
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 31900000,
            currencyCode: 'BRL'
          },
          retailPrice: {
            amountInMicros: 31900000,
            currencyCode: 'BRL'
          },
          giftable: true
        }
      ]
    },
    accessInfo: {
      country: 'BR',
      viewability: 'PARTIAL',
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.br/books/download/A_Biblioteca_da_Meia_Noite-sample-epub.acsm?id=ud06EAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
      },
      pdf: {
        isAvailable: false
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=ud06EAAAQBAJ&hl=&source=gbs_api',
      accessViewStatus: 'SAMPLE',
      quoteSharingAllowed: false
    }
  },
  {
    kind: 'books#volume',
    id: 'CA4lrDI9eVYC',
    etag: 'fOStenJzSis',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/CA4lrDI9eVYC',
    volumeInfo: {
      title: 'Assassinato na Biblioteca',
      authors: ['Helena Gomes'],
      publisher: 'Editora Rocco',
      publishedDate: '2008-01-01',
      description:
        'Novo na cidade, sem conseguir aceitar a morte do pai e o novo casamento da mãe, Igor é o típico adolescente-problema. Em casa, vive trancado no quarto; na escola, tem dificuldade para se integrar com os colegas e passa a maior parte do tempo ...',
      industryIdentifiers: [
        {
          type: 'ISBN_13',
          identifier: '9788581220284'
        },
        {
          type: 'ISBN_10',
          identifier: '8581220282'
        }
      ],
      readingModes: {
        text: true,
        image: true
      },
      pageCount: 256,
      printType: 'BOOK',
      categories: ['Juvenile Fiction'],
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: true,
      contentVersion: '1.17.16.0.preview.3',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=CA4lrDI9eVYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=CA4lrDI9eVYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      previewLink:
        'http://books.google.com.br/books?id=CA4lrDI9eVYC&printsec=frontcover&hl=&source=gbs_api',
      infoLink:
        'https://play.google.com/store/books/details?id=CA4lrDI9eVYC&source=gbs_api',
      canonicalVolumeLink:
        'https://play.google.com/store/books/details?id=CA4lrDI9eVYC'
    },
    layerInfo: {
      layers: [
        {
          layerId: 'geo',
          volumeAnnotationsVersion: '12'
        }
      ]
    },
    userInfo: {
      updated: '2023-12-07T15:10:59.303Z'
    },
    saleInfo: {
      country: 'BR',
      saleability: 'FOR_SALE',
      isEbook: true,
      listPrice: {
        amount: 25.9,
        currencyCode: 'BRL'
      },
      retailPrice: {
        amount: 24.6,
        currencyCode: 'BRL'
      },
      buyLink:
        'https://play.google.com/store/books/details?id=CA4lrDI9eVYC&rdid=book-CA4lrDI9eVYC&rdot=1&source=gbs_api',
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 25900000,
            currencyCode: 'BRL'
          },
          retailPrice: {
            amountInMicros: 24600000,
            currencyCode: 'BRL'
          },
          giftable: true
        }
      ]
    },
    accessInfo: {
      country: 'BR',
      viewability: 'PARTIAL',
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.br/books/download/Assassinato_na_Biblioteca-sample-epub.acsm?id=CA4lrDI9eVYC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
      },
      pdf: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.br/books/download/Assassinato_na_Biblioteca-sample-pdf.acsm?id=CA4lrDI9eVYC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=CA4lrDI9eVYC&hl=&source=gbs_api',
      accessViewStatus: 'SAMPLE',
      quoteSharingAllowed: false
    }
  },
  {
    kind: 'books#volume',
    id: '9QVyBAAAQBAJ',
    etag: 'v+m+smkIeF4',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/9QVyBAAAQBAJ',
    volumeInfo: {
      title: 'Quem é você, Alasca?',
      subtitle: 'Edição comemorativa de 10 anos',
      authors: ['John Green'],
      publisher: 'Editora Intrinseca',
      publishedDate: '2014-09-09',
      description:
        'Miles Halter estava em busca de um Grande Talvez. Alasca Young queria saber como sair do labirinto. Suas vidas se colidiram na Escola Culver Creek, e nada nunca mais foi o mesmo. Mas antes, um breve resumo de como tudo aconteceu: Miles Halter ...',
      industryIdentifiers: [
        {
          type: 'ISBN_13',
          identifier: '9788580576009'
        },
        {
          type: 'ISBN_10',
          identifier: '8580576008'
        }
      ],
      readingModes: {
        text: true,
        image: true
      },
      pageCount: 331,
      printType: 'BOOK',
      categories: ['Young Adult Fiction'],
      averageRating: 5,
      ratingsCount: 3,
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: true,
      contentVersion: '1.17.18.0.preview.3',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=9QVyBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=9QVyBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      previewLink:
        'http://books.google.com.br/books?id=9QVyBAAAQBAJ&printsec=frontcover&hl=&source=gbs_api',
      infoLink:
        'https://play.google.com/store/books/details?id=9QVyBAAAQBAJ&source=gbs_api',
      canonicalVolumeLink:
        'https://play.google.com/store/books/details?id=9QVyBAAAQBAJ'
    },
    layerInfo: {
      layers: [
        {
          layerId: 'geo',
          volumeAnnotationsVersion: '20'
        }
      ]
    },
    userInfo: {
      updated: '2023-12-07T15:10:31.243Z'
    },
    saleInfo: {
      country: 'BR',
      saleability: 'FOR_SALE',
      isEbook: true,
      listPrice: {
        amount: 39.9,
        currencyCode: 'BRL'
      },
      retailPrice: {
        amount: 35.91,
        currencyCode: 'BRL'
      },
      buyLink:
        'https://play.google.com/store/books/details?id=9QVyBAAAQBAJ&rdid=book-9QVyBAAAQBAJ&rdot=1&source=gbs_api',
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 39900000,
            currencyCode: 'BRL'
          },
          retailPrice: {
            amountInMicros: 35910000,
            currencyCode: 'BRL'
          },
          giftable: true
        }
      ]
    },
    accessInfo: {
      country: 'BR',
      viewability: 'PARTIAL',
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.br/books/download/Quem_%C3%A9_voc%C3%AA_Alasca-sample-epub.acsm?id=9QVyBAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
      },
      pdf: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.br/books/download/Quem_%C3%A9_voc%C3%AA_Alasca-sample-pdf.acsm?id=9QVyBAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=9QVyBAAAQBAJ&hl=&source=gbs_api',
      accessViewStatus: 'SAMPLE',
      quoteSharingAllowed: false
    }
  },
  {
    kind: 'books#volume',
    id: '8k1yDwAAQBAJ',
    etag: 'C+Ihr4YucXc',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/8k1yDwAAQBAJ',
    volumeInfo: {
      title: 'Your name.',
      authors: ['Makoto Shinkai'],
      publisher: 'Verus Editora',
      publishedDate: '2018-10-15',
      description:
        'O romance do anime com maior sucesso de bilheteria de todos os tempos. Mitsuha é uma estudante que vive em uma pequena cidade nas montanhas. Apesar de sua vida tranquila, ela sempre se sentiu atraída pelo cotidiano das grandes cidades. Um dia ...',
      industryIdentifiers: [
        {
          type: 'ISBN_13',
          identifier: '9788576867395'
        },
        {
          type: 'ISBN_10',
          identifier: '8576867397'
        }
      ],
      readingModes: {
        text: true,
        image: true
      },
      pageCount: 192,
      printType: 'BOOK',
      categories: ['Juvenile Fiction'],
      averageRating: 4,
      ratingsCount: 3,
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: true,
      contentVersion: '1.5.4.0.preview.3',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=8k1yDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=8k1yDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      previewLink:
        'http://books.google.com.br/books?id=8k1yDwAAQBAJ&printsec=frontcover&hl=&source=gbs_api',
      infoLink:
        'https://play.google.com/store/books/details?id=8k1yDwAAQBAJ&source=gbs_api',
      canonicalVolumeLink:
        'https://play.google.com/store/books/details?id=8k1yDwAAQBAJ'
    },
    layerInfo: {
      layers: [
        {
          layerId: 'geo',
          volumeAnnotationsVersion: '6'
        }
      ]
    },
    userInfo: {
      updated: '2023-12-07T15:09:23.599Z'
    },
    saleInfo: {
      country: 'BR',
      saleability: 'FOR_SALE',
      isEbook: true,
      listPrice: {
        amount: 29.9,
        currencyCode: 'BRL'
      },
      retailPrice: {
        amount: 29.9,
        currencyCode: 'BRL'
      },
      buyLink:
        'https://play.google.com/store/books/details?id=8k1yDwAAQBAJ&rdid=book-8k1yDwAAQBAJ&rdot=1&source=gbs_api',
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 29900000,
            currencyCode: 'BRL'
          },
          retailPrice: {
            amountInMicros: 29900000,
            currencyCode: 'BRL'
          },
          giftable: true
        }
      ]
    },
    accessInfo: {
      country: 'BR',
      viewability: 'PARTIAL',
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.br/books/download/Your_name-sample-epub.acsm?id=8k1yDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
      },
      pdf: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.br/books/download/Your_name-sample-pdf.acsm?id=8k1yDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=8k1yDwAAQBAJ&hl=&source=gbs_api',
      accessViewStatus: 'SAMPLE',
      quoteSharingAllowed: false
    }
  },
  {
    kind: 'books#volume',
    id: 'b9UnEAAAQBAJ',
    etag: 'j+gxaClOsvY',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/b9UnEAAAQBAJ',
    volumeInfo: {
      title: 'O diário de Anne Frank',
      authors: ['Anne Frank'],
      publisher: 'Viseu',
      publishedDate: '2021-04-07',
      description:
        'O diário de Anne Frank expande oferece uma visão completa e precisa da terrível odisseia vivida durante a Segunda Guerra Mundial pela família Frank. Um testemunho único sobre o horror e a barbárie nazista, e sobre os sentimentos e experiências ...',
      industryIdentifiers: [
        {
          type: 'ISBN_13',
          identifier: '9786556748030'
        },
        {
          type: 'ISBN_10',
          identifier: '655674803X'
        }
      ],
      readingModes: {
        text: true,
        image: true
      },
      pageCount: 435,
      printType: 'BOOK',
      categories: ['Biography & Autobiography'],
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: true,
      contentVersion: '0.4.3.0.preview.3',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=b9UnEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=b9UnEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      previewLink:
        'http://books.google.com.br/books?id=b9UnEAAAQBAJ&printsec=frontcover&hl=&source=gbs_api',
      infoLink:
        'https://play.google.com/store/books/details?id=b9UnEAAAQBAJ&source=gbs_api',
      canonicalVolumeLink:
        'https://play.google.com/store/books/details?id=b9UnEAAAQBAJ'
    },
    layerInfo: {
      layers: [
        {
          layerId: 'geo',
          volumeAnnotationsVersion: '5'
        }
      ]
    },
    userInfo: {
      updated: '2023-12-07T15:08:44.545Z'
    },
    saleInfo: {
      country: 'BR',
      saleability: 'FOR_SALE',
      isEbook: true,
      listPrice: {
        amount: 11.01,
        currencyCode: 'BRL'
      },
      retailPrice: {
        amount: 11.01,
        currencyCode: 'BRL'
      },
      buyLink:
        'https://play.google.com/store/books/details?id=b9UnEAAAQBAJ&rdid=book-b9UnEAAAQBAJ&rdot=1&source=gbs_api',
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 11010000,
            currencyCode: 'BRL'
          },
          retailPrice: {
            amountInMicros: 11010000,
            currencyCode: 'BRL'
          },
          giftable: true
        }
      ]
    },
    accessInfo: {
      country: 'BR',
      viewability: 'PARTIAL',
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.br/books/download/O_di%C3%A1rio_de_Anne_Frank-sample-epub.acsm?id=b9UnEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
      },
      pdf: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.br/books/download/O_di%C3%A1rio_de_Anne_Frank-sample-pdf.acsm?id=b9UnEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=b9UnEAAAQBAJ&hl=&source=gbs_api',
      accessViewStatus: 'SAMPLE',
      quoteSharingAllowed: false
    }
  },
  {
    kind: 'books#volume',
    id: '-_MMbijUmTEC',
    etag: 'IEqeEv/pxbc',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/-_MMbijUmTEC',
    volumeInfo: {
      title: 'A menina que roubava livros',
      authors: ['Markus Zusak'],
      publisher: 'Editora Intrinseca',
      publishedDate: '2012-11-13',
      description:
        'A trajetória de Liesel Meminger é contada por uma narradora mórbida, surpreendentemente simpática. Ao perceber que a pequena ladra de livros lhe escapa, a Morte afeiçoa-se à menina e rastreia suas pegadas de 1939 a 1943. Traços de uma ...',
      industryIdentifiers: [
        {
          type: 'ISBN_13',
          identifier: '9788580570182'
        },
        {
          type: 'ISBN_10',
          identifier: '8580570182'
        }
      ],
      readingModes: {
        text: true,
        image: true
      },
      pageCount: 558,
      printType: 'BOOK',
      categories: ['Fiction'],
      averageRating: 5,
      ratingsCount: 8,
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: true,
      contentVersion: '1.19.22.0.preview.3',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=-_MMbijUmTEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=-_MMbijUmTEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      previewLink:
        'http://books.google.com.br/books?id=-_MMbijUmTEC&printsec=frontcover&hl=&source=gbs_api',
      infoLink:
        'https://play.google.com/store/books/details?id=-_MMbijUmTEC&source=gbs_api',
      canonicalVolumeLink:
        'https://play.google.com/store/books/details?id=-_MMbijUmTEC'
    },
    layerInfo: {
      layers: [
        {
          layerId: 'geo',
          volumeAnnotationsVersion: '24'
        }
      ]
    },
    userInfo: {
      updated: '2023-12-07T15:08:25.014Z'
    },
    saleInfo: {
      country: 'BR',
      saleability: 'FOR_SALE',
      isEbook: true,
      listPrice: {
        amount: 46.9,
        currencyCode: 'BRL'
      },
      retailPrice: {
        amount: 42.21,
        currencyCode: 'BRL'
      },
      buyLink:
        'https://play.google.com/store/books/details?id=-_MMbijUmTEC&rdid=book--_MMbijUmTEC&rdot=1&source=gbs_api',
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 46900000,
            currencyCode: 'BRL'
          },
          retailPrice: {
            amountInMicros: 42210000,
            currencyCode: 'BRL'
          },
          giftable: true
        }
      ]
    },
    accessInfo: {
      country: 'BR',
      viewability: 'PARTIAL',
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.br/books/download/A_menina_que_roubava_livros-sample-epub.acsm?id=-_MMbijUmTEC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
      },
      pdf: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.br/books/download/A_menina_que_roubava_livros-sample-pdf.acsm?id=-_MMbijUmTEC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=-_MMbijUmTEC&hl=&source=gbs_api',
      accessViewStatus: 'SAMPLE',
      quoteSharingAllowed: false
    }
  },
  {
    kind: 'books#volume',
    id: 'EAz5zwEACAAJ',
    etag: 'bi/LUtpYOpY',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/EAz5zwEACAAJ',
    volumeInfo: {
      title: 'O Colecionador',
      authors: ['John Fowles'],
      publishedDate: '2018-04-12',
      description:
        'O COLECIONADOR é a história de Frederick Clegg, um homem solitário, de origem humilde, menosprezado por uma sociedade esnobe, que encontra o grande amor de sua vida. Tudo o que ele deseja é passar um tempo a sós com ela, demonstrar seus nobres ...',
      industryIdentifiers: [
        {
          type: 'ISBN_10',
          identifier: '8594541082'
        },
        {
          type: 'ISBN_13',
          identifier: '9788594541086'
        }
      ],
      readingModes: {
        text: false,
        image: false
      },
      pageCount: 0,
      printType: 'BOOK',
      categories: ['Fiction'],
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: false,
      contentVersion: 'preview-1.0.0',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      previewLink:
        'http://books.google.com.br/books?id=EAz5zwEACAAJ&hl=&source=gbs_api',
      infoLink:
        'http://books.google.com.br/books?id=EAz5zwEACAAJ&hl=&source=gbs_api',
      canonicalVolumeLink:
        'https://books.google.com/books/about/O_Colecionador.html?hl=&id=EAz5zwEACAAJ'
    },
    userInfo: {
      updated: '2023-12-07T15:08:08.385Z'
    },
    saleInfo: {
      country: 'BR',
      saleability: 'NOT_FOR_SALE',
      isEbook: false
    },
    accessInfo: {
      country: 'BR',
      viewability: 'NO_PAGES',
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: false
      },
      pdf: {
        isAvailable: false
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=EAz5zwEACAAJ&hl=&source=gbs_api',
      accessViewStatus: 'NONE',
      quoteSharingAllowed: false
    }
  },
  {
    kind: 'books#volume',
    id: '7aVyDwAAQBAJ',
    etag: '/HxXFehYIYo',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/7aVyDwAAQBAJ',
    volumeInfo: {
      title: 'Eu e Esse Meu Coração',
      authors: ['C. C. Hunter'],
      publisher: 'Editora Jangada',
      publishedDate: '2018-10-15',
      description:
        'Leah MacKenzie, de 17 anos, não tem coração. O que a mantém viva é um coração artificial que ela carrega dentro de uma mochila. Com seu tipo sanguíneo raro, um transplante é como um sonho distante. Conformada, ela tenta se esquecer de que está ...',
      industryIdentifiers: [
        {
          type: 'ISBN_13',
          identifier: '9788555391262'
        },
        {
          type: 'ISBN_10',
          identifier: '8555391261'
        }
      ],
      readingModes: {
        text: true,
        image: false
      },
      pageCount: 462,
      printType: 'BOOK',
      categories: ['Fiction'],
      averageRating: 4,
      ratingsCount: 2,
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: true,
      contentVersion: '1.10.8.0.preview.2',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=7aVyDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=7aVyDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      previewLink:
        'http://books.google.com.br/books?id=7aVyDwAAQBAJ&printsec=frontcover&hl=&source=gbs_api',
      infoLink:
        'https://play.google.com/store/books/details?id=7aVyDwAAQBAJ&source=gbs_api',
      canonicalVolumeLink:
        'https://play.google.com/store/books/details?id=7aVyDwAAQBAJ'
    },
    layerInfo: {
      layers: [
        {
          layerId: 'geo',
          volumeAnnotationsVersion: '12'
        }
      ]
    },
    userInfo: {
      updated: '2023-12-07T15:06:26.098Z'
    },
    saleInfo: {
      country: 'BR',
      saleability: 'FOR_SALE',
      isEbook: true,
      listPrice: {
        amount: 39.8,
        currencyCode: 'BRL'
      },
      retailPrice: {
        amount: 39.8,
        currencyCode: 'BRL'
      },
      buyLink:
        'https://play.google.com/store/books/details?id=7aVyDwAAQBAJ&rdid=book-7aVyDwAAQBAJ&rdot=1&source=gbs_api',
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 39800000,
            currencyCode: 'BRL'
          },
          retailPrice: {
            amountInMicros: 39800000,
            currencyCode: 'BRL'
          },
          giftable: true
        }
      ]
    },
    accessInfo: {
      country: 'BR',
      viewability: 'PARTIAL',
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.br/books/download/Eu_e_Esse_Meu_Cora%C3%A7%C3%A3o-sample-epub.acsm?id=7aVyDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
      },
      pdf: {
        isAvailable: false
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=7aVyDwAAQBAJ&hl=&source=gbs_api',
      accessViewStatus: 'SAMPLE',
      quoteSharingAllowed: false
    }
  },
  {
    kind: 'books#volume',
    id: '2LeZDwAAQBAJ',
    etag: 'yzi1Q+Elz6M',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/2LeZDwAAQBAJ',
    volumeInfo: {
      title: 'O Hobbit',
      authors: ['J.R.R. Tolkien'],
      publisher: 'HarperCollins Brasil',
      publishedDate: '2019-07-15',
      description:
        'Edição com mapas, capa dura, fitilho, as ilustrações originais de J.R.R. Tolkien e um pôster de Valfenda exclusivo! Bilbo Bolseiro era um dos mais respeitáveis hobbits de todo o Condado até que, um dia, o mago Gandalf bate à sua porta. A partir ...',
      industryIdentifiers: [
        {
          type: 'ISBN_13',
          identifier: '9788595085800'
        },
        {
          type: 'ISBN_10',
          identifier: '8595085803'
        }
      ],
      readingModes: {
        text: true,
        image: false
      },
      pageCount: 350,
      printType: 'BOOK',
      categories: ['Fiction'],
      averageRating: 5,
      ratingsCount: 1,
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: true,
      contentVersion: '1.12.13.0.preview.2',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=2LeZDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=2LeZDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      previewLink:
        'http://books.google.com.br/books?id=2LeZDwAAQBAJ&printsec=frontcover&hl=&source=gbs_api',
      infoLink:
        'https://play.google.com/store/books/details?id=2LeZDwAAQBAJ&source=gbs_api',
      canonicalVolumeLink:
        'https://play.google.com/store/books/details?id=2LeZDwAAQBAJ'
    },
    layerInfo: {
      layers: [
        {
          layerId: 'geo',
          volumeAnnotationsVersion: '13'
        }
      ]
    },
    userInfo: {
      updated: '2023-12-07T15:06:09.391Z'
    },
    saleInfo: {
      country: 'BR',
      saleability: 'FOR_SALE',
      isEbook: true,
      listPrice: {
        amount: 17.96,
        currencyCode: 'BRL'
      },
      retailPrice: {
        amount: 17.06,
        currencyCode: 'BRL'
      },
      buyLink:
        'https://play.google.com/store/books/details?id=2LeZDwAAQBAJ&rdid=book-2LeZDwAAQBAJ&rdot=1&source=gbs_api',
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 17960000,
            currencyCode: 'BRL'
          },
          retailPrice: {
            amountInMicros: 17060000,
            currencyCode: 'BRL'
          },
          giftable: true
        }
      ]
    },
    accessInfo: {
      country: 'BR',
      viewability: 'PARTIAL',
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.br/books/download/O_Hobbit-sample-epub.acsm?id=2LeZDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
      },
      pdf: {
        isAvailable: false
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=2LeZDwAAQBAJ&hl=&source=gbs_api',
      accessViewStatus: 'SAMPLE',
      quoteSharingAllowed: false
    }
  },
  {
    kind: 'books#volume',
    id: 'F2MTgBpMt5MC',
    etag: 'DEnpiqM6yCw',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/F2MTgBpMt5MC',
    volumeInfo: {
      title: 'O teorema Katherine',
      authors: ['John Green'],
      publisher: 'Editora Intrinseca',
      publishedDate: '2013-03-13',
      description:
        'Se o assunto é relacionamento, o tipo de garota de Colin Singleton tem nome: Katherine. E, em se tratando de Colin e Katherines, o desfecho é sempre o mesmo: ele leva o fora. Já aconteceu muito. Dezenove vezes, para ser exato. Após o mais recente ...',
      industryIdentifiers: [
        {
          type: 'ISBN_13',
          identifier: '9788580573169'
        },
        {
          type: 'ISBN_10',
          identifier: '8580573165'
        }
      ],
      readingModes: {
        text: true,
        image: true
      },
      pageCount: 254,
      printType: 'BOOK',
      categories: ['Young Adult Fiction'],
      averageRating: 4.5,
      ratingsCount: 3,
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: true,
      contentVersion: '0.13.14.0.preview.3',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=F2MTgBpMt5MC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=F2MTgBpMt5MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      previewLink:
        'http://books.google.com.br/books?id=F2MTgBpMt5MC&printsec=frontcover&hl=&source=gbs_api',
      infoLink:
        'https://play.google.com/store/books/details?id=F2MTgBpMt5MC&source=gbs_api',
      canonicalVolumeLink:
        'https://play.google.com/store/books/details?id=F2MTgBpMt5MC'
    },
    layerInfo: {
      layers: [
        {
          layerId: 'geo',
          volumeAnnotationsVersion: '23'
        }
      ]
    },
    userInfo: {
      updated: '2023-12-07T15:05:55.230Z'
    },
    saleInfo: {
      country: 'BR',
      saleability: 'FOR_SALE',
      isEbook: true,
      listPrice: {
        amount: 39.9,
        currencyCode: 'BRL'
      },
      retailPrice: {
        amount: 35.91,
        currencyCode: 'BRL'
      },
      buyLink:
        'https://play.google.com/store/books/details?id=F2MTgBpMt5MC&rdid=book-F2MTgBpMt5MC&rdot=1&source=gbs_api',
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 39900000,
            currencyCode: 'BRL'
          },
          retailPrice: {
            amountInMicros: 35910000,
            currencyCode: 'BRL'
          },
          giftable: true
        }
      ]
    },
    accessInfo: {
      country: 'BR',
      viewability: 'PARTIAL',
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.br/books/download/O_teorema_Katherine-sample-epub.acsm?id=F2MTgBpMt5MC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
      },
      pdf: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.br/books/download/O_teorema_Katherine-sample-pdf.acsm?id=F2MTgBpMt5MC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=F2MTgBpMt5MC&hl=&source=gbs_api',
      accessViewStatus: 'SAMPLE',
      quoteSharingAllowed: false
    }
  },
  {
    kind: 'books#volume',
    id: 'AKJGDwAAQBAJ',
    etag: 'Mf5vaBWVTWw',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/AKJGDwAAQBAJ',
    volumeInfo: {
      title: 'É assim que acaba',
      authors: ['Colleen Hoover'],
      publisher: 'Editora Record',
      publishedDate: '2018-02-05',
      description:
        'Da autora das séries Slammed e Hopeless. Um romance sobre as escolhas corretas nas situações mais difíceis. As coisas não foram sempre fáceis para Lily, mas isso nunca a impediu de conquistar a vida tão sonhada. Ela percorreu um longo caminho ...',
      industryIdentifiers: [
        {
          type: 'ISBN_13',
          identifier: '9788501113498'
        },
        {
          type: 'ISBN_10',
          identifier: '8501113492'
        }
      ],
      readingModes: {
        text: true,
        image: true
      },
      pageCount: 374,
      printType: 'BOOK',
      categories: ['Fiction'],
      averageRating: 4.5,
      ratingsCount: 7,
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: true,
      contentVersion: '0.11.12.0.preview.3',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=AKJGDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=AKJGDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      previewLink:
        'http://books.google.com.br/books?id=AKJGDwAAQBAJ&printsec=frontcover&hl=&source=gbs_api',
      infoLink:
        'https://play.google.com/store/books/details?id=AKJGDwAAQBAJ&source=gbs_api',
      canonicalVolumeLink:
        'https://play.google.com/store/books/details?id=AKJGDwAAQBAJ'
    },
    layerInfo: {
      layers: [
        {
          layerId: 'geo',
          volumeAnnotationsVersion: '11'
        }
      ]
    },
    userInfo: {
      updated: '2023-12-07T15:05:36.406Z'
    },
    saleInfo: {
      country: 'BR',
      saleability: 'FOR_SALE',
      isEbook: true,
      listPrice: {
        amount: 37.9,
        currencyCode: 'BRL'
      },
      retailPrice: {
        amount: 37.9,
        currencyCode: 'BRL'
      },
      buyLink:
        'https://play.google.com/store/books/details?id=AKJGDwAAQBAJ&rdid=book-AKJGDwAAQBAJ&rdot=1&source=gbs_api',
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 37900000,
            currencyCode: 'BRL'
          },
          retailPrice: {
            amountInMicros: 37900000,
            currencyCode: 'BRL'
          },
          giftable: true
        }
      ]
    },
    accessInfo: {
      country: 'BR',
      viewability: 'PARTIAL',
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.br/books/download/%C3%89_assim_que_acaba-sample-epub.acsm?id=AKJGDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
      },
      pdf: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.br/books/download/%C3%89_assim_que_acaba-sample-pdf.acsm?id=AKJGDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=AKJGDwAAQBAJ&hl=&source=gbs_api',
      accessViewStatus: 'SAMPLE',
      quoteSharingAllowed: false
    }
  },
  {
    kind: 'books#volume',
    id: 'QB19ir2j2TMC',
    etag: 'QD4WQsmHAKY',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/QB19ir2j2TMC',
    volumeInfo: {
      title: 'Carrie, a estranha',
      authors: ['Stephen King'],
      publisher: 'Suma',
      publishedDate: '2007-01-11',
      description:
        'Até 1972, Stephen King ainda era um professor cujo salário mal dava para sustentar a mulher, Tabitha, e os dois filhos. Nas horas vagas, escrevia histórias de suspense, sempre rejeitadas pelas editoras. Foi então que finalizou mais uma obra. Em ...',
      industryIdentifiers: [
        {
          type: 'ISBN_13',
          identifier: '9788581051031'
        },
        {
          type: 'ISBN_10',
          identifier: '8581051030'
        }
      ],
      readingModes: {
        text: true,
        image: true
      },
      pageCount: 190,
      printType: 'BOOK',
      categories: ['Fiction'],
      averageRating: 5,
      ratingsCount: 1,
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: true,
      contentVersion: '2.23.25.0.preview.3',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=QB19ir2j2TMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=QB19ir2j2TMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      previewLink:
        'http://books.google.com.br/books?id=QB19ir2j2TMC&printsec=frontcover&hl=&source=gbs_api',
      infoLink:
        'https://play.google.com/store/books/details?id=QB19ir2j2TMC&source=gbs_api',
      canonicalVolumeLink:
        'https://play.google.com/store/books/details?id=QB19ir2j2TMC'
    },
    layerInfo: {
      layers: [
        {
          layerId: 'geo',
          volumeAnnotationsVersion: '31'
        }
      ]
    },
    userInfo: {
      updated: '2023-12-07T14:58:49.581Z'
    },
    saleInfo: {
      country: 'BR',
      saleability: 'FOR_SALE',
      isEbook: true,
      listPrice: {
        amount: 29.9,
        currencyCode: 'BRL'
      },
      retailPrice: {
        amount: 29.9,
        currencyCode: 'BRL'
      },
      buyLink:
        'https://play.google.com/store/books/details?id=QB19ir2j2TMC&rdid=book-QB19ir2j2TMC&rdot=1&source=gbs_api',
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 29900000,
            currencyCode: 'BRL'
          },
          retailPrice: {
            amountInMicros: 29900000,
            currencyCode: 'BRL'
          },
          giftable: true
        }
      ]
    },
    accessInfo: {
      country: 'BR',
      viewability: 'PARTIAL',
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.br/books/download/Carrie_a_estranha-sample-epub.acsm?id=QB19ir2j2TMC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
      },
      pdf: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.br/books/download/Carrie_a_estranha-sample-pdf.acsm?id=QB19ir2j2TMC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=QB19ir2j2TMC&hl=&source=gbs_api',
      accessViewStatus: 'SAMPLE',
      quoteSharingAllowed: false
    }
  },
  {
    kind: 'books#volume',
    id: 'yiUHBwAAQBAJ',
    etag: 'P8NBnsIS800',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/yiUHBwAAQBAJ',
    volumeInfo: {
      title: 'Escuridão total sem estrelas',
      authors: ['Stephen King'],
      publisher: 'Suma',
      publishedDate: '2015-03-09',
      description:
        'Na ausência da luz, o mundo assume formas sombrias, distorcidas, tenebrosas. Nesses quatro contos, Stephen King leva seus personagens a esses momentos de escuridão total, quando não existe nada — bom senso, piedade, justiça ou estrelas — para ...',
      industryIdentifiers: [
        {
          type: 'ISBN_13',
          identifier: '9788581052793'
        },
        {
          type: 'ISBN_10',
          identifier: '8581052797'
        }
      ],
      readingModes: {
        text: true,
        image: true
      },
      pageCount: 392,
      printType: 'BOOK',
      categories: ['Fiction'],
      averageRating: 4,
      ratingsCount: 1,
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: true,
      contentVersion: '1.13.12.0.preview.3',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=yiUHBwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=yiUHBwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      previewLink:
        'http://books.google.com.br/books?id=yiUHBwAAQBAJ&printsec=frontcover&hl=&source=gbs_api',
      infoLink:
        'https://play.google.com/store/books/details?id=yiUHBwAAQBAJ&source=gbs_api',
      canonicalVolumeLink:
        'https://play.google.com/store/books/details?id=yiUHBwAAQBAJ'
    },
    layerInfo: {
      layers: [
        {
          layerId: 'geo',
          volumeAnnotationsVersion: '15'
        }
      ]
    },
    userInfo: {
      updated: '2023-12-07T14:58:22.382Z'
    },
    saleInfo: {
      country: 'BR',
      saleability: 'FOR_SALE',
      isEbook: true,
      listPrice: {
        amount: 29.9,
        currencyCode: 'BRL'
      },
      retailPrice: {
        amount: 29.9,
        currencyCode: 'BRL'
      },
      buyLink:
        'https://play.google.com/store/books/details?id=yiUHBwAAQBAJ&rdid=book-yiUHBwAAQBAJ&rdot=1&source=gbs_api',
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 29900000,
            currencyCode: 'BRL'
          },
          retailPrice: {
            amountInMicros: 29900000,
            currencyCode: 'BRL'
          },
          giftable: true
        }
      ]
    },
    accessInfo: {
      country: 'BR',
      viewability: 'PARTIAL',
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.br/books/download/Escurid%C3%A3o_total_sem_estrelas-sample-epub.acsm?id=yiUHBwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
      },
      pdf: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.br/books/download/Escurid%C3%A3o_total_sem_estrelas-sample-pdf.acsm?id=yiUHBwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=yiUHBwAAQBAJ&hl=&source=gbs_api',
      accessViewStatus: 'SAMPLE',
      quoteSharingAllowed: false
    }
  },
  {
    kind: 'books#volume',
    id: '50cTDQEACAAJ',
    etag: 'Dxl001e70ok',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/50cTDQEACAAJ',
    volumeInfo: {
      title: 'Quem É você Alasca?',
      authors: ['John Green'],
      publishedDate: '2015',
      description:
        '"Sixteen-year-old Miles\' first year at Culver Creek Preparatory School in Alabama includes good friends and great pranks, but is defined by the search for answers about life and death after a fatal car crash." -- alternative sumary from records ...',
      industryIdentifiers: [
        {
          type: 'ISBN_10',
          identifier: '8580576830'
        },
        {
          type: 'ISBN_13',
          identifier: '9788580576832'
        }
      ],
      readingModes: {
        text: false,
        image: false
      },
      printType: 'BOOK',
      categories: ['Boarding schools'],
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: false,
      contentVersion: 'preview-1.0.0',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      previewLink:
        'http://books.google.com.br/books?id=50cTDQEACAAJ&hl=&source=gbs_api',
      infoLink:
        'http://books.google.com.br/books?id=50cTDQEACAAJ&hl=&source=gbs_api',
      canonicalVolumeLink:
        'https://books.google.com/books/about/Quem_%C3%89_voc%C3%AA_Alasca.html?hl=&id=50cTDQEACAAJ'
    },
    userInfo: {
      updated: '2023-12-01T14:34:10.514Z'
    },
    saleInfo: {
      country: 'BR',
      saleability: 'NOT_FOR_SALE',
      isEbook: false
    },
    accessInfo: {
      country: 'BR',
      viewability: 'NO_PAGES',
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: false
      },
      pdf: {
        isAvailable: false
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=50cTDQEACAAJ&hl=&source=gbs_api',
      accessViewStatus: 'NONE',
      quoteSharingAllowed: false
    }
  },
  {
    kind: 'books#volume',
    id: 'xUvSEAAAQBAJ',
    etag: 'tNGCZbqi9/Q',
    selfLink: 'https://www.googleapis.com/books/v1/volumes/xUvSEAAAQBAJ',
    volumeInfo: {
      title: 'O diário de Anne Frank (Resumo)',
      authors: ['Anne Frank'],
      publisher: 'Editora Novo Século',
      publishedDate: '2023-04-28',
      description:
        'Este livro é um resumo produzido a partir da obra original. A mudança climática é real, mas não é o fim do mundo. Não é sequer nosso maior problema ambiental. Michael Shellenberger tem lutado por um planeta mais verde por décadas. Ajudou a salvar ...',
      industryIdentifiers: [
        {
          type: 'OTHER',
          identifier: 'EAN:4066339681415'
        }
      ],
      readingModes: {
        text: true,
        image: true
      },
      pageCount: 29,
      printType: 'BOOK',
      categories: ['Juvenile Fiction'],
      maturityRating: 'NOT_MATURE',
      allowAnonLogging: false,
      contentVersion: '0.1.2.0.preview.3',
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      imageLinks: {
        smallThumbnail:
          'http://books.google.com/books/content?id=xUvSEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        thumbnail:
          'http://books.google.com/books/content?id=xUvSEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      previewLink:
        'http://books.google.com.br/books?id=xUvSEAAAQBAJ&printsec=frontcover&hl=&source=gbs_api',
      infoLink:
        'https://play.google.com/store/books/details?id=xUvSEAAAQBAJ&source=gbs_api',
      canonicalVolumeLink:
        'https://play.google.com/store/books/details?id=xUvSEAAAQBAJ'
    },
    layerInfo: {
      layers: [
        {
          layerId: 'geo',
          volumeAnnotationsVersion: '1'
        }
      ]
    },
    userInfo: {
      updated: '2023-12-01T14:30:52.729Z'
    },
    saleInfo: {
      country: 'BR',
      saleability: 'FOR_SALE',
      isEbook: true,
      listPrice: {
        amount: 9.9,
        currencyCode: 'BRL'
      },
      retailPrice: {
        amount: 9.9,
        currencyCode: 'BRL'
      },
      buyLink:
        'https://play.google.com/store/books/details?id=xUvSEAAAQBAJ&rdid=book-xUvSEAAAQBAJ&rdot=1&source=gbs_api',
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 9900000,
            currencyCode: 'BRL'
          },
          retailPrice: {
            amountInMicros: 9900000,
            currencyCode: 'BRL'
          },
          giftable: true
        }
      ]
    },
    accessInfo: {
      country: 'BR',
      viewability: 'PARTIAL',
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: 'ALLOWED',
      epub: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.br/books/download/O_di%C3%A1rio_de_Anne_Frank_Resumo-sample-epub.acsm?id=xUvSEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
      },
      pdf: {
        isAvailable: true,
        acsTokenLink:
          'http://books.google.com.br/books/download/O_di%C3%A1rio_de_Anne_Frank_Resumo-sample-pdf.acsm?id=xUvSEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api'
      },
      webReaderLink:
        'http://play.google.com/books/reader?id=xUvSEAAAQBAJ&hl=&source=gbs_api',
      accessViewStatus: 'SAMPLE',
      quoteSharingAllowed: false
    }
  }
]
//  0 = Favorite
//  1 = Purchased
//  2 = To Read
//  3 = Reading Now
//  4 = Have Read
//  5 = Reviewed
//  6 = Recently Viewed
//  7 = My Google eBooks
//  8 = Books for you
//  9 = Browsing history

export default function Home() {
  const {
    user,
    token,
    setIsLoading,
    setBooksInShelf,
    setBooksReading,
    setBooksToRead,
    setReadBooks,
  } = useAuthContext()

  const loadFakeData = async () => {
    setIsLoading(true)
    // setBooksInShelf(fakeData)
    loadData()
    setIsLoading(false)
  }

  const loadData = async () => {
    const userLoad = user ? user : JSON.parse(parseCookies().user)
    setIsLoading(true)
    // if (token || userLoad) {
    //   await UseGetAllStateBooks({
    //     user: userLoad,
    //     setBooksReading,
    //     setBooksToRead,
    //     setReadBooks,
    //     setBooksInShelf,
    //   })
    // }
    const { books } = await getUserData(userLoad.id)
    setBooksReading(books.filter((book) => book.status === 'reading'))
    setBooksToRead(books.filter((book) => book.status === 'toRead'))
    setReadBooks(books.filter((book) => book.status === 'read'))
    setBooksInShelf(books)
    setIsLoading(false)
  }

  const { data, isLoading } = useQuery({
    queryKey: ['books', 'all'],
    queryFn: async () => {
      loadData()
    },
  })

  const dataLivro = {
    title: 'O diário de Anne Frank (Resumo)',
    authors: ['Anne Frank'],
    publisher: 'Editora Novo Século',
    publishedDate: '2023-04-28',
    description:
      'Este livro é um resumo produzido a partir da obra original. A mudança climática é real, mas não é o fim do mundo. Não é sequer nosso maior problema ambiental. Michael Shellenberger tem lutado por um planeta mais verde por décadas. Ajudou a salvar ...',
    industryIdentifiers: [
      {
        type: 'OTHER',
        identifier: 'EAN:4066339681415',
      },
    ],
  }
  return (
    <>
      <BackgroundArea>
        <TopBar sidebar profile={window.innerWidth < 640} />
        <MainSection />
        {/* <Button onClick={() => { getData() }} placeholder={'alo'} >Pegar os dados</Button>
        <Button onClick={() => { setData({collectionName: 'IDDoFulanoChato', data: [dataLivro]}) }} placeholder={'alo'} >Seta os dados</Button>
        <Button onClick={() => { addData({campo: 'nota', dado: '0'}) }} placeholder={'alo'} >Adiciona os dados</Button>
        <Button onClick={() => { updateData( {livro: 'A memina que roubava livros', campo: 'data da leitura', dado: '10/12/2023'}) }} placeholder={'alo'} >Atualiza os dados</Button>
        <Button onClick={() => { deleteData('PPclC7LdLTLHDm8QQuvI') }} placeholder={'alo'} >Apagar os dados</Button>
        <Button onClick={() => { createUserData('testandoCreateUser')}} placeholder={'alo'} >Teste</Button> */}
      </BackgroundArea>
    </>
  )
}
