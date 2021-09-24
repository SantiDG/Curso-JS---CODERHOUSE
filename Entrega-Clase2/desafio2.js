let nombre = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su apellido")

if((nombre != "") && (apellido != "")){
    alert(`Hola ${nombre} ${apellido}`)
}else(
    alert("No ha escrito su nombre. Vuelva a intentarlo.")
)

let edadS = prompt("Ingrese su edad (Solo numeros)")

if( edadS == ""){
    alert("No ha escrito su edad. Vuelva a intentarlo.")
}
let edadN = Number(edadS)

alert(`Su nombre es ${nombre} ${apellido} y tiene ${edadN} años`)




