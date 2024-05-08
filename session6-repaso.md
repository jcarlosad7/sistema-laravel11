### Breeze
Vamos a realizar el mantenimiento de la tabla
tipo_comprobante
    - id
    - codigo
    - descripción

# 1. Crear la migración
 ```bash
    php artisan make:migration create_tipo_comprobante_table
```
# 2. Ejecutamos la migración
 ```bash
    php artisan migrate:fresh --seed
```
# 3. Creamos el modelo
 ```bash
    php artisan make:model TipoComprobante
```

# 4. Creamos el controlador
 ```bash
    php artisan make:controller TipoComprobanteController --resource --model=TipoComprobante
```

# 5. Creamos el request
 ```bash
    php artisan make:request TipoComprobanteRequest
```

# 6. Agregamos la ruta, al routes/web.php
 ```bash
    Route::resource('tipo-comprobante', TipoComprobanteController::class);
```

# 7. Agregamos las vitas
Creamos una carpeta tipo-comprobante en la carpeta resources/views
y dentro agregamos dos archivos:
index.blade.php
action.blade.php