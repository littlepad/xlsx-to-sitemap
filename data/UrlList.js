const Url = require('./Url');

class UrlList {
  constructor(dataList) {
    this.urlList = this._createUrlSet(dataList);
  }

  _createUrlSet(dataList) {
    let list = [];

    if (!dataList) return list;

    dataList.map(url => {
      const urlData = new Url(url.loc, url.lastmod, url.priority, url.changefreq);
      list.push(urlData);
    });

    return list;
  }

  get list() {
    return this.urlList;
  }
}

module.exports = UrlList;
