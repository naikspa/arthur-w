
// let img = checkbox.parentElement.querySelector("img")
// let imgSrc = img.getAttribute('src')
// const data = { imgSrc };


document.addEventListener('click', (e) => {
    if(e.target.classList.contains('expand-imgs')){changeExpand(e)}
    if(e.target.classList.contains('checkbox-img')){
        sendImg(e)
        e.target.parentElement.parentElement.parentElement.querySelector('.expand-imgs').textContent = "expand_more";
        e.target.parentElement.parentElement.parentElement.querySelector('.image-container').style.display = "none";

    }
    
})
         
const changeExpand = e =>{
    expand = e.target;
    let expanded = expand.parentElement.querySelector('.image-container');
    if(expand.textContent == "expand_more"){
        expand.textContent = "expand_less"
        expanded.style.display = "grid";


    }else if(expand.textContent == "expand_less"){
        expand.textContent = "expand_more"
        expanded.style.display = "none";
    }
}


const sendImg = e =>{
        let img = e.target.parentElement.querySelector("img")
        let imgSrc = img.getAttribute('src')
        const data = imgSrc ;
        document.querySelector(".send-img-path").value = data

}


//--
//al pedo hice este codigo porque lo podia hacer mas facil pero me lo guardo que quizas dsp me sirve
//--
// const sendImg = (e)=>{
//     let img = e.target.parentElement.querySelector("img")
//     let imgSrc = img.getAttribute('src')
//     const data = { imgSrc };
//     const url = '/admin/panel/imgupload';
//     fetch(url, {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers:{ 
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(response => response.json())
//         .then(data => {
//            console.log('Respuesta del servidor:', data);
//         })
//         .catch(error => {
//                console.error('Error:', error);
//         });
                
// }

           