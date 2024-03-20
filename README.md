# enchanted-grove-logger

A magical logger for enchanting logging experiences.

## Installation

You can install this package via npm:

```bash
npm install enchanted-grove-logger
```

## Usage

```javascript
const EnchantedGroveLogger = require('enchanted-grove-logger');

// Create a new instance of the logger
const logger = new EnchantedGroveLogger({ prefix: '[MyApp]' });

// Log messages
logger.log('This is a log message');
logger.info('This is an info message');
logger.warn('This is a warning message');
logger.error('This is an error message');
```

### Options

You can pass options to customize the logger:

- `prefix` (string, default: '[Enchanted Grove]'): A prefix to be added to each log message.
- `enableTimestamp` (boolean, default: false): Whether to include a timestamp in each log message.

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
