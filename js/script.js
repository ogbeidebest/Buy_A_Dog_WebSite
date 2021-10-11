let dogs = [

    {
        Name: 'Gousala Greda',
        Breed: 'Greman sheperd',
        Price: '#120,000',
        img: 'p1'
    },

    {
        Name: 'Terripoo',
        Breed: 'Taiwan Dog',
        Price: '#120,000',
        img: 'p7'
    },

    {
        Name: 'Gousala Greda',
        Breed: 'Greman sheperd',
        Price: '#200,000',
        img: 'p11'
    },
    {
        Name: 'Toy Fox',
        Breed: 'Valley Bulldog',
        Price: '#400,000',
        img: 'p4'
    },
    {
        Name: 'Juliude Jaiu',
        Breed: 'Greman sheperd',
        Price: '#120,000',
        img: 'p2'
    },
    {
        Name: 'Welsh teerier',
        Breed: 'Greman sheperd',
        Price: '#120,000',
        img: 'p6'
    },

    {
        Name: 'Whippet Ujia',
        Breed: 'Caucasian Shepherd',
        Price: '#120,000',
        img: 'p5'

    },

    {
        Name: 'Cav-a Jack',
        Breed: 'Cavapoo',
        Price: '#500,000',
        img: 'p3'

    },

    {
        Name: 'Saint Berdoodle',
        Breed: 'Rottle',
        Price: '#230,000',
        img: 'p9'

    },

    {
        Name: "Pyredoodle Husa",
        Breed: "Rottweiler",
        img: 'p12',
        Price: "#820,000"
    },

    {
        Name: "Swalyham Terrier",
        Breed: "Scottish Terrier",
        Price: "#720,000",
        img: 'p10'
    },

    {
        Name: "Shepsky Shetland",
        Breed: "Greman sheperd",
        Price: "#120,000",
        img: 'p8'
    }

]




let dogSection = document.getElementById('dog-cage');
let html = '';
dogs.forEach(e => {
    html += `
<div class="dog-catergory m-3 rounded-3 col-12 col-lg-3 col-md-4 m-auto">
<div class="dog-image "><img src="./img/${e.img}.jfif" alt="" class="rounded-2"></div>
<div class="py-3 text-justify dog-info ms-5 fw-bold  ">
    <p>${e.Name}</p>
    <p>${e.Breed}</p>
    <p>${e.Price}</p>
    </div>
    <button type="button" class="btn btn-primary btn-lg text-center ms-5 mb-5 justify-center ">Add To Chart</button>
</div>

</div>

</div>

`
    dogSection.innerHTML = html;


});