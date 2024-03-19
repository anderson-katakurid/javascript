var valores = [2, 4, 8, 5, 7,]
valores.sort()
console.log(valores)
for(var pos in valores) {
    console.log(`Aposição ${pos} tem o valor ${valores[pos]}`)
}