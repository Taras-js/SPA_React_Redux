import React, {} from 'react';
import s from "./Slider.module.css";
import photo from './Img/1.jpg'
import photo2 from './Img/2.jpg'
import photo3 from './Img/3.jpg'
import photo4 from './Img/4.jpg'
import photo5 from './Img/5.jpg'

class Slider extends React.Component {
    state = {
        arrayPhotos: [
            {id: 1, photo: photo},
            {id: 2, photo: photo2},
            {id: 3, photo: photo3},
            {id: 4, photo: photo4},
            {id: 5, photo: photo5},
        ],

    }


    render() {

        return (

            < div
                className={s.slider}>
                < button
                    className="prev-button"
                    id="onclick-prev"> Prev < /button>
                {this.state.arrayPhotos.map((a) => {
                   if (a.id === 3) {
                    return (
                        <img src={a.photo} className={s.currentPhotos} id="item-img" alt="disabled"/>)}
                })}
                <button className="next-button" id="onclick-next"> Next </button>
            </div>
        )
    }
}


export default Slider;

// let onPrevButton = document.getElementById('onclick-prev');
// let onNextButton = document.getElementById('onclick-next');
// let findsImg = document.getElementById('item-img');
// let onClickButtonNext = () => {
//     currentImgIndex++;
//     findsImg.src = arrayPhotos[currentImgIndex];
//     onPrevButton.disabled = false;
//     if (currentImgIndex === (arrayPhotos.length - 1)) {
//         onNextButton.disabled = true;
//     }
// }
// let onClickButtonPrev = () => {
//     currentImgIndex--;
//     findsImg.src = arrayPhotos[currentImgIndex];
//     onNextButton.disabled = false;
//     if (currentImgIndex === 0) {
//         onPrevButton.disabled = true;
//     }
// }
// // onPrevButton.disabled = true
// onPrevButton.addEventListener('click', onClickButtonPrev)
// onNextButton.addEventListener('click', onClickButtonNext)
// let arrayPhotos = [];
// arrayPhotos.push('Img/3.jpg');
// arrayPhotos.push('Img/2.jpg');
// arrayPhotos.push('Img/1.jpg');
// arrayPhotos.push('Img/4.jpg');
// arrayPhotos.push('Img/5.jpg');
// let currentImgIndex = 0;
// findsImg.src = arrayPhotos[currentImgIndex];

