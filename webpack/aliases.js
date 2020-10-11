const path = require('path');

module.exports = {
    App: path.resolve(__dirname, '../src/app/'),
    Components: path.resolve(__dirname, '../src/app/components/'),
    Content: path.resolve(__dirname, '../src/app/content/'),
    Core: path.resolve(__dirname, '../src/core/'),
    Global: path.resolve(__dirname, '../src/app/global/'),
    Layout: path.resolve(__dirname, '../src/app/layout/'),
    Modules: path.resolve(__dirname, '../src/app/modules/'),
    Pages: path.resolve(__dirname, '../src/app/pages/'),
    Redux: path.resolve(__dirname, '../src/core/redux/'),
    Routing: path.resolve(__dirname, '../src/core/routing/'),
    Templates: path.resolve(__dirname, '../src/app/templates/'),
    Theme: path.resolve(__dirname, '../src/app/theme/'),
    Util: path.resolve(__dirname, '../src/core/util')
};
