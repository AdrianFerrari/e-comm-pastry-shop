import amadine from "./cakes-images/Amandine_cake.jpg"
import angel from "./cakes-images/Angel_Slice.jpg"
import manzana from "./cakes-images/Apple_cake.jpg"
import babka from "./cakes-images/Babka.jpg"
import banana from "./cakes-images/Banana_cake.jpg"
import selva from "./cakes-images/Black_Forest.jpg"
import queso from "./cakes-images/Cheesecake.jpg"
import stout from "./cakes-images/Chocolate_Stout.jpg"
import choco from "./cakes-images/Chocotorta.jpg"
import cafe from "./cakes-images/Coffee_cake.jpg"
import dundee from "./cakes-images/Dundee_cake.jpg"
import fruta from "./cakes-images/Fruitcake.jpg"
import funnel from "./cakes-images/funnel_cake.jpg"
import marble from "./cakes-images/marble_cake.jpg"
import plum from "./cakes-images/Plum_cake.jpg"

const data = {
    count:15,
    results: [
        {
            id:1,
            title: "Amandine",
            description: "Bizcocho en capas de chocolate relleno de chocolate, caramelo y crema fondant.",
            cost:100,
            categories: ["chocolate","caramelo"],
            imgName:"Amandine_cake",
            img: {amadine}
        },
        {
            id:2,
            title:"Torta de Angel",
            description: "Un tipo de bizcocho en capas, a menudo adornado con crema y colorante para alimentos.",
            cost:140,
            categories: ["cream","vainilla"],
            imgName:"Angel_Slice",
            img: {angel}
        },
        {
            id:3,
            title:"Torta de Manzana",
            description: "Un pastel con manzanas, ocasionalmente cubierto con glaseado de caramelo.",
            cost:100,
            categories: ["manzana","caramelo","helado"],
            imgName:"Apple_cake",
            img: {manzana}
        },
        {
            id:4,
            title:"Babka",
            description: "Un pastel dulce trenzado que se originó en las comunidades judías.",
            cost:55,
            categories: ["fruta","chocolate","manzana"],
            imgName:"Babka",
            img: {babka}
        },
        {
            id:5,
            title:"Torta de Banana",
            description: "Un pastel con plátano como ingrediente principal.",
            cost:60,
            categories: ["banana"],
            imgName:"Banana_cake",
            img: {banana}
        },
        {
            id:6,
            title:"Chocolate Stout",
            description: "Cualquier bizcocho preparado con cerveza como ingrediente principal; En la foto, un bizcocho de chocolate infundido con cerveza negra.",
            cost:120,
            categories: ["cerveza","chocolate"],
            imgName:"Chocolate_Stout",
            img: {stout}
        },
        {
            id:7,
            title:"Selva Negra",
            description: "Un pastel con cerezas, kirsch y chocolate. Por lo general, hay una capa inferior de masa quebrada de chocolate y dos capas de bizcocho de chocolate; Luego, el pastel se rellena con mermelada de cereza y crema batida.",
            cost:200,
            categories: ["chocolate"],
            imgName:"Black_Forest",
            img: {selva}
        },
        {
            id:8,
            title:"Torta de Queso",
            description: "Un postre con una base delgada hecha de galletas trituradas y una capa superior más gruesa de queso blando, huevos y azúcar. Puede estar horneado o sin hornear (en cuyo caso se refrigera). La capa inferior también puede estar hecha de masa quebrada y, en los países europeos, la capa superior está hecha de cuajada o un tipo cremoso de requesón.",
            cost:80,
            categories: ["queso"],
            imgName:"Cheesecake",
            img: {queso}
        },
        {
            id:9,
            title:"Chocotorta",
            description: "Un pastel hecho con galletas de chocolate, dulce de leche y queso crema.",
            cost:105,
            categories: ["galletitas","chocolate"],
            imgName:"Chocotorta",
            img: {choco}
        },
        {
            id:10,
            title:"Coffe cake",
            description: "Un pastel de una sola capa con sabor a canela y cubierto con una cobertura de migas, destinado a comerse con café.",
            cost:50,
            categories: ["cafe","chocolate"],
            imgName:"Coffee_cake",
            img: {cafe}
        },
        {
            id:11,
            title:"Torta de frutas",
            description: "Un rico bizcocho con frutas confitadas y especias; muchas versiones del pastel contienen grosellas, sultanas y cerezas glaseadas.",
            cost:40,
            categories: ["fruta"],
            imgName:"Fruitcake",
            img: {fruta}
        },
        {
            id:12,
            title:"Torta Dundee",
            description: "Un pastel de frutas sin cerezas glaseadas cubierto con almendras.",
            cost:80,
            categories: ["fruta"],
            imgName:"Dundee_cake",
            img: {dundee}
        },
        {
            id:13,
            title:"Funnelcake",
            description: "Una pasta choux con azúcar en polvo u otros aderezos, generalmente fruta.",
            cost:98,
            categories: ["fruta"],
            imgName:"funnel_cake",
            img: {funnel}
        },
        {
            id:14,
            title:"Torta de Ciruela",
            description: "Pastel preparado con frutas ciruelas como ingredientes principales.",
            cost:65,
            categories: ["fruta"],
            imgName:"Plum_cake",
            img: {plum}
        },
        {
            id:15,
            title:"Torta marbelada",
            description: "Un pastel de mantequilla de vainilla, café o chocolate en el que dos masas de diferentes colores se mezclan para mostrar un patrón similar al mármol.",
            cost:100,
            categories: ["cafe","vainilla","chocolate"],
            imgName:"marble_cake",
            img: {marble}
        }
    ]
}

export default data