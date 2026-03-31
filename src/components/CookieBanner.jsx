import { useEffect, useState } from "react";

const CONSENT_KEY = "elec_consent";
const PREFS_KEY = "elec_prefs";

const defaultPrefs = { necessary: true, analytics: false, marketing: false };

function CookieBanner({ openSettingsTrigger }) {
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [prefs, setPrefs] = useState(defaultPrefs);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    const saved = localStorage.getItem(PREFS_KEY);
    if (!consent) {
      setVisible(true);
    }
    if (saved) {
      try {
        setPrefs(JSON.parse(saved));
      } catch {
        setPrefs(defaultPrefs);
      }
    }
  }, []);

  useEffect(() => {
    if (openSettingsTrigger > 0) {
      setVisible(true);
      setSettingsOpen(true);
    }
  }, [openSettingsTrigger]);

  const saveConsent = (value, nextPrefs) => {
    localStorage.setItem(CONSENT_KEY, value);
    localStorage.setItem(PREFS_KEY, JSON.stringify(nextPrefs));
    setPrefs(nextPrefs);
    setVisible(false);
    setSettingsOpen(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-banner__content">
        <h3 className="cookie-banner__title">We use cookies</h3>
        <p className="cookie-banner__text">
          We use cookies to remember your preferences and improve your learning
          experience.
        </p>
        <div className="cookie-banner__actions">
          <button
            type="button"
            className="cookie-btn cookie-btn--primary"
            onClick={() =>
              saveConsent("accepted", {
                necessary: true,
                analytics: true,
                marketing: true,
              })
            }
          >
            Accept all
          </button>
          <button
            type="button"
            className="cookie-btn cookie-btn--secondary"
            onClick={() => saveConsent("necessary", defaultPrefs)}
          >
            Necessary only
          </button>
          <button
            type="button"
            className="cookie-btn cookie-btn--link"
            onClick={() => setSettingsOpen((prev) => !prev)}
          >
            Cookie settings
          </button>
        </div>
        <div className={`cookie-settings ${settingsOpen ? "cookie-settings--open" : ""}`}>
          <div className="cookie-settings__item">
            <label>
              <input type="checkbox" checked disabled /> Necessary
            </label>
            <span className="cookie-settings__desc">
              Required for basic website functionality.
            </span>
          </div>
          <div className="cookie-settings__item">
            <label>
              <input
                type="checkbox"
                checked={prefs.analytics}
                onChange={(e) =>
                  setPrefs((prev) => ({ ...prev, analytics: e.target.checked }))
                }
              />{" "}
              Analytics
            </label>
          </div>
          <div className="cookie-settings__item">
            <label>
              <input
                type="checkbox"
                checked={prefs.marketing}
                onChange={(e) =>
                  setPrefs((prev) => ({ ...prev, marketing: e.target.checked }))
                }
              />{" "}
              Marketing
            </label>
          </div>
          <button
            type="button"
            className="cookie-btn cookie-btn--primary"
            onClick={() => saveConsent("custom", prefs)}
          >
            Save preferences
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;
