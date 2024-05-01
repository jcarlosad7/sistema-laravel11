<div class="modal-content">
    <div class="modal-header">
        <h4 class="modal-title" id="modal-title">Nuevo</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
        <div class="form-group">
        <label for="nombre">Nombre</label>
        <input type="email" class="form-control" id="nombre" placeholder="Ingrese nombre" value="{{$categoria->nombre}}">
        </div>
        <div class="form-group">
        <button type="button" class="btn btn-primary" id="guardar">Guardar</button>
        </div>
    </div>
    <div class="modal-footer justify-content-between">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
    </div>
</div>