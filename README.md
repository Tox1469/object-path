# object-path

Get, set, has e delete de valores em objetos aninhados usando dot path ou array.

## Instalação

```bash
npm install object-path
```

## Uso

```ts
import { get, set, has, del } from "object-path";

const obj = { user: { name: "Tox", tags: ["a", "b"] } };

get(obj, "user.name");            // "Tox"
get(obj, "user.tags[0]");         // "a"
get(obj, "user.age", 0);          // 0 (default)
set(obj, "user.address.city", "SP"); // cria caminho
has(obj, "user.name");            // true
del(obj, "user.tags");            // true
```

## API

- `get(obj, path, default?)`
- `set(obj, path, value)` — cria caminho se necessário
- `has(obj, path)`
- `del(obj, path)`
- Aceita `"a.b.c"`, `"a[0].b"` ou `["a", 0, "b"]`

## Licença

MIT
