export default class Slide {
    constructor(slide, slideWrraper){
        this.slide = document.querySelector(slide)
        this.slideWrraper = document.querySelector(slideWrraper)
        this.dist = { finalPosition: 0, startX: 0, movement: 0 }
    }

    moveSlide(distX){
        this.dist.movement = distX
        this.slide.style.transform = `translate3d(${this.distX}px, 0, 0)`
    }

    updatePosition(clientX){
        this.dist.movement = (this.dist.startX - clientX) * 1.6
        return this.dist.finalPosition - this.dist.movement
    }

    onStart(event){
        event.preventDefault()
        this.dist.startX = event.clientX
        this.slideWrraper.addEventListener('mousemove', this.onMove)
    }

    onMove(event){
       const finalPOsition = this.updatePosition(event.clientX)  
       this.moveSlide(finalPOsition)  
    }

    onEend(){
        this.slideWrraper.removeEventListener('mousemove', this.onMove)
        this.dist.finalPosition = this.dist.movement
    }

    addSlideEvent(){
        this.slideWrraper.addEventListener('mousedown', this.onStart)
    }

    bindEvents(){
        this.onStart = this.onStart.bind(this)
    }

    init(){
        this.addSlideEvent()
        return this
    }
}