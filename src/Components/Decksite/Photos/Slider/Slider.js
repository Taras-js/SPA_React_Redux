import React, {} from 'react';
import photo from './Img/1.jpg'
import photo2 from './Img/2.jpg'
import photo3 from './Img/3.jpg'
import photo4 from './Img/4.jpg'
import photo5 from './Img/5.jpg'
import s from './Slider.module.css'


class Slider extends React.Component {
    state = {
        arrayPhotos: [
            {id: 1, photo: photo},
            {id: 2, photo: photo2},
            {id: 3, photo: photo3},
            {id: 4, photo: photo4},
            {id: 5, photo: photo5}
        ],
        firstPhotoId: 3
    }
    render() {


        const prevButton = () => {




        }
        const nextButton = () => {

        }
        return (
            < div
                className={s.slider}>
                <button
                    className="prev-button"
                    id="onclick-prev"
                    onClick={prevButton}
                   > Prev
                </button>
                {this.state.arrayPhotos.map((a)=> {

                return <img
                        src={a.photo}
                        className={s.currentPhotos}
                        id={a.id}
                        alt="disabled"/>

                })}

                <button className="next-button"
                        id="onclick-next"
                        onClick={nextButton}
                        > Next
                </button>
            </div>
        )
    }
}
export default Slider;



