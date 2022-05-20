<template>
<div class="contenedor">
    <main class="conten-page-404">
		<section class="section--image">
			<img src="@/assets/404.png" alt="404 not found">
		</section>
		<section class="section--content">
            <h4>404 not found</h4>
            
			<p>Tengo malas noticias para ti</p>

			<span class="describe">
                La página que está buscando no esta disponible temporalmente
            </span>

			<button @click="back_to">Regresar</button>
		</section>
    </main>       
</div>
</template>

<script>
import router from '../router'
export default {
name: 'NotFoundView',
    methods: {

            back_to:function(){
            router.go(-1)
            },

    }
}
</script>

<style>
 
    .conten-page-404 {
            display: flex;
            justify-content: center;
            align-items: center; 
            height: 100vh;
            padding: 5%; 
    }

    .section--image{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .section--image img{
            width: 100%;
    }
    .section--content{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 5%; 
    }

    .section--content h4{
            text-align: center;
            font-size: calc(1rem + 2vw) ;
    }

    .section--content p{
            text-align: center;
            font-size: calc(1rem + .3vw);
    }

    .section--content .describe{
            font-size: calc(.2rem + .8vw);
            text-align: center;
            margin-bottom: 7.5%;
    }

    button {
            outline: none;
            border: none;
            font-size: calc(.5rem + .3vw);
            padding: 8px 22px;
            border-radius: 50px;
            background-color: var(--buttons); 
            color: var(--toggle-color);
            transition: 2s all ease;
    }

    button:hover{
            background-color: var(--hover);
            color: var(--toggle-color);   
            transform: scale(1.2);
    }

    @media(max-width:600px) {

        .conten-page-404 {
            flex-direction: column;
        }

        .section--content p{
            text-align: center;
        }

        .section--content .describe{
            font-size: calc(.5rem + .9vw);
            text-align: left;
        }
    }

</style>