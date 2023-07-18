import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ProductLists from './components/ProductLists.jsx'

function App() {

  const products = [
    {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      imageUrl: "https://my-test-11.slatic.net/p/3cca5743b5d77ff66e1160c1fd75fa21.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating:  4.5,
      sold: 87,
      price: 10.99
    },
    {
      id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      imageUrl: "https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      rating:  4,
      sold: 127,
      price: 209.99
    },
    {
      id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/41LBf6TkqDL.jpg",
      name: "Adults Plain Cotton T-Shirt - 2 Pack",
      rating:  4.5,
      sold: 56,
      price: 7.99
    },
    {
      id: "54e0eccd-8f36-462b-b68a-8182611d9add",
      imageUrl: "https://media.4rgos.it/i/Argos/9300804_R_Z001A?w=750&h=440&qlt=70",
      name: "2 Slot Toaster - Black",
      rating:  5,
      sold: 2197,
      price: 18.99
    },
    {
      id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
      imageUrl: "https://lzd-img-global.slatic.net/g/p/acc25f629ba9702c8becb51feeeec739.jpg_720x720q80.jpg",
      name: "6 Piece White Dinner Plate Set",
      rating:  4,
      sold: 37,
      price: 20.67
    },
    {
      id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
      imageUrl: "https://target.scene7.com/is/image/Target/GUEST_a1007b10-a310-49a9-961c-22b0a1109314?wid=488&hei=488&fmt=pjpeg",
      name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
      rating:  4.5,
      sold: 175,
      price: 34.99
    },
    {
      id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
      imageUrl: "https://www.naykedapparel.com/cdn/shop/products/nayked-apparel-women-men-s-ridiculously-soft-fleece-pullover-hoodie-37875798704363_1178x.jpg?v=1660688571",
      name: "Plain Hooded Fleece Sweatshirt",
      rating:  4.5,
      sold: 317,
      price: 24.25
    },
    {
      id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
      imageUrl: "https://hugathome.co.uk/cdn/shop/products/BambooStackCharcoal_750x750.progressive.jpg?v=1612608632",
      name: "Luxury Towel Set - Graphite Gray",
      rating:  4.5,
      sold: 144,
      price: 35.99
    },
    {
      id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
      imageUrl: "https://images.thdstatic.com/productImages/de7b62b7-1295-4045-98a6-64492240c49d/svn/persil-laundry-detergents-42370-44_600.jpg",
      name: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
      rating:  4.5,
      sold: 305,
      price: 28.99
    },
    {
      id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
      imageUrl: "https://marvel-b1-cdn.bc0a.com/f00000000114841/www.florsheim.com/shop/thumbnails/13390-051_t.jpg",
      name: "Waterproof Knit Athletic Sneakers",
      rating:  4,
      sold: 89,
      price: 33.90
    },
    {
      id: "5968897c-4d27-4872-89f6-5bcb052746d7",
      imageUrl: "https://i5.walmartimages.com/asr/24a43739-7ff5-4ac4-b0b9-1e0a74dede5b.bc41b891832a9d86402c53b049ea4734.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
      name: "Women's Chiffon Beachwear Cover Up - Black",
      rating: 4.5,
      sold: 235,
      price: 20.70
    }
  ]

  const productCardList = products.map((product) => <ProductLists key={product.id} image={product.imageUrl} title={product.name} rating={product.rating} sold={product.sold} price={product.price} />
  ); 

  return (
    <>
      <Navbar />
      { productCardList }
      <Footer />
    </>
  )
}

export default App
