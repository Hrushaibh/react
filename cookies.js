/**
 * Cookie integration: consent banner, storage utilities, and preference management
 */

const COOKIE_CONSENT = 'elec_consent';
const COOKIE_PREFS = 'elec_prefs';
const COOKIE_DAYS = 365;

function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + d.toUTCString() + ';path=/;SameSite=Lax';
}

function getCookie(name) {
  const nameEq = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1);
    if (c.indexOf(nameEq) === 0) return decodeURIComponent(c.substring(nameEq.length));
  }
  return null;
}

function deleteCookie(name) {
  document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
}

function hasConsent() {
  return getCookie(COOKIE_CONSENT) !== null;
}

function getPreferences() {
  try {
    const raw = getCookie(COOKIE_PREFS);
    return raw ? JSON.parse(raw) : { necessary: true, analytics: false, marketing: false };
  } catch {
    return { necessary: true, analytics: false, marketing: false };
  }
}

function savePreferences(prefs) {
  setCookie(COOKIE_PREFS, JSON.stringify(prefs), COOKIE_DAYS);
}

function acceptAll() {
  setCookie(COOKIE_CONSENT, 'accepted', COOKIE_DAYS);
  savePreferences({ necessary: true, analytics: true, marketing: true });
  hideBanner();
}

function acceptNecessary() {
  setCookie(COOKIE_CONSENT, 'necessary', COOKIE_DAYS);
  savePreferences({ necessary: true, analytics: false, marketing: false });
  hideBanner();
}

function hideBanner() {
  const el = document.getElementById('cookie-banner');
  if (el) el.classList.add('cookie-banner--hidden');
}

function showSettings() {
  const el = document.getElementById('cookie-settings');
  if (el) el.classList.toggle('cookie-settings--open');
}

function togglePreference(key) {
  const prefs = getPreferences();
  prefs[key] = !prefs[key];
  savePreferences(prefs);
  renderSettingsCheckboxes();
}

function renderSettingsCheckboxes() {
  const prefs = getPreferences();
  ['analytics', 'marketing'].forEach(key => {
    const cb = document.getElementById('cookie-pref-' + key);
    if (cb) cb.checked = prefs[key];
  });
}

function saveSettings() {
  const prefs = {
    necessary: true,
    analytics: document.getElementById('cookie-pref-analytics')?.checked ?? false,
    marketing: document.getElementById('cookie-pref-marketing')?.checked ?? false
  };
  savePreferences(prefs);
  setCookie(COOKIE_CONSENT, 'custom', COOKIE_DAYS);
  showSettings();
  hideBanner();
}

function injectBanner() {
  if (document.getElementById('cookie-banner')) return;

  const html = `
    <div id="cookie-banner" class="cookie-banner">
      <div class="cookie-banner__content">
        <h3 class="cookie-banner__title">We use cookies</h3>
        <p class="cookie-banner__text">
          We use cookies to remember your preferences, improve your experience, and analyze site usage.
          Necessary cookies are always active. You can choose which optional cookies to accept.
        </p>
        <div class="cookie-banner__actions">
          <button type="button" class="cookie-btn cookie-btn--primary" id="cookie-accept-all">Accept all</button>
          <button type="button" class="cookie-btn cookie-btn--secondary" id="cookie-necessary">Necessary only</button>
          <button type="button" class="cookie-btn cookie-btn--link" id="cookie-settings-btn">Cookie settings</button>
        </div>
        <div id="cookie-settings" class="cookie-settings">
          <div class="cookie-settings__item">
            <label><input type="checkbox" checked disabled> Necessary</label>
            <span class="cookie-settings__desc">Required for the site to work. Cannot be disabled.</span>
          </div>
          <div class="cookie-settings__item">
            <label><input type="checkbox" id="cookie-pref-analytics"> Analytics</label>
            <span class="cookie-settings__desc">Help us understand how you use the site.</span>
          </div>
          <div class="cookie-settings__item">
            <label><input type="checkbox" id="cookie-pref-marketing"> Marketing</label>
            <span class="cookie-settings__desc">Used for personalized course recommendations.</span>
          </div>
          <button type="button" class="cookie-btn cookie-btn--primary" id="cookie-save-settings">Save preferences</button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', html);

  document.getElementById('cookie-accept-all').addEventListener('click', acceptAll);
  document.getElementById('cookie-necessary').addEventListener('click', acceptNecessary);
  document.getElementById('cookie-settings-btn').addEventListener('click', showSettings);
  document.getElementById('cookie-save-settings').addEventListener('click', saveSettings);

  document.getElementById('cookie-pref-analytics').addEventListener('change', function () {
    togglePreference('analytics');
  });
  document.getElementById('cookie-pref-marketing').addEventListener('change', function () {
    togglePreference('marketing');
  });

  renderSettingsCheckboxes();
}

function showBanner() {
  if (!document.getElementById('cookie-banner')) injectBanner();
  else document.getElementById('cookie-banner').classList.remove('cookie-banner--hidden');
}

function initCookies() {
  if (!hasConsent()) {
    injectBanner();
  } else {
    document.addEventListener('click', function openSettings(e) {
      if (e.target.closest('[data-cookie-settings]')) {
        e.preventDefault();
        showBanner();
        showSettings();
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', initCookies);
