console.log("script")
document.querySelector('.cross').style.display='none';
document.querySelector('.hamb').addEventListener("click", ()=>{
    document.querySelector('.slidebar').classList.toggle('sidebargo');
    if( document.querySelector('.slidebar').classList.contains('sidebargo')){
     document.querySelector('.ham').style.display= 'inline'
     document.querySelector('.cross').style.display= 'none'

    }
    else{
        document.querySelector('.ham').style.display='none'
    setTimeout(() => {
        document.querySelector('.cross').style.display='inline'
        
    }, 300);
    }
})