document.addEventListener('DOMContentLoaded', (event) => {
    const tablica=["1", "2", "3", "4", "5", "PUPA"];
    const podmianka=document.getElementById("podmianka");
    const przycisk=document.getElementById("przycisk");
    przycisk.onclick=function() {
        window.alert("Leci Nemo ponad lasem wymachuje swym kutasem");
        for(let i=0;i<tablica.length;i++) {
            let np=document.createElement("button");
            np.innerHTML=tablica[i];
            podmianka.appendChild(np);
        }
    }

})
