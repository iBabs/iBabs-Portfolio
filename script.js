
show.addEventListener(
    'click', function(){
        const detail = document.getElementById('detail');
       if (detail.classList.contains('d-none')) {
        detail.classList.remove('d-none');
        document.getElementById('icon').className="fa fa-close fa-2x";
    }
        else{
            detail.classList.add('d-none');
          //  show.textContent= "SHOW DETAILS";
          document.getElementById('icon').className="fas fa-bars fa-2x";
        }
    })
    
    let hire = document.getElementById("hire");
hire.addEventListener(
    'click', function(){
        const detail = document.getElementById('contact');
       if (detail.classList.contains('d-none')) {
        detail.classList.remove('d-none');
        hire.textContent= " CLOSE Contact";
        hire.style.backgroundColor="yellowgreen";
    }
        else{
            detail.classList.add('d-none');
            hire.textContent= "Hire me";
            hire.style.backgroundColor="yellowgreen";
        }
    })

    function home(){
        alert("You are on the home page, feel free to look around")
    }