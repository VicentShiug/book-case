import React, { useRef } from 'react'
import { BookPreview } from './BookPreview'
import { Button, Dialog, DialogBody, DialogFooter } from '@material-tailwind/react'

export const ModalToRead = ({ id, open, handleOpen }) => {
  let elem = useRef(null)

  const handleFullScreen = () => {
    elem = document.getElementById('iframe')
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
    console.log(elem.current)
  }
  return (
    <div className='z-50 bg-white'>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className='w-full '>
          {/* <Button onClick={() => handleFullScreen()}>Tela cheia</Button> */}
          <BookPreview id={id} />
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="red" onClick={() => handleOpen((prev => !prev))}>
            <span>Fechar</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  )
}
