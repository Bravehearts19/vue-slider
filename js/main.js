Vue.config.devtools = true;

/* Funzione-evento che parte alla lettura del contenuto del DOM della pagina */
/* Viene utilizzata per racchiudere tutte le variabili non rendendole globali */
window.addEventListener("DOMContentLoaded", function () {
    /* const vueApp =  */new Vue({
        el: "#root",
        data: {
            imagesList: [
                {
                    url:'img/01.jpg',
                    title:'Svezia',
                    text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    url:'img/02.jpg',
                    title:'Svizzera',
                    text:'Lorem ipsum',
                },
                {
                    url:'img/03.jpg',
                    title:'Gran Bretagna',
                    text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    url:'img/04.jpg',
                    title:'Germania',
                    text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                },
                {
                    url:'img/05.jpg',
                    title:'Paradise',
                    text:'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                }
            ],
            currentActiveImage: 0,
        },
        methods: {
            onPrevClick() {
                let newIndex = this.currentActiveImage - 1;
                if(newIndex < 0) {
                    newIndex = this.imagesList.length - 1;
                }
                this.currentActiveImage = newIndex;
            },
            onNextClick() {
                let newIndex = this.currentActiveImage + 1;
                if(newIndex > (this.imagesList.length - 1)) {
                    newIndex = 0;
                }
                this.currentActiveImage = newIndex;
            },
            onImageClick(i) {
                console.log(i);
                this.currentActiveImage = i;
            },
        },
        mounted() {
         setInterval(() => {
            this.onNextClick();
            }, 6000)       
        }
    });
});
