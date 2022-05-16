const products = [ 
    { 
      id: "1", 
      name: "monitor", 
      description: "led 14", 
      stock: 2 
    }, 
    { 
      id: "2", 
      name: "teclado", 
      description: "ingles", 
      stock: 3 
    } 
];

const listado = new Promise((res, rej) => {
    setTimeout(() => {
        res(products);
    }, 2000);
});

export const getItem = () => {
    return listado;
};