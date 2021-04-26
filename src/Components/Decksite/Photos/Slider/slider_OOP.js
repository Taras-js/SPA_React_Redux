
  const slider = {
        arrayPhotos: [],
        currentImgIndex: 0,
        initialSlider() {
            let that = this

            this.onPrevButton.addEventListener('click', ((e)=>{that.onClickButtonPrev(e)})
            );
            this.onNextButton.addEventListener('click', (e) => {
                    that.onClickButtonNext(e)
                }
            );
            this.findsImg.src = this.arrayPhotos[this.currentImgIndex];
            this.arrayPhotos.push('Img/1.jpg', 'Img/2.jpg', 'Img/3.jpg', 'Img/4.jpg', 'Img/5.jpg');

            this.onPrevButton.disabled = true;
        },
        onPrevButton: document.getElementById('onclick-prev'),
        onNextButton: document.getElementById('onclick-next'),
        findsImg: document.getElementById('item-img'),
        onClickButtonNext() {
            this.currentImgIndex++;
            this.findsImg.src = this.arrayPhotos[this.currentImgIndex];
            this.onPrevButton.disabled = false;
            if (this.currentImgIndex === (this.arrayPhotos.length - 1)) {
                this.onNextButton.disabled = true;
            }
        },
        onClickButtonPrev() {
            this.currentImgIndex--;
            this.findsImg.src = this.arrayPhotos[this.currentImgIndex];
            this.onNextButton.disabled = false;
            if (this.currentImgIndex === 0) {
                this.onPrevButton.disabled = true;
            }
            }
    };
  slider.initialSlider()




