function beritaUtama(){
     $('#beritaTerbaru').html('');
    $.ajax({
        url: 'https://the-lazy-media-api.vercel.app/api/search',
        type: 'get',
        dataType: 'json',
        data: {
            'search': $('#search-input').val(),
        },
        success: function(result) {
            if(result=='') {
                $('#beritaTerbaru').append(`
                    <h1 class="text-center"> Pencarian tidak ditemukan </h1>
                `)
            }
            // console.log(result)
            $.each(result, function (i, data) {
                $('#beritaTerbaru').append(`
                    <div class='col-md-4'>
                    <div class="card mb-4">
                        <img src=${data.thumb} class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title mb-4">${data.title}</h5>
                            <div class="row mb-3">
                                <h6 class="col card-subtitle mb-2 text-muted">Author ${data.author}</h6>
                                <h6 class="col card-subtitle mb-2 text-muted">${data.time}</h6>
                            </div>
                            <p class="card-subtitle text-justify mb-4 text-muted">${data.desc}</p>
                        </div>
                    </div>
                    </div>
                `)
            })
            
        $('#search-input').val('');
        }
    })
}

const container = document.getElementById('container');

$('#search-button').on('click', function() {
    container.classList.remove('d-none')
    beritaUtama()
})

function artikelGames(){
    $.ajax({
        url: 'https://the-lazy-media-api.vercel.app/api/games/',
        type: 'get',
        dataType: 'json', 
        success: function(result) {
            // console.log(result)
            $.each(result, function (i, data) {
                $('#artikelGames').append(`
                    <div class='col-md-4'>
                    <div class="card mb-4">
                        <img src=${data.thumb} class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title mb-4">${data.title}</h5>
                            <div class="row mb-3">
                                <h6 class="col card-subtitle mb-2 text-muted">Author ${data.author}</h6>
                                <h6 class="col card-subtitle mb-2 text-muted">${data.time}</h6>
                            </div>
                            <p class="card-subtitle text-justify mb-4 text-muted">${data.desc}</p>
                        </div>
                    </div>
                    </div>
                `)
            })
        }
    })
}


function artikelTech(){
    $.ajax({
        url: 'https://the-lazy-media-api.vercel.app/api/tech/',
        type: 'get',
        dataType: 'json', 
        success: function(result) {
            // console.log(result)
            $.each(result, function (i, data) {
                $('#artikelTech').append(`
                    <div class='col-md-4'>
                    <div class="card mb-4">
                        <img src=${data.thumb} class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title mb-4">${data.title}</h5>
                            <div class="row mb-3">
                                <h6 class="col card-subtitle mb-2 text-muted">Author ${data.author}</h6>
                                <h6 class="col card-subtitle mb-2 text-muted">${data.time}</h6>
                            </div>
                            <p class="card-subtitle text-justify mb-4 text-muted">${data.desc}</p>
                        </div>
                    </div>
                    </div>
                `)
            })
        }
    })
}

function rekomendasi(){
    $.ajax({
        url: 'https://the-lazy-media-api.vercel.app/api/tech/recommend',
        type: 'get',
        dataType: 'json', 
        success: function(result) {
            // console.log(result)
            $.each(result, function (i, data) {
                $('#rekomendasi').append(`
                    <div class='col-md-4'>
                    <div class="card mb-4">
                        <img src=${data.thumb} class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title mb-4">${data.title}</h5>
                            <div class="row mb-3">
                                <h6 class="col card-subtitle mb-2 text-muted">Author ${data.author}</h6>
                                <h6 class="col card-subtitle mb-2 text-muted">${data.time}</h6>
                            </div>
                            <p class="card-subtitle text-justify mb-4 text-muted">${data.desc}</p>
                        </div>
                    </div>
                    </div>
                `)
            })
        }
    })
}