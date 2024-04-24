# Desarrollo de aplicaciones distribuidas
## Sesión 3
# Si descargamos el código de github
```bash
    composer update
```

# Si queremos ver todas las ruta
```bash
    php artisan route:list
```
### Controladores
Crear un controlador para gestionar los recursos de la tabla categorías

```bash
    php artisan make:controller CategoriaController --resource --model=Categoria
```