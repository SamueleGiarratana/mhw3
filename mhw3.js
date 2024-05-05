//barra di ricerca
function Cerca_prodotto(){
    console.log("cliccato");
}
const button=document.querySelector("button")
button.addEventListener('click',Cerca_prodotto);


function Focus(){
const text=document.querySelector('input');
text.value='';
console.log('focus');
}

function Blur(){
    const text=document.querySelector('input');
    text.value='Cerca prodotto';
    console.log('Blur');
}
const text=document.querySelector("input")
text.addEventListener("focus",Focus);
text.addEventListener("blur",Blur);

//sezione scopri nascosto 

function C_Scopri(event){

    event.preventDefault();
    const p = document.querySelector('#Abbonamento');
    if(p.classList.contains('Nascosto'))
    {
        p.classList.remove('Nascosto');
    }
    else{
        p.classList.add('Nascosto');
    }

}

document.querySelector('.Scopri').addEventListener('click',C_Scopri);

//CAMBIA IMMAGINE LOOK PRIMA FOTO
function changeImg(){
    const img = document.querySelector(".lookImg");
    if(img.src==="https://jekoo.s3-eu-west-1.amazonaws.com/media/2024-03-18/images/94ea2a67bad340178b862365b5723aa1"){
        console.log("immagine nuova");
        img.src = "https://image.hm.com/content/dam/global_campaigns/season_09/ladies/ws20c/WS20C-1x1-1.jpg?imwidth=396";
    }else if(img.src==="https://image.hm.com/content/dam/global_campaigns/season_09/ladies/ws20c/WS20C-1x1-1.jpg?imwidth=396"){
        console.log("immagine vecchia")
        img.src = "https://jekoo.s3-eu-west-1.amazonaws.com/media/2024-03-18/images/94ea2a67bad340178b862365b5723aa1";
    }
}

document.querySelector(".look img").addEventListener("click", changeImg);


//CAMBIA IMMAGINE SECONDA FOTO
function changeImg2(){
    const img = document.querySelector(".cultImg");
    if(img.src==="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F48%2F14%2F4814dcc45c22dd6796b95f3e95956a051b897cd2.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"){
        console.log("immagine nuova");
        img.src = "https://image.hm.com/content/dam/global_campaigns/season_09/men/3049h/3049H-%201x1-2.jpg";
    }else if(img.src==="https://image.hm.com/content/dam/global_campaigns/season_09/men/3049h/3049H-%201x1-2.jpg"){
        console.log("immagine vecchia")
        img.src = "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F48%2F14%2F4814dcc45c22dd6796b95f3e95956a051b897cd2.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]";
    }
}

document.querySelector(".cult img").addEventListener("click", changeImg2);

//cambia le 4 foto passandoci con  il cursore
function Cambia_prod(event){
    const index=event.target.getAttribute('data-index');

    const img=event.target.querySelector('img');

    switch(index){
        case '0':
            img.src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe4%2F44%2Fe444b2d674d9d113201ece6750fe0bd798490d14.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]";
            break;
            
        case '1':
            img.src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F35%2F5d%2F355d3c22c8775bddb96bf48ba8b6e46035b8d853.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]";
            break;
        
        case '2':
            img.src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb7%2Fff%2Fb7fffd3ae67b5e0fd9ac784a0fe00a72148a3077.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]";
            break;

        case '3':
            img.src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc8%2Fb3%2Fc8b3f740de7f4b179546aefb73cb86ea120999e9.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]";
            break;    
    }
}

function Ripr_prod(event){
    const index = event.target.getAttribute('data-index');

    const img = event.target.querySelector('img');

    switch(index){
        case '0':
            img.src="https://lp2.hm.com/hmgoepprod?set=source%5B/a0/47/a047b70267f11665d7753902b3de3753d62e6e63.jpg%5D,origin%5Bdam%5D,category%5B%5D,type%5BLOOKBOOK%5D,res%5Bz%5D,hmver%5B1%5D&call=url%5Bfile:/product/main%5D";
            break;
        case '1':
            img.src="https://lp2.hm.com/hmgoepprod?set=source%5B/c3/1f/c31f44c4b9d8a86fdea4afbde165368777a2bfa7.jpg%5D,origin%5Bdam%5D,category%5B%5D,type%5BLOOKBOOK%5D,res%5Bz%5D,hmver%5B1%5D&call=url%5Bfile:/product/main%5D";
            break;
        case '2':
            img.src="https://lp2.hm.com/hmgoepprod?set=source%5B/6b/6c/6b6c1d6844f2857ef5ddb51251d41abf79df508c.jpg%5D,origin%5Bdam%5D,category%5B%5D,type%5BLOOKBOOK%5D,res%5Bz%5D,hmver%5B1%5D&call=url%5Bfile:/product/main%5D";
            break;
        case '3':
            img.src="https://lp2.hm.com/hmgoepprod?set=source%5B/90/78/907865e27684fa14afad7e9be2d325500958bc58.jpg%5D,origin%5Bdam%5D,category%5B%5D,type%5BLOOKBOOK%5D,res%5Bz%5D,hmver%5B1%5D&call=url%5Bfile:/product/main%5D";
            break;        
    }
}

