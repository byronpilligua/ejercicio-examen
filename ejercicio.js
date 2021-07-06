function numeros(){
    int=1;
    multiplo=0;

    while(int<=100) {
        console.log(int)

        int=int+1;

        if( int%7==0){
            multiplo= multiplo+1;
        }
    }

    console.log("Cantidad de número múltiplos de 7 entre 1 al 100-->", multiplo);
}