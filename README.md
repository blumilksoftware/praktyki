# Praktyki
### Strona dla programu praktyk

### Copy `.env` file

```
cp .env.example .env
```

### Docker development

```
docker-compose up -d
```

### Installation

```
docker-compose exec node npm install
```

### Compiles and hot-reloads for development

```
docker-compose exec node npm run dev
```

### Compiles and minifies for production

```
docker-compose exec node npm run build
```

### Lints files

```
docker-compose exec node npm run lint
```

### Available containers

| service | container name | default external port |
| ------- |----------------|-----------------------|
| node    | praktyki-node  | 3000                  |