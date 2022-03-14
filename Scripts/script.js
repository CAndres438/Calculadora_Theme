//Lógica de la Calculadora

const d = document
const $Resultado = d.getElementById('Resultado') 
const $Form = d.getElementById('form')
const $eliminar = d.getElementById("eliminar")
const $igual = d.getElementById('Igual');
const $Del = d.getElementById('del')
ls=localStorage

function Operador(operador){
    let Operador = $Resultado.value;
    $Resultado.value = Operador + operador 
}

$eliminar.addEventListener('click', (e) => {
    e.preventDefault()
    const $eliminar = d.getElementById('eliminar');
    $Form.reset()   
})

$igual.addEventListener('click', (e) => {
    e.preventDefault()
    calcular()  
})

$Del.addEventListener('click', (e) => {
    e.preventDefault()
    Back()  
})

function calcular(){
    if($Resultado.value !== ""){
        const $ResultadoDef = $Resultado.value;
        $Resultado.value = eval($ResultadoDef)
        if ($Resultado.value == Infinity){
        alert("Está tratando de realizar una operación sin valor aritmético natural")
        $Resultado.value = 0
        }
        else if(isNaN($Resultado.value)){
        alert("Valor inválido aritmético")
        $Resultado.value = 0
        }
    }else{
        alert("Algunos de lo valores son inválidos, o es inoperable")
    }
}

function Back(){
    const $ResultadoDef = $Resultado.value;
    $Resultado.value = $ResultadoDef.substring(0, $ResultadoDef.length - 1);
}


// Cambios de tema 

function ThemeChange(theme) {
    // Valores de cambio
    document.getElementById('btnTheme').value = theme;
  
    
    if (theme == 1) {
      d.body.classList.remove('dark');
      d.body.classList.remove('light');
      ls.setItem("theme", "Normal")

    }
  
    else if (theme == 2) {
      d.body.classList.remove('dark');
      d.body.classList.add('light');
      ls.setItem("theme", "Light")
    }
  
    else {
      d.body.classList.remove('light');
      d.body.classList.add('dark');
      ls.setItem("theme", "Dark")
    }
  
  }

d.addEventListener("DOMContentLoaded", (e) =>{

    if(ls.getItem("theme")=== "Normal"){
        d.body.classList.remove('dark');
        d.body.classList.remove('light');
        d.getElementById('btnTheme').value = 1
    }
    if(ls.getItem("theme")=== "Light"){
        d.body.classList.remove('dark');
        d.body.classList.add('light');
        d.getElementById('btnTheme').value = 2
    }
    if(ls.getItem("theme")=== "Dark"){
        d.body.classList.remove('light');
        d.body.classList.add('dark'); 
        d.getElementById('btnTheme').value = 3
    }   
}) 








