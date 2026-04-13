[![CI](https://img.shields.io/github/actions/workflow/status/Tox1469/object-path/ci.yml?style=flat-square&label=ci)](https://github.com/Tox1469/object-path/actions)
[![License](https://img.shields.io/github/license/Tox1469/object-path?style=flat-square)](LICENSE)
[![Release](https://img.shields.io/github/v/release/Tox1469/object-path?style=flat-square)](https://github.com/Tox1469/object-path/releases)
[![Stars](https://img.shields.io/github/stars/Tox1469/object-path?style=flat-square)](https://github.com/Tox1469/object-path/stargazers)

---

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