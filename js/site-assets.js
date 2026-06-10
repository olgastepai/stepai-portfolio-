/**
 * Надёжные пути к ресурсам на GitHub Pages и локально.
 */
(function () {
  'use strict';

  var REPO = 'olgastepai/stepai-portfolio-';
  var BRANCH = 'main';

  function repoBase() {
    if (!location.hostname.endsWith('github.io')) return null;
    var parts = location.pathname.split('/').filter(Boolean);
    return parts.length ? '/' + parts[0] + '/' : '/';
  }

  function localBase() {
    var base = document.getElementById('site-base');
    return base ? base.href : './';
  }

  function assetUrl(path) {
    path = String(path || '').replace(/^\//, '');
    var gh = repoBase();
    if (gh) return gh + path;
    try {
      return new URL(path, localBase()).href;
    } catch (e) {
      return path;
    }
  }

  function cdnUrl(path) {
    path = String(path || '').replace(/^\//, '');
    return 'https://cdn.jsdelivr.net/gh/' + REPO + '@' + BRANCH + '/' + path;
  }

  function applySrc(el, path) {
    var primary = assetUrl(path);
    var fallback = cdnUrl(path);
    el.src = primary;
    if (el.tagName === 'IMG') {
      el.onerror = function () {
        if (el.src !== fallback) el.src = fallback;
      };
    }
  }

  function fixImages() {
    document.querySelectorAll('img[data-asset]').forEach(function (img) {
      applySrc(img, img.getAttribute('data-asset'));
    });
  }

  function fixFrames() {
    document.querySelectorAll('iframe[data-asset]').forEach(function (frame) {
      applySrc(frame, frame.getAttribute('data-asset'));
    });
  }

  function fixLinks() {
    document.querySelectorAll('a[data-asset]').forEach(function (a) {
      a.href = assetUrl(a.getAttribute('data-asset'));
    });
  }

  function fixStylesheet() {
    var link = document.getElementById('site-css');
    if (!link) return;
    var path = link.getAttribute('data-asset') || 'css/portfolio.css';
    link.href = assetUrl(path);
    link.onerror = function () {
      if (link.href !== cdnUrl(path)) link.href = cdnUrl(path);
    };
  }

  function fixScripts() {
    document.querySelectorAll('script[data-asset]').forEach(function (script) {
      script.src = assetUrl(script.getAttribute('data-asset'));
    });
  }

  function init() {
    fixStylesheet();
    fixImages();
    fixFrames();
    fixLinks();
    fixScripts();
  }

  window.StepAIAssets = {
    url: assetUrl,
    cdn: cdnUrl,
    init: init
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
