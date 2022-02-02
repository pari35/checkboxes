const mcb = document.getElementById("chkboxMaha")
const gocb = document.getElementById("chkboxGoa")
const gcb = document.getElementById("chkboxGuj")
const pcb = document.getElementById("chkboxPan")
const states = [mcb, gocb, gcb, pcb]
const codeNames = ["maha", "goa", "guj", "pan"]
const areacodenames=["pune","satara","kolhapur","fort"]

let checkedArray = {
    "maha": false,
    "goa": false,
    "guj": false,
    "pan": false    
}
let checkedArrayArea = {
    "pune": false,
    "satara": false,
    "kolhapur": false,
    "fort": false    
}



// let arar = []
// console.log("hello");
// console.log(checkedArray["maha"]);

const stateDists = {
    "maha" : ["pune", "satara", "kolhapur"],
    "goa" : ["fort", "panji"],
    "guj" : ["bhavnagar","amdabad"],
    "pan" : [""]
}
// stateDists["maha"]
const areaDists = {
    "pune" : ["katraj", "camp", "pimpri"],
    "satara" : ["phaltan", "karad"],
    "kolhapur" : ["kolhapur","city"],
    "fort":[ ],
    "panji":[ ],
    "bhavnagar":[ ],
}
for(let state of states) {
    state.addEventListener("change", (e) => {
        console.log("listened");
        checkedArray.maha = mcb.checked
        checkedArray.goa = gocb.checked
        checkedArray.guj = gcb.checked
        checkedArray.pan = pcb.checked
        console.log(checkedArray);
        let dynamicDD = document.getElementById("dynamicDD")
        let inhtml = ``
        // arar = []
        for (let chk of codeNames) {
            console.log(chk);
            if (checkedArray[chk] === true) {
                for (let dist of stateDists[chk]) {
                    // arar.push(dist)
                    inhtml += `
                    <div class="form-check">
                    <input class="form-check-input" onchange="populate('${dist}')" id="chkboxMaha" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                    ${dist}
                    </label>
                    </div>
                    `
                }
            }
        }
        dynamicDD.innerHTML = inhtml;
        // for (let a of arar) {

        // }
    })
}
const populate = (t) => {
    console.log(t);
    let areaname=`

    `
    checkedArrayArea[t] = !checkedArrayArea[t];
    for (let a of areacodenames){

        console.log("first for loop a : ",a);
        console.log("checkedArrayArea[a] : ",checkedArrayArea[a]);
        if (checkedArrayArea[a]===true){
            console.log("areadists : ",areaDists);
            for(let regionarea of areaDists[a]){
            console.log("sec for loop for regioarea:",regionarea);
                // for(let areaelement of regionarea){
                    // console.log("areael : ", areaelement);
                    areaname += `
                    <div class="form-check">
                    <input class="form-check-input" )" id="chkboxMaha" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                    ${regionarea}
                    </label>
                    </div> 
                    `
                // }
            }
        }
    }
    document.getElementById('area').innerHTML=areaname
}

// const populate = (dist) => {
//     arar.push()
// }
//         for (let aria of areaarr) {
//             for (let ar of areaDists[a]) {
//                 inhtml += `
//                 <div class="form-check">
//                 <input class="form-check-input" id="chkboxMaha" type="checkbox" value="" id="flexCheckDefault">
//                 <label class="form-check-label" for="flexCheckDefault">
//                 ${ar}
//                 </label>
//                 </div>
//                 `
//             }
//         }
//         area.innerHTML=areahtml;