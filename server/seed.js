import Services from "./models/ServicesModel.js";

export const seedData = () => {
    // Water category 
    Services.create({
        name: 'Faucet widespread',
        description: 'install brushed nickle widespread faucet for bathroom',
        image: 'https://s3.img-b.com/image/private/c_lpad,f_auto,h_1200,t_base,w_1200/v3/product/kohler/kohler-k-14406-4-bn-199.jpg',
        price: '499',
        category: 'water'
    })
    Services.create({
        name: 'Faucet widespread',
        description: 'install chrome widespread faucet for bathroom',
        image: 'https://s3.img-b.com/image/private/c_lpad,f_auto,h_1200,t_base,w_1200/v3/product/kohler/kohler-k-14406-4-cp-200.jpg',
        price: '699',
        category: 'water'
    })
    Services.create({
        name: 'Kitchen faucet widespread',
        description: 'install chrome widespread faucet for kitchen',
        image: 'https://s3.img-b.com/image/private/c_lpad,f_auto,h_1200,t_base,w_1200/v3/product/kohler/kohler-k-596-cp-456.jpg',
        price: '699',
        category: 'water'
    })
    Services.create({
        name: 'Kitchen faucet widespread',
        description: 'install brushed nickel widespread faucet for kitchen',
        image: 'https://s3.img-b.com/image/private/c_lpad,f_auto,h_1200,t_base,w_1200/v3/product/kohler/kohler-k-596-vs-457.jpgg',
        price: '699',
        category: 'water'
    })
    Services.create({
        name: 'Faucet centerpiece',
        description: 'install chrome centerpiece faucet for bathroom',
        image: 'https://s3.img-b.com/image/private/c_lpad,f_auto,h_1200,t_base,w_1200/v3/product/kohler/kohler-k-13490-4-cp-173.jpg',
        price: '699',
        category: 'water'
    })
    Services.create({
        name: 'Faucet centerpiece',
        description: 'install brushed nickle centerpiece faucet for bathroom',
        image: 'https://s3.img-b.com/image/private/c_lpad,f_auto,h_1200,t_base,w_1200/v3/product/kohler/kohler-k-13490-4-bn-174.jpg',
        price: '699',
        category: 'water'
    })
    Services.create({
        name: 'Faucet widespread',
        description: 'install customer provided faucet',
        price: '300',
        category: 'water'
    })
    Services.create({
        name: 'Shower valve',
        description: 'Install Moen positemp showervalve',
        image: 'https://s3.img-b.com/image/private/c_lpad,f_auto,h_220,t_base,w_220/v3/product/moen/moen-2570-64.jpg',
        price: '1300',
        category: 'water'
    })
    Services.create({
        name: 'Shower catridge',
        description: 'new Shower catridge',
        image: 'https://s3.img-b.com/image/private/c_lpad,f_auto,h_220,t_base,w_220/v3/product/moen/product_only_35294.jpg',
        price: '299',
        category: 'water'
    })
    Services.create({
        name: 'Waterheater',
        description: 'new 50 gallon waterheater',
        image: 'https://s3.amazonaws.com/bradfordwhitecorp/wp-content/uploads/thumb_product_residential_gas_atmospheric_vent_101.jpg',
        price: '1700',
        category: 'water'
    })
    Services.create({
        name: 'Tankless waterheater',
        description: 'new tankless waterheater',
        image: 'https://m.media-amazon.com/images/I/51KkVlFseEL._AC_SX679_.jpg',
        price: '4999',
        category: 'water'
    })
    Services.create({
        name: 'Water leak detection',
        description: 'Detect and diagnose water leak',
        image: 'https://m.media-amazon.com/images/I/51KkVlFseEL._AC_SX679_.jpg',
        price: '4999',
        category: 'water'
    })

    //Gas category
    Services.create({
        name: 'Gas leak repair',
        description: 'Gas leak repair on pipe - price avaliable in person',
        iamge: 'https://images.unsplash.com/photo-1505832773278-f0d50c13dbe0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGdhcyUyMHBpcGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        price: '0',
        category: 'gas'
    })
    Services.create({
        name: 'Gas leak detection',
        description: 'Gas leak detection on pipe',
        iamge: 'https://images.unsplash.com/photo-1505832773278-f0d50c13dbe0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGdhcyUyMHBpcGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        price: '230',
        category: 'gas'
    })
    Services.create({
        name: 'Gas shutoff valve',
        description: 'new shutoff valve',
        image: 'https://m.media-amazon.com/images/I/51KkVlFseEL._AC_SX679_.jpg',
        price: '210',
        category: 'gas'
    })
    // Sewer
    Services.create({
        name: 'Drain unclogging',
        description: 'Unclog drain',
        image: 'https://i5.walmartimages.com/asr/f7bc20a7-b56a-4658-8f9e-3a248cc71c07.d73ff42757ca84ba8da14cad765b69f2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        price: '250',
        category: 'sewer'
    })
    Services.create({
        name: 'Drain cleaning - hydrojetting',
        description: 'Clean and unclog your drains with a high psi water jet hose',
        image : 'https://glennmechanical.com/images/jetter.jpg',
        price: '699',
        category: 'sewer'
    })

}