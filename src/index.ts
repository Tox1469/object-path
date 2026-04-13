function parsePath(path: string | (string | number)[]): (string | number)[] {
  if (Array.isArray(path)) return path;
  const parts: (string | number)[] = [];
  const regex = /[^.[\]]+/g;
  let m;
  while ((m = regex.exec(path)) !== null) {
    const token = m[0];
    parts.push(/^\d+$/.test(token) ? Number(token) : token);
  }
  return parts;
}

export function get<T = any>(obj: any, path: string | (string | number)[], defaultValue?: T): T {
  const parts = parsePath(path);
  let cur = obj;
  for (const p of parts) {
    if (cur === null || cur === undefined) return defaultValue as T;
    cur = cur[p];
  }
  return (cur === undefined ? defaultValue : cur) as T;
}

export function set<T extends object>(obj: T, path: string | (string | number)[], value: any): T {
  const parts = parsePath(path);
  if (parts.length === 0) return obj;
  let cur: any = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const key = parts[i];
    const next = parts[i + 1];
    if (cur[key] === undefined || cur[key] === null) {
      cur[key] = typeof next === "number" ? [] : {};
    }
    cur = cur[key];
  }
  cur[parts[parts.length - 1]] = value;
  return obj;
}

export function has(obj: any, path: string | (string | number)[]): boolean {
  const parts = parsePath(path);
  let cur = obj;
  for (const p of parts) {
    if (cur === null || cur === undefined || !(p in cur)) return false;
    cur = cur[p];
  }
  return true;
}

export function del(obj: any, path: string | (string | number)[]): boolean {
  const parts = parsePath(path);
  if (parts.length === 0) return false;
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    if (cur === null || cur === undefined) return false;
    cur = cur[parts[i]];
  }
  if (cur === null || cur === undefined) return false;
  const last = parts[parts.length - 1];
  if (!(last in cur)) return false;
  delete cur[last];
  return true;
}

export const objectPath = { get, set, has, del };
