/**
 * =================================================================
 * GLOBAL SITE CONFIGURATION
 * =================================================================
 * This file contains global settings for the entire application.
 *
 */

/**
 * GLOBAL_DISCOUNT
 * -----------------------------------------------------------------
 * Set a store-wide discount percentage for all products.
 * - Set to 0 to disable the global discount.
 * - Any value greater than 0 will be applied as a percentage discount.
 * - Individual product discounts will override this global setting.
 *
 * Example:
 * - To apply a 20% discount on all products, set:
 *   export const GLOBAL_DISCOUNT = 20;
 *
 * - To turn off the global sale, set:
 *   export const GLOBAL_DISCOUNT = 0;
 */
export const GLOBAL_DISCOUNT = 0;
