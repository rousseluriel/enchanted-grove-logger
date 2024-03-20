class EnchantedGroveLogger {
  constructor(options = {}) {
    this.prefix = options.prefix || '[Enchanted Grove]';
    this.enableTimestamp = options.enableTimestamp || false;
  }

  log(message) {
    this._print('LOG', message);
  }

  info(message) {
    this._print('INFO', message);
  }

  warn(message) {
    this._print('WARN', message);
  }

  error(message) {
    this._print('ERROR', message);
  }

  _print(level, message) {
    const timestamp = this.enableTimestamp ? new Date().toISOString() + ' ' : '';
    console.log(`${timestamp}${this.prefix} [${level}] ${message}`);
  }
}

module.exports = EnchantedGroveLogger;
