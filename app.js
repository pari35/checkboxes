// console.log("dropdown checkbox");

// const fech =document.getElementById('opregion')
// fetch.addEventListener('click',buttonClickHandler)
const stateDistObj = {
    "Maharashtra" : [
        "satara", "pune"
    ],
    "Goa" : [
        "fort ", "panji"
    ]
}
// console.log(fech);
console.log(document.getElementById("opregion"));
document.getElementById("opregion").addEventListener("change", (e) => {
    console.log(document.getElementById("opregion"));
    console.log(e.val());
    // console.log(fech);
})
function buttonClickHandler(e){
    console.log(e);
    const xhr=XMLHttpRequest();

    xhr.open('GET','index.html',true)

    xhr.onprogress=function(){
        console.log('on progress');
    }

    xhr.onload=function(){
        if (this.status ==200){
            console.log(this.responseText);
        }
        else{
            console.error('error');
        }
    }

    let region=document.getElementById('region');
    region.addEventListener('click',)

// send the request
maharashtra ={"region":"mumbai"}
    xhr.send();
}
