/** @typedef {{ path: string, color?: string, label?: string, icon: React.ComponentType<{ fontSize?: number, style?: Record<string, any> }>, sub?: Array<{ path: string, label?: string, icon: React.ComponentType<{ fontSize?: number, style?: Record<string, any> }> }> }} NavItem */
/** @typedef {{label: string, key: number }} Tab */

/**
 * @typedef {Object} SupportSuggestion
 * @property {string} label
 * @property {string} color
 * @property {import("react").ComponentType<{fontSize?: number, color?: string}>} icon
 */

/**
 * @typedef {Object} FilterLabel
 * @property {string} label
 * @property {string} accent
 * @property {import("react").ComponentType<{fontSize?: number, color?: string}>} icon
 */

/**
 * @typedef {{label: string, align?: import("@mui/material").TableCellProps["align"] | undefined, icon?: React.ComponentType<{ fontSize?: number, style?: Record<string, any> }>}} TableColumn
 */

export {};
