const url = "/sistemadda/api/categorias/";

function save(bandera) {
    $("#modal-update").modal("hide")
    let id = $("#guardar").data("id");    
    let categoria = {
        id: id,
        nombre : $("#nombre").val()
    }
    let uri = bandera == 1 ? url+"save" : url+"update";
    $.ajax({
        type: "POST",
        url: uri,
        data: JSON.stringify(categoria),
        dataType: "text",
        contentType: "application/json",
        cache: false,
        success: function (data) {
			if(data==0){
				Swal.fire({
	                icon: 'error',
	                title: 'La categoría ya esta registrada',
	                showConfirmButton: false,
	                timer: 1500
	            })				
			}else{
	            let texto = bandera == 1 ? "guardado": "actualizado";
	            getTabla();
	            Swal.fire({
	                icon: 'success',
	                title: 'Se ha '+texto+' la categoria',
	                showConfirmButton: false,
	                timer: 1500
	            })
	            clear();
            }
        },
    }).fail(function () {
        
    });
}

function deleteFila(id) {
    $.ajax({
        type: "POST",
        url: url + "delete",
        data: {
            id: id,
        },
        cache: false,
        timeout: 600000,
        success: function (data) {
            Swal.fire({
                icon: 'success',
                title: 'Se ha eliminado la categoria',
                showConfirmButton: false,
                timer: 1500
            });
            getTabla();
        },
    }).fail(function () {

    });

}

function getTabla() {
    let t = $("#tablaCategorias").DataTable();
    t.clear().draw(false);
    let botonera = '<button type="button" class="btn btn-warning btn-sm editar"><i class="fas fa-edit"></i> </button>' +
        '<button type="button" class="btn btn-danger btn-sm eliminar"><i class="fas fa-trash"></i></button>';

    t.row.add([1, "Categoria 1", botonera]);
    t.row.add([2, "Categoria 2", botonera]);
    t.draw(false);    
}
/*
function getTabla() {
    $.ajax({
        type: "GET",
        url: url,
        dataType: "text",
        cache: false,
        success: function (data) {

            let t = $("#tablaCategorias").DataTable();
            t.clear().draw(false);

            let botonera = '<button type="button" class="btn btn-warning btn-sm editar"><i class="fas fa-edit"></i> </button>' +
                '<button type="button" class="btn btn-danger btn-sm eliminar"><i class="fas fa-trash"></i></button>';

            let js = JSON.parse(data);

            $.each(js, function (a, b) {
                t.row.add([b.id, b.nombre, botonera]);

            });

            t.draw(false);

        },
    }).fail(function () {

    });
}
*/

function getFila(id) {

    $.ajax({
        type: "POST",
        url: url + "find",
        data: {
            id: id,
        },
        cache: false,
        timeout: 600000,
        success: function (data) {
            $("#modal-title").text("Editar Categoria");
            $("#nombre").val(data.nombre);
            $("#guardar").data("id", data.id);
            $("#guardar").data("bandera", 0);
            $("#modal-update").modal("show");
        },
    }).fail(function () {

    });
}

function clear() {
    $("#modal-title").text("Nueva Categoria");
    $("#nombre").val("");
    $("#guardar").data("id", 0);
    $("#guardar").data("bandera", 1);
}

$(document).ready(function () {

    $("#tablaCategorias").DataTable({
        language: {
            lengthMenu: "Mostrar _MENU_ registros",
            zeroRecords: "No se encontraron coincidencias",
            info: "Mostrando del _START_ al _END_ DE _TOTAL_",
            infoEmpty: "Sin resultados",
            search: "Buscar: ",
            paginate: {
                first: "Primero",
                last: "Último",
                next: "Siguiente",
                previous: "Anterior",
            },
        },
        columnDefs: [
            { targets: 0, width: "10%" },
            { targets: 1, width: "80%" },
            { targets: 2, orderable: false, width: "10%" }
        ],
    });

    clear();

    $("#nuevo").click(function () {
        clear();
    });

    $("#guardar").click(function () {

        let bandera = $("#guardar").data("bandera");
        save(bandera);
    })

    $(document).on('click', '.eliminar', function () {
        Swal.fire({
            title: 'Eliminar Categoria',
            text: "¿Esta seguro de querer eliminar esta categoria?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si'
        }).then((result) => {
            if (result.isConfirmed) {
                let id = $($(this).parents('tr')[0].children[0]).text();
                deleteFila(id);
            }
        })
    });

    $(document).on('click', '.editar', function () {
        let id = $($(this).parents('tr')[0].children[0]).text();
        getFila(id);
    });
    getTabla();
});