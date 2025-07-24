export function HashMap(loadFactor = 0.75, capacity = 16) {
  let buckets = new Array(capacity).fill(null).map(() => []);
  let size = 0;

  const hash = (key) => {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode % capacity;
  };

  const set = (key, value) => {
    const index = hash(key);
    const bucket = buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }
    bucket.push([key, value]);
    size++;
  };

  const get = (key) => {
    const index = hash(key);
    const bucket = buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket;
      }
    }
  };

  const has = (key) => {
    const index = hash(key);
    const bucket = buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return true;
      } else {
        return false;
      }
    }
  };

  const remove = (key) => {
    const index = hash(key);
    const bucket = buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][0] = null;
        bucket[i][1] = null;
        size--;
        return true;
      } else {
        return false;
      }
    }
  };

  const length = () => {
    return size;
  };

  const clear = () => {
    for(let i = 0; i < buckets.length; i++) {
      if(buckets[i][0] !== undefined) {
        buckets[i][0] === null;
        buckets[i][1] === null;
        size--;
      }
    }
  };

  const keys = () => {
    const hashKeys = [];

    for (let i = 0; i < buckets.length; i++) {
      if(buckets[i][0] !== undefined) {
        hashKeys.push(buckets[i][0]);
      }
    }
    return hashKeys;
  };

  const values = () => {
    const hashValues = [];

    for(let i = 0; i < buckets.length; i++) {
      
    }
    return hashValues;
  };

  const entries = () => {};

  return {
    hash,
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
  };
}
