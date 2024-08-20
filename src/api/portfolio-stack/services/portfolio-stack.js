'use strict';

/**
 * portfolio-stack service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::portfolio-stack.portfolio-stack');
