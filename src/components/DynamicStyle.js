import React from "react";

/**
 * Converts JS object into CSS rules.
 * @param {object} styleObj - JS-CSS object
 */
function toCss(ruleName, styleObj) {
  const cssRuleName = camelCaseToDash(ruleName).replace(/^([a-z])/, ".$1");
  const cssRule = Object.entries(styleObj)
    .map(entry => `${camelCaseToDash(entry[0])}: ${entry[1]}`)
    .join(";");

  return `${cssRuleName} {${cssRule};}`;
}

/**
 * Converts camel-case strings into dash-separated strings
 * @param {string} str - cameled case string to convert.
 * @returns {string} camelCase -> camel-case
 */
function camelCaseToDash(str) {
  return str
    .replace(/([a-z_])([A-Z])/g, (match, p1, p2) => `${p1}-${p2.toLowerCase()}`)
    .replace("_", "-");
}

/**
 * DynamicStyle - user defined styles component.
 * Recieves configurations based on user decision and alters CSS rules
 */
function DynamicStyle({
  itemSpacing,
  itemRelativeWidth,
  itemPadding,
  itemSpacingFillColor,
  cornerRadius
}) {
  const rules = {};

  rules.itemWrapper = {
    position: "relative",
    padding: `${itemSpacing / 2}px`,
    width: `${itemRelativeWidth}%`,
    boxShadow: `0 0 0 ${itemSpacing / 2}px ${itemSpacingFillColor} inset`
  };

  rules.item = {
    padding: `${itemPadding}px`,
  };

  rules.corner = {
    width: `${cornerRadius}px`,
    height: `${cornerRadius}px`,
    fill: itemSpacingFillColor
  };

  rules.corner_Tl = {
    top: `${itemSpacing / 2}px`,
    left: `${itemSpacing / 2}px`
  };

  rules.corner_Bl = {
    bottom: `${itemSpacing / 2}px`,
    left: `${itemSpacing / 2}px`
  };

  rules.corner_Tr = {
    top: `${itemSpacing / 2}px`,
    right: `${itemSpacing / 2}px`
  };

  rules.corner_Br = {
    bottom: `${itemSpacing / 2}px`,
    right: `${itemSpacing / 2}px`
  };

  const renderedRules = Object.entries(rules).map(entry =>
    toCss(entry[0], entry[1])
  );

  return <style>{renderedRules}</style>;
}

export default DynamicStyle;
