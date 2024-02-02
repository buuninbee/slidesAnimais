export default class Slide {
    constructor(slide, slideWrraper){
        this.slide = document.querySelector(slide)
        this.slideWrraper = document.querySelector(slideWrraper)
    }

    onStart(event){
        event.preventDefault()
        console.log(event)
    }

    addSlideEvent(){
        this.slideWrraper.addEventListener('mousedown', this.onStart)
    }

    init(){
        this.addSlideEvent()
        return this
    }
}