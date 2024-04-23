# Desarrollo de aplicaciones distribuidas
## Sesión 3

### Controladores
Crear un controlador para gestionar los recursos de la tabla categorías

```bash
    php artisan make:controller CategoriaController --resource --model=Categoria
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