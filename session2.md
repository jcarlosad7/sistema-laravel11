# Desarrollo de aplicaciones distribuidas
## Sesión 2

### Migraciones
Crear una migración para la tabla categoría

```bash
    php artisan make:migration create_categorias_table
```

Ejecutamos las migraciones

```bash
    php artisan migrate
```

```bash
    php artisan migrate:refresh
```

## Crear un modelo
 ```bash
    php artisan make:model Categoria
```