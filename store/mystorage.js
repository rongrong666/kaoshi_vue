// 封装操作localstorage本地存储的方法  模块化

var storage = {
  set (key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    // localStorage.key = value;
    // localStorage[key] = value;
  },
  get (key) {
    return JSON.parse(localStorage.getItem(key));
  },
  getForIndex (index) {
    return localStorage.key(index);
  },
  getKeys () {
    var items = this.getAll();
    var keys = [];
    for (let index = 0; index < items.length; index++) {
      keys.push(items[index].key);
    }
    return keys;
  },
  getLength () {
    return localStorage.length;
  },
  remove (key) {
    localStorage.removeItem(key);
  },
  removeAll () {
    localStorage.clear();
  }
}

export default storage;
