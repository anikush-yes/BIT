//Migtukai

document.querySelector('#btn1').addEventListener('click', e => {
console.log('Button 1 clicked', e.target);

});


document.querySelector('#btn1').addEventListener('dblclick', e => {
    console.log('Button 1 dbclicked');
    
    });

    document.querySelector('#btn2').addEventListener('click', e => {
        console.log('Button 2 clicked');
        
        });

        window.addEventListener ('scroll', e =>{

            console.log('Scrolling', window.scrollY);
        })

        document.querySelector('#btn2').addEventListener('scroll', e => {
            console.log('Scrolling button 2');
        });

        document.querySelector('#btn3').addEventListener('click', e => {
            e.preventDefault() //sustabdo linko suveikima
            console.log ('Link clicked');
        });

//ivykio burbuliavimas (event boublings), susijes su tevais ir vaikais

        document.querySelector('.tevas').addEventListener('click', e => {
e.target.style.backgroundColor = 'darkred'; // e.target reiskia ka spaudi tas ir spalvina

            
        })

        //stabdyti boublinima reikia vaike:
       
        document.querySelector('.vaikas').addEventListener('click', e => {
            e.stopPropagation();
            document.querySelector('.vaikas').style.backgroundColor = 'darkblue';
        });