// Importo Vue e creo l'infrastruttura per utilizzarlo
const { createApp } = Vue;
const app = createApp({
    name: 'Hello Vue',
    data() {
        return {
            message: 'Hello VUE',
            image: 'https://coursereport-production.imgix.net/uploads/school/logo/681/original/Pittogramma-RGB-1080-BLUE-circle.png?w=72&h=72'
        }
    }
});
app.mount('#root');
