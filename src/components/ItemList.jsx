

const items = [
    {
      id: "1",
      title: "Las crónicas de Narnia: El león, la bruja y el ropero", 
      price: 2000,
      pictureUrl: "https://4.bp.blogspot.com/-sLPSti12JY4/TYTTO-emYCI/AAAAAAAADoU/ceIscBfpYoM/s1600/Las%2Bcronicas%2Bde%2Bnarnia%2B%2528El%2Bleon%2Bla%2Bbruja%2By%2Bel%2Bropero%2529%2B-%2B2005%2B-.jpg"
    },
    {
      id: "2",
      title: "Las crónicas de Narnia: El príncipe Caspian", 
      price: 2200,
      pictureUrl: "https://cuevana3.mobi/wp-content/uploads/2020/06/las-cronicas-de-narnia-el-principe-caspian-5172-poster.jpg"
    },
    {
      id: "3",
      title: "Las crónicas de Narnia: La travesía del viajero del alba", 
      price: 2250,
      pictureUrl: "https://images-na.ssl-images-amazon.com/images/I/91IVfZHXJvL.jpg"
    }
  ]
  
  const libros = new Promise ((res, rej) => {
    setTimeout(() => {
      res(items);
    }, 2000)
  });
  
  export const getLibros = () => {
    return libros
  }


export default function ItemList( {item} ) {
    let resultado = item.greeting

}

