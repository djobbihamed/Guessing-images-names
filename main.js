
var array = [
    {
        srcImg: "https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/8/8/6/886f46b709_115073_pyramides-gizeh-egypte.jpg",
        nameImg: "pyramid",
    },
    {
        srcImg: "https://a.cdn-hotels.com/gdcs/production107/d625/d22d2448-0238-4573-b055-6b079e972dbb.jpg",
        nameImg: "Arc de Trianphe",
    },
    {
        srcImg: "https://www.rivieratravel.co.uk/blog/wp-content/uploads/2020/01/7-wonders-of-the-World-Taj-Mahal.jpg",
        nameImg: "taj mahal",
    },
    {
        srcImg: https: https: "//images.adsttc.com/media/images/5b63/0d9b/f197/cc8a/0200/02f7/slideshow/01_-_Hero_Shot.jpg?1533218185",
    nameImg: "the great wall of china",
    },
    {
        srcImg: "https://sandinmysuitcase.com/wp-content/uploads/2018/03/Leaning-Tower-of-Pisa.jpg.webp",
    nameImg: "tower pisa",
    },
    {
    srcImg: "https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg",
    nameImg: "eiffel tower",
    },
    {
        srcImg: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/73/d0/17.jpg",
    nameImg: "christ the redeemer",
    }
]


var each = function (coll, func) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
            func(coll[i], i)
        }
    }
    else {
        for (var key in coll) {
            func(coll[key], key)
        }
    }
}
var filter = function (array, predicate) {
    var acc = [];
    each(array, function (e, i) {
        if (predicate(e, i)) {
            acc.push(e)
        }
    })
    return acc;
}
var random = Math.floor(Math.random() * array.length)
var namet = array[random].nameImg
var randomimg = array[random].srcImg
var image = $("<div><img class='images' src=" + randomimg + " alt='not found'></div>")
$("#img").append(image);

// console.log("hi")
$("#btn").click(function () {
    console.log(namet)

    if (namet.toLowerCase() === $("#txt").val().toLowerCase()) {

        $("#img").empty()
        random = Math.floor(Math.random() * array.length)
        namet = array[random].nameImg
        randomimg = array[random].srcImg
        var image = $("<div><img class='images' src=" + randomimg + " alt='not found'></div>")
        $("#img").append(image);
    }
    else {
        alert("Try again")

    }




})


