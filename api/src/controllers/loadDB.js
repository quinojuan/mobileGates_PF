const { Phones, Notebooks, Tablets } = require("../db");        // requiero el modelo
const data = require("../FINAL.json");      // me traigo el Json


const loadPhones = async () => {
  try {
    const allPhones = data.filter(art => art.category === "Phones" ? {  // filtro por la categoría y en las que coinciden armo un objeto con las propiedades para que coincidan con el modelo
            category: art.category,
            model: art.model,
            brand: art.brand,
            operative_system: art.operative_system,
            size: art.size,
            inches: art.inches,
            main_camera: art.main_camera,
            ram: art.ram,
            capacity: art.capacity,
            frontal_camera: art.frontal_camera,
            weight: art.weight,
            battery: art.battery,
            price: art.price,
            image: art.image,
            cpu: art.cpu,
            description: art.description
        } : null)

    const allTablets = data.filter(art => art.category === "Tablets" ? {  // filtro por la categoría y en las que coinciden armo un objeto con las propiedades para que coincidan con el modelo
            category: art.category,
            model: art.model,
            brand: art.brand,
            operative_system: art.operative_system,
            size: art.size,
            inches: art.inches,
            main_camera: art.main_camera,
            ram: art.ram,
            capacity: art.capacity,
            frontal_camera: art.frontal_camera,
            weight: art.weight,
            battery: art.battery,
            price: art.price,
            image: art.image,
            cpu: art.cpu,
            description: art.description
        } : null)
    const allNotebooks = data.filter(art => art.category === "Notebooks" ? {  // filtro por la categoría y en las que coinciden armo un objeto con las propiedades para que coincidan con el modelo
            category: art.category,
            model: art.model,
            brand: art.brand,
            operative_system: art.operative_system,
            size: art.size,
            inches: art.inches,
            main_camera: art.main_camera,
            ram: art.ram,
            capacity: art.capacity,
            frontal_camera: art.frontal_camera,
            weight: art.weight,
            battery: art.battery,
            price: art.price,
            image: art.image,
            cpu: art.cpu,
            gpu: art.gpu,
            usb: art.usb,
            numpad: art.numpad,
            description: art.description
        } : null)
        await Phones.bulkCreate(allPhones) // a partir del arreglo filtrado cargo todos los objetos en la tabla PHONES
        await Tablets.bulkCreate(allTablets) // a partir del arreglo filtrado cargo todos los objetos en la tabla PHONES
        await Notebooks.bulkCreate(allNotebooks) // a partir del arreglo filtrado cargo todos los objetos en la tabla PHONES
} catch (error) {
    console.log(error);
  }
};

module.exports = loadPhones // exporto la funcion para utilizarla en el INDEX y así que se llame cada vez que inicie el server. (falta hacer una validación para que sea mas eficiente.)