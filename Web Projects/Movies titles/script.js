function sugestion(movie_gender){
    let age =  document.getElementById("user_age").value
    let recomendation = document.getElementById("sugested_movie")

    switch(movie_gender){
        case 'drama':
            if (age <13){
                recomendation.textContent = "Parasite"
            }else{
                if(age <16){
                    recomendation.textContent = 'Redemption'
                }else{
                    recomendation.textContent = "Joker"
                }
            }
            break;
        case 'comedy':
            if (age <13){
                recomendation.textContent = "Back to the future"
            }else{
                if(age <16){
                    recomendation.textContent = 'A man call Bruno'
                }else{
                    recomendation.textContent = "George Calving"
                }
            }
        break;
        case 'terror':
            if (age <13){
                recomendation.textContent = "predator"
            }else{
                if(age <16){
                    recomendation.textContent = 'The ring'
                }else{
                    recomendation.textContent = "Silent hill"
                }
            }
            break;
        case 'crime':
            if (age <13){
                recomendation.textContent = "Oceans 13"
            }else{
                if(age <16){
                    recomendation.textContent = 'The big hit'
                }else{
                    recomendation.textContent = "The waof of wall street"
                }
            }
            break;
    }


}