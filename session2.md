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

## Crear un Seeder
```bash
    php artisan make:seeder CategoriaSeeder
```

 ```bash
    php artisan migrate --seed
    php artisan migrate:refresh --seed
```