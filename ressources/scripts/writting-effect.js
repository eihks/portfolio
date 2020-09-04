class Write{
    constructor(){
        this.interval,
        this.elements,
        this.elementsIndex = 0,
        this.index = 0
    }

    selectElements(){
        if(!this.elements){
            this.elements = document.querySelectorAll("*[data-writter]");
        }

        if(this.elementsIndex == this.elements.length){
            this.elements[this.elementsIndex -1].classList.add("write");
        } else {
            let el = this.elements[this.elementsIndex];
            this.addLetter(el, el.getAttribute("data-writter"));
            el.classList.toggle("write");
        }
    }


    addLetter(el, text){
        let that = this;

        el.innerHTML = text.slice(0, this.index);

        this.index++
        if(that.index > text.length){
            that.index = 0;
            clearInterval(that.interval)

            that.elementsIndex++;
            that.selectElements();
            el.classList.toggle("write");
        } else {
            window.clearInterval(that.interval)
            that.interval = setInterval(() => {that.addLetter(el, text)}, that.randomSpeed());
        }
    }

    randomSpeed(min_speed = 100, max_speed = 300){
        return Math.floor(Math.random() * (max_speed - min_speed) + min_speed);
    }
}