import React, {} from 'react';
import photo from './Img/1.jpg'
import photo2 from './Img/2.jpg'
import photo3 from './Img/3.jpg'
import photo4 from './Img/4.jpg'
import photo5 from './Img/5.jpg'
import s from './modalWindow.module.css'


class Slider extends React.Component {
    state = {
        arrayPhotos: [
            {id: 1, photo: photo},
            {id: 2, photo: photo2},
            {id: 3, photo: photo3},
            {id: 4, photo: photo4},
            {id: 5, photo: photo5}
        ]
    }

    render() {

        const [modal, setModal] = useState({
            WindowPhotos1: false,
            WindowPhotos2: false
        })

        return (
            < div>
                <button onClick={() => {
                    setModal({...modal, WindowPhotos1: true})
                }
                }> Open WindowPhotos1
                </button>
                <ModalWindow title={'WindowPhotos1'}
                             isOpened={this.modal.WindowPhotos1}
                             onModalClose={() => setModal({
                                 ...modal, WindowPhotos1: false
                             })}> <img src={photo2}
                                       className={s.photo}
                                       alt={'disabled'}/>
                </ModalWindow>
                <button onClick={() => {
                    setModal({...modal, WindowPhotos2: true})
                }
                }> Open WindowPhotos1
                </button>
                <ModalWindow title={'WindowPhotos2'}
                             isOpened={this.modal.WindowPhotos2}
                             onModalClose={() => setModal({
                                 ...modal, WindowPhotos1: false
                             })}>
                    <img src={photo2}
                         className={s.photo}
                         alt={'disabled'}/>
                </ModalWindow>
            </div>
        )
    }
}

export default Slider;