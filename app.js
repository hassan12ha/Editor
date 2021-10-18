
let codes = document.getElementById("codes");
let play = document.getElementById("play");
let remove = document.getElementById("remove");
let result = document.getElementById("result");

play.onclick = ()=>{
    result.innerHTML = codes.value;
    //dwir dyalha katkhali ayhja kitbtiha akhir mara o sidite page katb9a save
    localStorage.setItem("RESULT" , codes.value);
};
remove.onclick = ()=>{
    //"" = vide
    result.innerHTML = "";
    //hena ila bkhiti mayb9ach m save fi page
    //localStorage.removeItem("RESULT");
    
}

onload = ()=>{
   codes.value =  localStorage.getItem("RESULT");
   result.innerHTML = codes.value;
}