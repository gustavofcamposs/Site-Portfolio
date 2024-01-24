function clickMenu(){ 
    if (Header_Hamburguer.style.display == 'block'){ /*Necessário deixar o ID com o msm nome pois ele puxa o ID e não a cLASS*/
        Header_Hamburguer.style.display = 'none'
    } else{
        Header_Hamburguer.style.display = 'block'
    }
}