const vest=document.querySelectorAll('.vestiti');

vest.forEach(div=>{
    div.addEventListener('mouseenter',Cambia_prod);
    div.addEventListener('mouseleave',Ripr_prod);
});


function changecasa(event){
const imgcasa=event.currentTarget;
imgcasa.src="https://www.arredo-casa.info/wp/wp-content/uploads/2017/02/libreria-in-bucaneve.jpg";
imgcasa.removeEventListener('click',changecasa);

}


function r_casa(event){
    const imgcasa=event.currentTarget;
    imgcasa.src="https://image.hm.com/content/dam/TOOLBOX/PRE_SEASON/2023_s-09/december_2023/TCH9003_Easter_1x1.jpg?imwidth=1260"
    imgcasa.addEventListener('click',changecasa);
    
    }

    const imgcasa=document.querySelector('.arredo img');
    imgcasa.addEventListener('click',changecasa);
    imgcasa.addEventListener('mouseover',changecasa);
    imgcasa.addEventListener('mouseout',r_casa);

//API SPOTIFY

    function onJson(json) {
        
      
        const library = document.querySelector('#album-view');
        library.innerHTML = '';
        
        const ris = json.albums.items;
        let num_ris = ris.length;
        
        if(num_ris > 5)
          num_ris = 5;

        for(let i=0; i<num_ris; i++)
        {
          
          const album_data = ris[i]
          
          const title = album_data.name;
          const selected_image = album_data.images[0].url;
           
          
          const album = document.createElement('div');
          album.classList.add('album');
          
          
          const img = document.createElement('img');
          img.src = selected_image;
         
          
          const caption = document.createElement('span');
          caption.textContent = title;
          
          
          album.appendChild(img);
          album.appendChild(caption);
          
          library.appendChild(album);
        }
      }
      
      function search(event)
      {
        
        event.preventDefault();
        
        const album_input = document.querySelector('#album');
        const album_value = encodeURIComponent(album_input.value);
       
        
        fetch("https://api.spotify.com/v1/search?type=album&q=" + album_value,
          {
            headers:
            {
              'Authorization': 'Bearer ' + token
            }
          }
        ).then(onResponse).then(onJson);
      }
      
      function onTokenJson(json)
      {
     
        
        token = json.access_token;
      }
      
      function onTokenResponse(response)
      {
        return response.json();
      }
      

      const client_id = '215df0926ddd4f61b6ac7626c4b77aee';
      const client_secret = '73f6cc53af624388904312c6c50eb327';
      
      let token;
      
      fetch("https://accounts.spotify.com/api/token",
          {
         method: "post",
         body: 'grant_type=client_credentials',
         headers:
         {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
         }
        }
      ).then(onTokenResponse).then(onTokenJson);
      
      const form = document.querySelector('form');
      form.addEventListener('submit', search);

//API VESTITI

    document.querySelector('.search_prodotti form').addEventListener('submit', searchProd); 
    
    let nomeVestito = "nome";

    function searchProd(event){
        event.preventDefault(); 
        
        const input = document.querySelector("#dress");
        nomeVestito=encodeURIComponent(input.value);

        //faccio la richiesta
        fetch('https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=men_all&concepts=H%26M%20MAN', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7b769d2fbcmshe6d9ed143b7a559p1ec98ajsnca6d724cd361',
                'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
            }
        }).then(onResponse, onError)
        .then(onSearchItem);
    
    }

    function onSearchItem(json){
        if (!json) {
            console.log('Nessun json ritornato');
            return;
        }

        const sezione = document.querySelector("#dress-view");
        sezione.innerHTML='';

        let j=0;

        for(let i=0; i<30; i++){ 
            if(json.results[i].name.includes(nomeVestito)){
                console.log(json.results[i]);
                //QUA DEVI FARE CHE SI DEVONO CREARE GLI ELEMENTI CHE CONTENGONO LE COSE
                const prodotto = document.createElement('div'); //div che contiene immagine e testo

                const nomeProdotto = document.createElement('p');
                nomeProdotto.textContent = json.results[i].name;
                prodotto.appendChild(nomeProdotto); //p che contiene testo

                const imgProdotto = document.createElement("img");
                imgProdotto.src=json.results[i].images[0].url;
                prodotto.appendChild(imgProdotto); //immagine

                document.querySelector("#dress-view").appendChild(prodotto);
            }else{
                j++;
            }
            
        }
        if(j=0){
            sezione.innerHTML="Nessun elemento corrisponde alla tua ricerca";
        }
    }


    function onResponse(response) {       
        if(!response.ok) {
            console.log('Problema con la risposta');
            return null;
        }
        return response.json();
      }

      function onError(error){ 
        console.log('Errore' + error); 
    }
        



