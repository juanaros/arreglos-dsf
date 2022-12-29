const propiedades = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      rooms: 5,
      m: 500
    }
];

const mostrarContador = document.querySelector("#cantidad")
const casas = document.querySelector(".propiedades")
let mostrarCards = ''
let mostrarCuenta = 0
for(let casa of propiedades){
  mostrarCuenta += 1;
  mostrarCards += `
  <div class="propiedad">
    <div class="img" style="background-image: url('${casa.src}')"></div>
    <section>
      <h5> ${casa.name} </h5>
      <div class="d-flex justify-content-between">
        <p>Cuartos: ${casa.rooms}</p>
        <p>Metros: ${casa.m}</p>
      </div>
      <p class="my-3">${casa.description}</p>
      <button class="btn btn-info ">Ver más</button>
    </section>
  </div>`
}
casas.innerHTML = mostrarCards
mostrarContador.innerHTML = mostrarCuenta

const buscar = document.querySelector(".btn")
buscar.addEventListener('click', () => {
  let piezas = document.getElementById('piezas').value
  let minimo = document.getElementById('v1').value
  let maximo = document.getElementById('v2').value
  let propiedad = document.querySelector(".propiedades")
  let contador = document.getElementById('cantidad')
  cuenta = 0
  let agregarCards = ""
  verificar: if(piezas == 0 || minimo == 0 || maximo == 0){
    alert('Faltan campos por llenar')
    break verificar;
  } else {
    for(let casa of propiedades){
      if(piezas == casa.rooms && casa.m >= minimo && casa.m <= maximo){
        cuenta += 1
        agregarCards +=
        `<div class="propiedad">
        <div class="img" style="background-image: url('${casa.src}')"></div>
        <section>
          <h5> ${casa.name} </h5>
          <div class="d-flex justify-content-between">
            <p>Cuartos: ${casa.rooms}</p>
            <p>Metros: ${casa.m}</p>
          </div>
          <p class="my-3">${casa.description}</p>
          <button class="btn btn-info ">Ver más</button>
        </section>
      </div>`
      }
      propiedad.innerHTML = agregarCards
      contador.innerHTML = cuenta
    }
  }
})


