class Url {
  constructor(
    loc,
    lastmod,
    priority,
    changefreq
  ) {
    this.loc = loc;
    this.lastmod = lastmod;
    this.priority = priority;
    this.changefreq = changefreq;
  }
}

module.exports = Url;
